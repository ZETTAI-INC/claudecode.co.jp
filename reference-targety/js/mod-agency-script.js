jQuery(document).ready(function($){
    $('.form-input-part--initial_amount_discount_type').each(function(){
        const $formInputPartType = $(this);
        const $base = $formInputPartType.closest('.form-input-part');
        const $targets = $base.find('>[class*="form-input-part"]').not($formInputPartType);
        const $selectorType = $formInputPartType.find(':radio');

        const toggle = () => {
            let $checked = $selectorType.filter(':checked');
            if(!$checked.length){
                $checked = $selectorType.eq(0).prop('checked', true);
            }
            const $target = $base.find(`.form-input-part--${$checked.val()}`);
            $targets.not($target).toggleClass('in', false).find(':input').prop('disabled', true);
            $target.toggleClass('in', true).find(':input').prop('disabled', false);
        }
        $selectorType.on('change', () => toggle()).change();
    });
});