(function($) {
    $(window).on('load resize', function(e){
        var $window = $(this);
        $('html').css('--actual-100vw', $window.width()+'px');
    });
})(jQuery);

(function($){
    var scroll = function(hash){
        var body = $('body');
        var header = $('#header');
        var headerBottom = 0;
        if(header.length > 0){
            headerBottom = header.outerHeight() + body.offset().top
        }
        var target = $(hash);
        if(!target.length){
            target = body;
        }
        var position = target.offset().top - headerBottom;
        $('body,html').stop().animate({scrollTop:position}, 300);
        return true;
    }
    ScrollInPage = scroll;
    $(window).on('load', function(e){
        location.hash ? scroll(location.hash) : null;
    });
    $(document).on('click', 'a[href]', function(){
        var self = $(this);
        var href = self.attr('href');
        var hash = Mod.getInpageHash(href);
        if('' === hash) return true;
        return scroll('#'+hash);
    });
})(jQuery);

jQuery(document).ready(function($){
    const $body = $('body');
    $body.addClass('isPageReady');
});

jQuery(document).ready(function($){
    $trigger = $('.mod-header__spAction');
    $menu = $('.mod-account-container .mod-sidebar');
    const toggleMenu = () => {
        const bool = !$menu.hasClass('in');
        $trigger.toggleClass('in', bool);
        $menu.toggleClass('in', bool);
    }
    $trigger.on('click', toggleMenu);
});

jQuery(document).ready(function($){
    $('select').each(function(){
        var $select = $(this);
        var $parent = $select.parent();
        if($parent.is('fieldset')){
            $parent.on('click', function(e){
                if(!$(e.target).is($select)){
                    $select.focus();
                }
            });
        }
    });
});
jQuery(document).ready(function($){
    $('.js--list-change').on('change', 'select', function(){
        var selectbox = $(this);
        var name = selectbox.attr('name');
        if(!name) return;
        var value = selectbox.val() || '';
        var Url = new URL(window.location);
        Url.searchParams.set(name, value);
        window.location.href = Url.toString();
    });
});
jQuery(document).ready(function($){
    $('.js--list-url-change').on('change', function(){
        const $selectbox = $(this);
        const url = $selectbox.find(':selected').data('url') || '';
        if(!url) return;
        window.location.href = url;
    });
});
jQuery(document).ready(function($){
    var toggleHasValue = function($input){
        if($input.is(':checkbox, :radio')){
            $input.toggleClass('s-hasValue', $input.is(':checked'));
        }else{
            $input.toggleClass('s-hasValue', '' !== $input.val());
        }
    }
    $(':input').on('change', function(){
        toggleHasValue($(this));
    }).each(function(){
        toggleHasValue($(this));
    });
});


jQuery(document).ready(function($){
    //current-menu-ancestor
    $('body').on('click', '.mod-sidebar .menu a[href^="#"]', function(){
        $(this).closest('li').toggleClass('current-menu-ancestor');
        return false;
    });

    $('body').on('click', '.c-togglePanel__title', function(){
        $(this).toggleClass('on');
        return false;
    });
});

