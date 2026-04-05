(function($){
    const functions = {
        validate: function(value){
            const $this = $(this);
            const validations = this.mod_textareaAssist.validations;
            let error = '';
            $.each(validations, function(i, rule){
                if('function' === typeof rule){
                    error = rule.call($this.get(0), value);
                }
                if(error){
                    return false;
                }
            });
            return error || '';
        },
    }

    const validations = [
        // 重複チェック
        function(value){
            if('' === value) return '';
            let isDuplicated = false;
            this.mod_textareaAssist.$itemsBlock.find(':input').each(function(){
                if($(this).val().toLowerCase() === value.toLowerCase()){
                    isDuplicated = true;
                }
                return !isDuplicated;
            });
            return isDuplicated ? '同じ値が既に入力されています。' : '';
        },
    ]
    Mod.fn('mod_textareaAssist', {
        init: function(args){
            return this.each(function(){
                const $this = $(this);
                if(!$this.is('textarea')) return;
                this.mod_textareaAssist = {
                    $itemsBlock: $('<div class="js--textareaAssist__items" />').insertAfter($this),
                    $hiddenInput: $('<input type="hidden" />').attr('name', $this.attr('name')).insertBefore($this),
                    //$hiddenTextarea: $('<textarea class="js--textareaAssist__hiddenTextarea" />').attr('name', $this.attr('name')).hide().insertAfter($this),
                    limitLine: Number($this.data('limit_line') || null),
                    attr_name: $this.attr('name') || null,
                    validations: validations,
                }
                this.mod_textareaAssist.$errorsBlock = $('<div class="js--textareaAssist__errors" />').insertAfter($this);
                $this.attr('name', null);

                $this.on('input', function(e){
                    $this.mod_textareaAssist('convert_lines');
                });
                this.mod_textareaAssist.$itemsBlock.on('click', 'a[data-action="remove"]', function(){
                    $(this).closest('figure').remove();
                    $this.mod_textareaAssist('flush');
                    $this.trigger('change');
                });

                $this.mod_textareaAssist('convert_lines', {initialize:true});
            });
        },
        convert_lines: function(args){
            return this.each(function(){
                const $this = $(this);
                const $itemsBlock = this.mod_textareaAssist.$itemsBlock;
                const attr_name = this.mod_textareaAssist.attr_name + '[]';
                const is_convert_last_line = args?.initialize || false;
                const values = $this.val().split("\n");
                const lastLineIndex = values.length - 1;
                let lastLineValue = '';
                let error = '';
                var countItem = 0;
                const limitLine = this.mod_textareaAssist.limitLine;
                let isChanged = false;

                let errors = [];

                $.each(values, function(i,value){
                    const countItem = $itemsBlock.find('>figure').length;
                    if('' == value) return true;
                    if(!is_convert_last_line && lastLineIndex == i){
                        lastLineValue = value;
                        return true;
                    }
                    if(limitLine > 0 && countItem >= limitLine){
                        errors.push(`入力できる上限は${limitLine}です。`);
                        return false;
                    }

                    // validate
                    const error = functions.validate.call($this.get(0), value);
                    if(error){
                        errors.push(error);
                        return false;
                    }

                    const $newLine = $('<figure />');
                    $('<span />').text(value).appendTo($newLine);
                    $('<a data-action="remove" />').html("&times;").appendTo($newLine);
                    $('<input type="hidden" />').attr('name', attr_name ).val(value).appendTo($newLine);
                    $newLine.appendTo($itemsBlock);
                    isChanged = true;
                });

                if(!args?.initialize){
                    $this.mod_textareaAssist('toggleError', errors || false);
                }

                $this.val(lastLineValue).focus();
                if(isChanged){
                    //this.mod_textareaAssist.$hiddenTextarea.val(this.mod_textareaAssist.$hiddenTextarea.val()+"\n"+values.join("\n"));
                    $this.mod_textareaAssist('flush');
                    if(!args?.initialize){
                        $this.trigger('change');
                    }
                }

            });
        },
        flush: function(){
            return this.each(function(){
                const $this = $(this);
                $this.trigger('mod_textareaAssist_flush');
                this.mod_textareaAssist.$hiddenInput.prop('disabled', this.mod_textareaAssist.$itemsBlock.find('>figure').length > 0);
                $this.mod_textareaAssist('adjust_position').focus();
                $this.mod_textareaAssist('flushCounting');
            });
        },
        flushCounting: function(){
            return this.each(function(){
                const $this = $(this);
                const $counting = $this.closest(`.form-input`).find(`.e-counting`);
                const $countingCurrent = $counting.find(`.e-counting__current`);
                const $itemsBlock = this.mod_textareaAssist.$itemsBlock;
                const currentNumber = $itemsBlock.find('>figure').length;
                $countingCurrent.text(currentNumber);
                const max = Number($counting.find(`.e-counting__max`).text()) || 0;
                $counting.attr('data-status', max <= currentNumber ? 'inactive' : 'active');
            });
        },
        adjust_position: function(){
            return this.each(function(){
                return;
                const $this = $(this);
                const $itemsBlock = this.mod_textareaAssist.$itemsBlock;
                const adjust_position = () => {
                    const gapY = $itemsBlock.find('figure').length ? $itemsBlock.outerHeight() : 10;
                    //console.log(gapY, $itemsBlock.outerHeight(), $itemsBlock.height());
                    $this.css({
                        'padding-top' : gapY,
                    });
                }
                adjust_position();
            });
        },
        toggleError: function(error){
            return this.each(function(){
                let errors = [];
                const $errorsBlock = this.mod_textareaAssist.$errorsBlock;
                if('object' === typeof error){
                    errors = error;
                }else if('string' === typeof error){
                    errors.push(error);
                }
                $errorsBlock.find('.alert').remove();
                if('object' !== typeof errors) return;
                $.each(errors, function(i,error){
                    Mod.alert(error, 'warning').appendTo($errorsBlock);
                });
            });
        },
        registerValidation: function(rules){
            return this.each(function(){
                const $this = $(this);
                $.each(rules, function(i, rule){
                    if('function' === typeof rule){
                        $this.get(0).mod_textareaAssist.validations.push(rule);
                    }
                });
            });
        },
        applyValidations: function(){
            return this.each(function(){
                const $this = $(this);
            });
        },
    });

})(jQuery);

jQuery(document).ready(function($){
    $('.js--textareaAssist').mod_textareaAssist();

    const validationMethods = {
        isUrl: function(value){
            if('' === value) return '';
            return /^https?:\/\/(www\.)?[a-zA-Z0-9:?#/@\-._~%!$&'()*+,;=]{1,256}\.[a-zA-Z0-9()]{1,63}\b([a-zA-Z0-9:?#/@\-._~%!$&'()*+,;=]*)$/.test(value) ? '' : 'URLを入力してください。';
        },
    }
    $('.form-input-part--urls.s-form-input-type-textareaAssist').each(function(){
        const $base = $(this);
        const $textarea = $base.find('.js--textareaAssist');
        const rules = [
            validationMethods.isUrl,
        ];
        $textarea.mod_textareaAssist('registerValidation', rules);
    });
});