(function($) {
    Mod = {
        fn: function(name, methods){
            $.fn[name] = function(a){
                if(methods[a]){
                    return methods[a].apply(this, Array.prototype.slice.call(arguments, 1));
                }else if(!a || 'object' === typeof a){
                    return methods.init.apply(this, arguments);
                }else{
                    $.error(name+' don\'t have called method "'+ a+'".');
                }
            };
        },
        getInpageHash: function(href){
            if(!href) return;
            const hrefPair = href.split('#');
            const hash = hrefPair[1] || '';
            if('' === hrefPair[0] || './' === hrefPair[0] || '' === hash) return hash;
            const currentHref = location.href.split('#')[0] || '';
            if(hrefPair[0] !== currentHref) return '';
            return hash;
        },
        filterEnum: function(str){
            return Number(str.replace(/[^\d]/g,''));
        },
        numberFormat: function(str){
            return this.filterEnum(str).toLocaleString();
        },
    }
})(jQuery);
(function($) {
    Mod.fn('mod_lock_input', {
        init: function(args){
            args = args || {};
            return this.each(function(){
                const self = $(this);
                if(!self.is(':input')){
                    return;
                }
                self.prop('disabled', !self.val())
                const alertMessage = self.attr('data-alert_lock_input') || '';
                const checkbox = $('<input type="checkbox" />').prop('checked', false);
                checkbox.appendTo(self.parent()).wrap('<label class="after"></label>').after(' <span>変更</span>');

                checkbox.on('change', function(){
                    console.log(checkbox.is(':checked'));
                    if(!checkbox.is(':checked')){
                        self.prop('disabled', true);
                    }else{
                        if(confirm(alertMessage)){
                            self.prop('disabled', false).focus();
                        }else{
                            checkbox.prop('checked', false);
                        }
                    }
                }).change();

                self.toggleClass('mod_lock_input--initialized', true);
            });
        },
    });

    $('.js--lock_input').mod_lock_input();
})(jQuery);
(function($) {
    Mod.fn('mod_lock_form', {
        init: function(args){
            args = args || {};
            return this.each(function(){
                const self = $(this);
                var html = '<div class="--text">'+(args.html || '')+'</div>';
                var overlay = $('#mod_lock_form--overlay');
                if(!overlay.length){
                    overlay = $('<div id="mod_lock_form--overlay" />').appendTo('body');
                }
                if(args.class){
                    overlay.attr('class', args.class);
                }
                overlay.html(html).toggleClass('in', true);
            });
        },
    });

})(jQuery);

(function($) {
    Mod.alert = function(message, type, dismiss, alert){
        type = type || 'msg';
        dismiss = false !== dismiss;
        if(!(alert instanceof jQuery)){
            alert = $('<div class="alert" />').addClass('alert-'+type);
            alert.append('<div class="alert-message">'+message+'</div>');
            if(dismiss) alert.append('<a class="alert--dismiss"></a>');
            return alert;
        }
        if(alert instanceof jQuery){
            if(message) alert.find('.alert-message').text(message);
            if(type) alert.attr('class', 'alert alert-'+type);
            alert.find('.alert--dismiss').remove();
            if(dismiss) alert.append('<a class="alert--dismiss"></a>');
            return alert;
        }
        return alert;
    };
    $(document).on('click', '.alert--dismiss', function(){
        $(this).closest('.alert').fadeOut(300, function(){
            const self = $(this);
            const parent = self.parent();
            self.remove();
            if(parent.is('.alerts')){
                if(!parent.find('>.alert').length) parent.remove();
            }
        });
    });
})(jQuery);

// tooltip
(function($) {
    Mod.fn('mod_tooltip', {
        init: function(args){
            args = args || {};
            return this.each(function(){
                const self = $(this);
                if(args.content){
                    self.data('tooltip', args.content);
                }
                self.toggleClass('mod_tooltip', true);
            });
        },
        content: function(content){
            return this.each(function(){
                $('#mod--tooltip').html('<div class="mod_tooltip--content--inner">'+content+'</div>');
            });
        },
        destroy: function(){
            return this.each(function(){
                const self = $(this);
                self.toggleClass('mod_tooltip', false);
            });
        }
    });
})(jQuery);