jQuery(document).ready(function($){
    $('.form-control-onoff').each(function(){
        const $this = $(this);
        $this.on('click', function(){
            
        });

    });

    $('form.Mod_Targety_Form_Advertisement .form-input-part--is_scheduled .form-control-onoff, #mod_targety_admin_advertisementeditform-data_input-is_scheduled').each(function(){
        const $data_input_is_scheduled = $(this);
        const $form = $data_input_is_scheduled.closest('form');
        const $form_inputs = $data_input_is_scheduled.closest('.form-inputs');
        const $data_input_start_date = $form_inputs.find('.form-input-start_date :input[name="data[start_date]"]');
        const $data_input_end_date = $form_inputs.find('.form-input-end_date :input[name="data[end_date]"]');
        const default_value_start_date = $form_inputs.find('.form-input-start_date [data-value]').attr('data-value') || '';
        const default_value_end_date = '';//$data_input_end_date.val();
        const formatDate = (dt) => {
            var y = dt.getFullYear();
            var m = ('00' + (dt.getMonth()+1)).slice(-2);
            var d = ('00' + dt.getDate()).slice(-2);
            return (y + '-' + m + '-' + d);
        }
        const getMinStartDate = (value = null) => {
            const dt = new Date();
            dt.setDate(dt.getDate() + 3);
            let minDate = formatDate(dt);
            if(default_value_start_date > 0){
                minDate = default_value_start_date;
            }
            return !value || minDate > value ? minDate : value;
        }

        $form_inputs.toggleClass('in', true);// 常時表示


        $data_input_is_scheduled.on('change', function(){
            const $checkbox = $(this).find(':checkbox');
            const $targets = $checkbox.closest('.form-inputs').find('.form-input-start_date, .form-input-end_date');
            if($checkbox.is(':checked')){
                $targets.show().find(':input').prop('disabled', false);
            }else{
                $targets.hide().find(':input').prop('disabled', true);
            }
        }).change();
    
        const setStartDateRule = () => {
            const currentValue = $data_input_start_date.val();
            const maxDate = $data_input_end_date.val() || '';
            $data_input_start_date.attr('max', maxDate);
            if(!default_value_start_date && !default_value_end_date){
                $data_input_start_date.attr('min', getMinStartDate());
                $data_input_start_date.val(currentValue);
            }
        }
        const setEndDateRule = () => {
            const minDate = $data_input_start_date.val() || '';
            $data_input_end_date.attr('min', minDate);
            if(!minDate){
                $data_input_end_date.attr('min', getMinStartDate());
            }
        }
        $data_input_end_date.on('change', setStartDateRule);
        $data_input_start_date.on('change', setEndDateRule);

        setStartDateRule();
        setEndDateRule();
    });

    $('.mod-list-items--toggleDetail').on('click', function(){
        const $this = $(this);
        $this.toggleClass('in');
        const $target = $this.closest('.mod-list-items--row').next('.mod-list-items--rowAction');
        $target.toggleClass('in', $this.hasClass('in'));
    });

    $('.mod-list-items--action[data-style="dropdown"]').on('click', '>a', function(){
        $(this).parent().toggleClass('in');
    });
    $(document).on('click', function(e){
        const $clicked = $(e.target);
        const $target_dropdown = $clicked.closest('.mod-list-items--action[data-style="dropdown"]');
        $('.mod-list-items--action[data-style="dropdown"]').not($target_dropdown).toggleClass('in', false);
    });

});
jQuery(document).ready(function($){
    const request = ($this) => {
        if($this.attr('data-requesting')){
            return;
        }
        $this.mod_tooltip('destroy');
        if($this.data('confirm') && !confirm($this.data('confirm'))){
            return;
        }
        const input_data = {}
        $this.find(':input').each(function(){
            const $self = $(this);
            const id = $self.data('id');
            const name = $self.data('name');
            const value = $self.val();
            if(id && name){
                if(!input_data[id]) input_data[id] = {}
                input_data[id][name] = value;
            }
        });
        if(Object.keys(input_data).length){
            $this.attr('data-requesting', true);
            $.ajax({
                url: ajax_url,
                data: {
                    action: $this.data('endpoint'),
                    data: input_data,
                },
                success: function(response){
                    if(response){
                        $this.attr('data-requesting', response.status || 'error');
                    }
                    if('success' !== response?.status){
                        showError($this, response?.message);
                    }else{
                        callback($this);
                    }
                },
                complete: function(d){
                    setTimeout(function(){
                        $this.removeAttr('data-requesting');
                        $this.mod_tooltip('destroy');
                    }, 1000);
                }
            });
        }
    }
    const showError = ($this, message) => {
        $this.mod_tooltip('init', {content: message}).mod_toggleTooltip(true);
    }
    const callback = ($this) => {
        switch($this.data('callback') || ''){
            case 'remove_row':
                $this.closest('.mod-list-items--row').toggleClass('s-disabled', true);
            break;
        }
    }
    $('.mod-list-items--action').on('click', 'button', function(){
        request($(this).closest('.mod-list-items--action'));
    });
    $('.mod-list-items--action').on('change', ':input', function(){
        request($(this).closest('.mod-list-items--action'));
    });
    
});

