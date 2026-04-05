(function($) {
})(jQuery);

jQuery(document).ready(function($){
    $('.c-changeLogCompare-compare').each(function(){
        const $base = $(this);
        const $blocks = $base.find('.c-changeLogCompare-compare__blocks');
        const $triggerModals = $base.find('.c-changeLogCompare-compare__triggerModal a');
        if(!$triggerModals.length) return;
        const toggleBlock = ($target, bool) => {
            const $triggerModal = $target ? $target.prev('.c-changeLogCompare-compare__triggerModal') : null;
            bool = true === bool || false === bool ? bool : !$target.hasClass('in');
            const $others = $target ? $blocks.not($target) : $blocks;
            const $triggers = $triggerModal ? $triggerModals.not($triggerModal) : $triggerModals;
            $others.toggleClass('in', false);
            $triggers.toggleClass('in', false);
            if($target){
                $target.toggleClass('in', bool);
                $triggerModal.toggleClass('in', bool);
            }
        }
        $(document).on('click', function(e){
            const $clicked = $(e.target);
            const $trigger = $clicked.is($triggerModals) ? $clicked : $clicked.closest($triggerModals);
            const $block = $clicked.is($blocks) ? $clicked : $clicked.closest($blocks);
            if($trigger.length){
                toggleBlock($trigger.parent().next('.c-changeLogCompare-compare__blocks'));
            }else if($block.length){
                return false;
            }else{
                toggleBlock(null, false);
            }
        });
    });

    $('.c-changeLogCompare-compare').each(function(){
        const $base = $(this);
        const $blocks = $base.find('.c-changeLogCompare-compare__blocks');
        $blocks.on('click', '[data-col="block_heading"]', function(){
            const $this = $(this);
            const $block = $this.closest($blocks).toggleClass('in');
            $this.toggleClass('in', $block.hasClass('in'));
        });
    });

    
});

//lockPage
(function($) {
    Mod.lockPage = (message = '') => {
        let $layer = $('body').find('>.c-lockPage');
        if(!$layer.length){
            $layer = $('<div class="c-lockPage" />').appendTo($('body'));
        }
        $layer.html('');
        const $message = $(`<div class="c-lockPage__message in">${message}</div>`).appendTo($layer)
        $('body').addClass('lockPage');
    }
    Mod.unlockPage = () => {
        $('body').removeClass('lockPage');
    }
})(jQuery);

(function($) {
    Mod.confirmUnload = ($form) => {
        let isFormChanged = false;
        $form.on('change', function(){
            isFormChanged = true;
        }).on('submit', function(){
            isFormChanged = false;
        });
        window.addEventListener('beforeunload',(e)=>{
            if(isFormChanged){
                e.preventDefault();
            }
        });
    }
})(jQuery);

jQuery(document).ready(function($){
    Mod.confirmUnload($('#mod_targety_form_target'));
});