(function($) {
    const tooltip = $('<div id="mod--tooltip" />').appendTo($('body'));
    const fix_position = function(self){
        let Document = $('html'),
            Body = $('body'),
            document_gap = Body.offset().top - Document.offset().top,
            Window = $(window),
            el = self.get(0),
            el_rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop,
            self_left = el_rect.left + scrollLeft,
            self_top = el_rect.top + scrollTop,
            dx = self_left > (Window.width() / 2) ? -1 : 0,
            dy = el_rect.top > (Window.height() / 2) ? -1 : 0
            ;

        const item_height = el_rect?.height || self.height();

        if(dx < 0){// 左に向かって表示する場合
            tooltip.css({left:'inherit', right:Document.width() - self_left - el.offsetWidth});
        }else{// 右に向かって表示する場合
            tooltip.css({left: self_left, right: 'inherit'});
        }
        if(0 && dy < 0){// 上に向かって表示する場合
            if(!document_gap){
                tooltip.css({top:'inherit', bottom:Document.height() - self_top + Document.offset().top});
            }else{
                tooltip.css({top:'inherit', bottom:Document.height() - self_top + document_gap});
            }
        }else{// 下に向かって表示する場合
            tooltip.css({top:self_top + item_height , bottom:'inherit'});
        }
    }
    $.fn.extend({
        mod_toggleTooltip: function(toggle, time = 1000){
            return this.each(function(){
                const self = $(this);
                const content = self.find('.mod_tooltip--content').html() || '<div class="mod_tooltip--content--inner">'+(self.attr('data-tooltip') || self.data('tooltip'))+'</div>';
                if(!content) return;
                if(tooltip.mod_toggleTooltipHandleLeave){
                    window.clearTimeout(tooltip.mod_toggleTooltipHandleLeave);
                    tooltip.mod_toggleTooltipHandleLeave = null;
                }
                const isTooltipActive = self.data('tooltipActive');
                if(!toggle && false !== toggle){
                    toggle = !isTooltipActive;
                }
                $('.mod_tooltip').not(self).toggleClass('on', false);
                if(toggle){
                    self.toggleClass('on', true);
                    tooltip.toggleClass('in', true);
                }else if(tooltip.hasClass('in')){
                    tooltip.mod_toggleTooltipHandleLeave = window.setTimeout(() => {
                        self.toggleClass('on', false);
                        tooltip.toggleClass('in', false);
                    }, time);
                }
                if(toggle){
                    tooltip.html(content);
                    fix_position(self);
                }
                self.data('tooltipActive', toggle);
            });

        },
    });

    tooltip.on(`mouseover mouseleave touchstart click`, function(e){
        const $activeTrigger = $('.mod_tooltip.on');
        switch(e.type){
            case 'mouseover':
                if(tooltip.mod_toggleTooltipHandleLeave){
                    window.clearTimeout(tooltip.mod_toggleTooltipHandleLeave);
                    tooltip.mod_toggleTooltipHandleLeave = null;
                }
            break;
            case 'mouseleave':
                tooltip.mod_toggleTooltipHandleLeave = window.setTimeout(() => {
                    $activeTrigger.toggleClass('on', false);
                    tooltip.toggleClass('in', false);
                }, 1000);
            break;
        }
    });

    $(document).on('click', function(e){
        const target = $(e.target);
        if(
            !target.closest('#mod--tooltip').length
            && !target.is('#mod--tooltip')
            && !target.closest('.mod_tooltip').length
            && !target.is('.mod_tooltip')
        ){
            $('.mod_tooltip').mod_toggleTooltip(false, 0);
            return;
        }
    });

})(jQuery);
jQuery(document).ready(function($){
    $(document).on('mouseover mouseleave touchstart click', '.mod_tooltip', function(e){
        const self = $(this);
        if(self.data('action') === 'click'){
            if(e.type !== 'click'){
                return;
            }
            self.mod_toggleTooltip();
        }else{
            switch(e.type){
                case 'mouseover': $(this).mod_toggleTooltip(true); break;
                case 'mouseleave': $(this).mod_toggleTooltip(false); break;
                case 'touchstart': $(this).mod_toggleTooltip(); break;
            }
        }
    });
});