jQuery(document).ready(function($){
    $('form.Mod_Targety_Form_Advertisement').each(function(){
        const $form = $(this);
        const $select_status = $form.find(':input[name="data[u_status]"]');
        const initial_value_status = $select_status.data('initial_value');
        $form.submit(function(){
            const $select_status = $form.find(':checked[name="data[u_status]"]');
            let confirmMessage = '';
            const selected_status = $select_status.val();
            $form.attr('data-u_status', selected_status);
            if(!$form.valid()){
                return false;
            }
            if(initial_value_status != selected_status){
                switch(selected_status){
                    case 'u_draft':
                        confirmMessage = 'これは下書き保存です。掲載希望の場合は、「掲載申請」を押してください。';
                    break;
                    default:
                        confirmMessage = '保存後は広告内容の編集が出来ません（ステータスと予定配信は変更可）。編集が必要な場合は、コピーして新しく広告を作成してください。';
                    break;
                }
            }

            if(confirmMessage){
                const confirmed = confirm(confirmMessage);
                return confirmed;
            }
        });
    });
});

(function($) {
    $('.is-style-modal-container').each(function(){
        const $base = $(this);
        const $wrapper = $('<div class="is-style-modal-container__wrapper" />').appendTo($base);
        $base.find('>*').not($wrapper).appendTo($wrapper);
        const $closer = $('<figure data-action="close_modal"><a><span>閉じる</span></a></figure>').appendTo($base);
        $(document).on('click', function(e){
            const $self = $(e.target);
            if($self.is($wrapper) || $self.closest($wrapper)?.length){
                return true;
            }
            $base.toggleClass('in', false);
        });
    });
    $('a[href^="#modal-"]').on('click', function(e){
        const $self = $(this);
        const href = $self.attr('href');
        const $target = $(href);
        const $modals = $('.is-style-modal-container');
        if(!$target.length || !$target.is($modals)) return;
        $modals.not($target).toggleClass('in', false);
        $target.toggleClass('in', true);
        return false;
    });
})(jQuery);

(function($) {
    $('a[href*="/member/unregister/"]').each(function(){
        const $self = $(this);
        const bool = Project?.date_is_available_unregister || false;
        if(!bool){
            $self.removeAttr('href').toggleClass('e-style-disabled', true);
        }
    });
})(jQuery);
(function($) {
    $('a[href*="/member/pause-project/"]').each(function(){
        const $self = $(this);
        const bool = Project?.date_is_available_pause || false;
        if(!bool){
            $self.removeAttr('href').toggleClass('e-style-disabled', true);
        }
    });
})(jQuery);

jQuery(document).ready(function($){
    $('.c-select_payment_type').on('change', function(){
        const $self = $(this);
        const $checkboxes = $self.find(':input[name="data[payment_type]"]');
        const $targets = $self.find('>figure');
        const $selected = $checkboxes.filter(':checked').closest($targets);

        $targets.not($selected).toggleClass('in', false).find(':input').not($checkboxes).prop('disabled', true);
        $selected.toggleClass('in', true).find(':input').not($checkboxes).prop('disabled', false);
    }).change();
});

jQuery(document).ready(function($){
    $('.js--inputNumberAssist').each(function(){
        const $self = $(this);
        const $base = $self.parent();
        $base.toggleClass('c-inputNumberAssist', true);
        const step = $self.attr('step') || 2;
        const min = $self.attr('min') || false;
        const max = $self.attr('max') || false;
        [
            {name: '-', step: -1 * step},
            {name: '--', step: -10 * step},
            {name: '+', step: 1 * step},
            {name: '++', step: 10 * step},
        ].map((v) => {
            $(`<a data-action="${v.name}" data-step="${v.step}" />`).appendTo($base);
        });
        $self.wrap('<figure />');
    });
    $('.c-inputNumberAssist').on('click', '[data-action]', function(){
        const $self = $(this);
        const $base = $self.parent();
        const $input = $base.find(':input');
        const step = $self.data('step') || 1;
        const min = $input.attr('min') || false;
        const max = $input.attr('max') || false;
        const currentValue = Number($input.val()) || 0;
        let newValue = currentValue + step;
        if(false !== max){
            newValue = Math.min(newValue, max);
        }
        if(false !== min){
            newValue = Math.max(newValue, min);
        }
        $input.val(newValue).trigger('change');
    });

    $('.c-inputNumberAssist').on('change', function(){
        const $self = $(this);
        const $base = $self.parent();
        const $input = $base.find(':input');
        const value = Number($input.val() || 0);
        const tax_rate = Number($input.attr('data-tax_rate') || 0) / 100;
        const viewValue = value * (1 + tax_rate);
        var $formatted = $base.find(`[data-content="formatted"]`);
        if(!$formatted.length) $formatted = $('<span data-content="formatted" />').insertBefore($input);
        $formatted.text(viewValue?.toLocaleString());
    }).change();

});

