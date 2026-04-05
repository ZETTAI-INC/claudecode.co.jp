(function($) {
    $('.mod_ui_tabs').each(function(){
        const root = $(this);
        const blocks = root.find('.mod_ui_tabs--block');
        const links = root.find('.mod_ui_tabs--link');
        let target_link = location.hash ? links.filter(location.hash) : links.eq(0);
        if(!target_link.length) target_link = links.eq(0);

        target_link.toggleClass('on', true);
        blocks.filter(target_link.attr('href')).toggleClass('in', true);

        links.on('click', function(){
            const self = $(this);
            const href = self.attr('href');
            if('#' === href) return false;
            const target_link = links.filter('[href="'+href+'"]');
            if(!target_link.length) return true;
            const target = blocks.filter(href);
            links.not(target_link).toggleClass('on', false);
            target_link.toggleClass('on', true);
            blocks.not(target).toggleClass('in', false);
            target.toggleClass('in', true);
            return false;

            $('html').animate({scrollTop:root.parent().offset().top - $('body').offset().top},100);
            return false;
        });
    });
})(jQuery);

(function($) {
    $(document).on('change', '.js--select_hierarchical', function(){
        const base = $(this);
        const childs = base.find('>div').toggleClass('in',false);
        childs.find('select').prop('disabled', true);
        childs.each(function(i){
            const child = $(this);
            if(!i) child.toggleClass('in', true).find('select').prop('disabled', false);
            if(child.hasClass('in')){
                const select_val = child.find('select').val();
                child.nextAll('[data-term_id="'+select_val+'"]').toggleClass('in', true).find('select').prop('disabled', false);
            }
        });
    });
    $('.js--select_hierarchical').change();

})(jQuery);

jQuery(document).ready(function($){

    $('.--click-to-clipboard').each(function(){
        const self = $(this);
        self.mod_tooltip({
            content: self.data('text') || 'クリックしてクリップボードへコピー',
        });
        self.on('click', function(){
            let value = self.is(':input') ? self.val() : self.text();
            if(self.data('value')){
                value = self.data('value');
            }
            let result = false;
            if(navigator.clipboard){
                navigator.clipboard.writeText(value).then(function(){
                    result = true;
                }).then(function(){
                    result = false;
                });
            }
            if(!result){
                self.select();
                result = document.execCommand("copy");
            }
            //self.blur();
            self.mod_tooltip('content', 'コピーしました！');
        });
    });
});

jQuery(document).ready(function($){
    $(document).on('click mouseover mouseleave change', '.--toggleClass, .js--toggleClass', function(e){
        const self = $(this);
        let classname = self.data('toggleclass') || 'in';
        let action = self.data('action') || 'click';
        let target;
        let toggle = self.hasClass('initialized') && !self.hasClass(classname);
        const toggleInputDisabled = self.data('toggle_input_disabled');
        const inpageHash = Mod.getInpageHash(self.is('a') ? self.attr('href') : self.find('a').attr('href'));
        if(self.data('target')){
            target = $(self.data('target'));
        }else if(inpageHash){
            target = $('#'+inpageHash);
        }
        const others = $(self.data('others')).not(target);
        switch(e.type){
            case 'mouseover':
                if(!action.match('hover')) return;
                toggle = true;
            break;
            case 'mouseleave':
                if(!action.match('hover')) return;
                toggle = false;
            break;
        }
        self.toggleClass(classname, toggle);
        if(target){
            target.toggleClass(classname, toggle);
        }
        others.toggleClass(classname, false);

        if(toggleInputDisabled){
            target.find(':input').prop('disabled', !toggle);
            others.find(':input').prop('disabled', true);
        }
        self.toggleClass('initialized', true);
        return false;
    });
    $('.--toggleClass, .js--toggleClass').change();

    $(document).on('touchstart click', function(e){
        const target = $(e.target).closest('.--toggleClass');
        $('.--toggleClass').not(target).toggleClass('in', false);
    });
    $(document).on('click', '.modal', function(e){
        const target = $(e.target);
        const modal = target.hasClass('modal') ? target : target.closest('.modal');
        if(!modal.find('.modal-close').length){
            $('<a class="modal-close" />').appendTo(modal);
        }
        if(modal.hasClass('in')){
            if(target.is('.modal-container')) return;
            if(target.closest('.modal-container').length > 0) return;
        }
        modal.toggleClass('in');
    });
});

jQuery(document).ready(function($){
    let modalStage = $('body').find('#modalStage');
    if(!modalStage.length){
        modalStage = $('<div id="modalStage" class="p-entry__body"></div>').appendTo($('body'));
    }
    $(document).on('click', '.js--mount-modal', function(e){
        const target = $(e.target);
        const modal = $(target.data('target'));
        if(!modal.length > 0) return false;
        const clonedModal = modal.clone().toggleClass('in', true);
        clonedModal.get(0)._originalModal = modal;
        modalStage.html('').append($('<a class="e-modal-close" />')).append(clonedModal).toggleClass('in', true);
        return false;
    });
    $(document).on('click', '#modalStage', function(e){
        const modalStage = $(this);
        const target = $(e.target);
        if(target.closest('.c-mount-modal--inner').length){
            return;
        }
        modalStage.toggleClass('in', false);
        return;
    });

    $(document).on('click', '#modalStage .e-modal-action', function(e){
        const self = $(this);
        const action = self.data('modal-action');
        if(!action) return;
        const modal = self.closest('.c-mount-modal');
        const actionSubmit = function(){
            const originalModal = modal.get(0)._originalModal;
            originalModal.html(modal.html()).change();
            modalStage.toggleClass('in', false);
        }
        switch(action){
            case 'submit': return actionSubmit();
        }
    });
});