jQuery(document).ready(function($){
    $('.mod-http-list-searchbox').each(function(){
        const searchbox = $(this);
        
        searchbox.on('focus blur', '.form-input--keyword :input', function(e){
            $(e.target).closest('.form-input').toggleClass('--focus', 'focusin' === e.type);
        });
        searchbox.on('change', '.form-input', function(e){
            const self = $(this);
            var valueCount = 0;
            valueCount += self.find(':checked, :selected').not('[value=""]').length;
            self.find(':input:not(:checkbox):not(select):not(:radio)').each(function(){
                const $input = $(this);
                if('' !== $input.val()){
                    ++valueCount;
                }
            });
            self.find('.form-input-label .--value-count').text(valueCount > 0 ? valueCount : '');
            self.toggleClass('--has-values', valueCount > 0);
        });
    
        searchbox.on('click', '.form-input-label', function(){
            const self = $(this);
            const form_input = self.closest('.form-input').toggleClass('in');
            searchbox.find('.form-input').not(form_input).toggleClass('in', false);
        });
    
        $(document).on('click', function(e){
            const target = $(e.target);
            const form_input = target.is('.form-input') ? target : target.closest('.form-input');
            searchbox.find('.form-input').not(form_input).toggleClass('in', false);
        });
    
        searchbox.find('.form-input').change();
    });

});

jQuery(document).ready(function($){
    $('.c-tabs').each(function(){
        const $base = $(this);
        const $triggers = $base.find('.c-tabsTriggers a');
        const $blocks = $base.find('.c-tabsBlock');
        const toggle = ($block) => {
            if(!$block.length){
                $block = $blocks.eq(0);
                if($block.length) toggle($block);
                return;
            }
            $block = $block.eq(0);
            const id = $block.attr('id');
            const $trigger = $triggers.filter(`[href="#${id}"]`);
            $triggers.not($trigger).toggleClass('on', false);
            $trigger.toggleClass('on', true);
            $blocks.not($block).toggleClass('in', false);
            $block.toggleClass('in', true);
        }
        $triggers.on('click', function(){
            const $this = $(this);
            const href = $this.attr('href');
            toggle($blocks.filter(`${href}`));
            return false;
        });
        toggle(location.hash ? $blocks.filter(location.hash) : $blocks.eq(0));
    });
});

(function($) {
    $('.alert--dismissNotification').on('click', function(){
        const $base = $(this);
        const at = $base.data('at');
        const $alert = $base.closest('.alert');

        $.ajax({
            url: ajax_url,
            data: {
                action: 'Mod_Targety_Ajax_DismissNotification',
                data: {
                    at: at,
                    project_id: window?.Project?.id,
                },
            },
            success: function(response){
                if('success' === response?.status){
                    $alert.fadeOut();
                }
            },
            complete: function(d){
            }
        });

    });
})(jQuery);

(function($){
  if (!('ontouchstart' in window)) return;

  var proto = $.ui.mouse.prototype;
  var _mouseInit = proto._mouseInit;

  $.extend(proto, {
    _mouseInit: function(){
      this.element.on("touchstart." + this.widgetName, $.proxy(this, "_touchStart"));
      _mouseInit.apply(this, arguments);
    },

    _touchStart: function(event){
      if (event.originalEvent.touches.length !== 1) return false;
      if (!this._mouseCapture(event, false)) return true;

      this.element
        .on("touchmove." + this.widgetName, $.proxy(this, "_touchMove"))
        .on("touchend." + this.widgetName, $.proxy(this, "_touchEnd"));

      this._modifyEvent(event);
      $(document).trigger("mouseup");
      this._mouseDown(event);
      return false;
    },

    _touchMove: function(event){
      this._modifyEvent(event);
      this._mouseMove(event);
    },

    _touchEnd: function(event){
      this.element
        .off("touchmove." + this.widgetName)
        .off("touchend." + this.widgetName);
      this._mouseUp(event);
    },

    _modifyEvent: function(event){
      var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
      event.which = 1;
      event.pageX = touch.pageX;
      event.pageY = touch.pageY;
    }
  });
})(jQuery);