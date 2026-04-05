(function($) {
})(jQuery);
jQuery(document).ready(function($){
    $('form.mod--form').each(function(){
        const form = $(this);

        form.find('.js--zipSearch-postcode').each(function(){
            const input_postcode = $(this);
            const target_id_prefix = input_postcode.data('target_id_prefix') || '';
            const base = input_postcode.closest('.form-inputs');
            const button_postcode = $('<button type="button" class="js--zipSearch-trigger">住所を自動入力</button>');
            const select_state = base.find('.js--zipSearch-state').length ? base.find('.js--zipSearch-state') : form.find('.js--zipSearch-state');
            const input_address = base.find('.js--zipSearch-address1').length ? base.find('.js--zipSearch-address1') : form.find('.js--zipSearch-address1');
            button_postcode.insertAfter(input_postcode).wrap('<div />');
            button_postcode.requesting = false;

            button_postcode.on('click', function(){
                if('' !== input_postcode.val() && input_postcode.valid()){
                    if(button_postcode.requesting){
                        button_postcode.requesting.abort();
                    }
                    button_postcode.toggleClass('s-requesting-inline', true);
                    button_postcode.requesting = $.ajax({
                        url: ajax_url,
                        data:{
                            action:'mod_zip_search',
                            postcode: input_postcode.val(),
                        },
                        type: "POST",
                        dataType: "json",
                        timeout: 10000,
                        success: function( data ){
                            button_postcode.last_query = {
                                postcode: input_postcode.val(),
                                response: data,
                            }
        
                            if( !data.Feature || !data.Feature[0] ){
                                return;
                            }
                            const AddressElement = data.Feature[0].Property.AddressElement;
                            if(AddressElement.length){
                                const state = AddressElement[0].Name || '';
                                AddressElement[0] = {};
                                const address = AddressElement.map(v => v.Name).join('') || '';
                                select_state.find('option').each(function(){
                                    const self = $(this);
                                    self.prop('selected', self.text() === state);
                                });
                                input_address.val(address);
                            }
                        },
                        complete:function(){
                            button_postcode.toggleClass('s-requesting-inline', false);
                        },
                    });
                }
            });
        });
    });
});

jQuery(document).ready(function($){
    $(document).on('keydown', '.mod--form input', function(e){
        return !((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13));
    });
});

jQuery(document).ready(function($){
    const $formAlerts = $('form .alert-warning');
    if(!$formAlerts.length) return;
    const $firstAlert = $formAlerts.eq(0);
    $('body, html').animate({
        scrollTop: $firstAlert.offset().top - 150
    }, 'fast');

});

jQuery(document).ready(function($){
    $(`.mod--form .js--ajaxFormList`).each(function(){
        const $input = $(this);
        const $form = $input.closest('form');
        const load_target_names = $input.attr(`data-load_target_names`)?.split(',');
        const initial_value = $input.attr(`data-initial_value`);
        const endpoint = $input.attr(`data-endpoint`);
        const request = () => {
            $input.html('');
            $input.attr(`data-requesting`, 'requesting');
            const fd = new FormData($form.get(0));
            fd.append('action', endpoint);
            $.ajax({
                url: ajax_url,
                data: fd,
                type: 'POST',
                processData: false,
                contentType: false,
                dataType:"json",
                success: function( data ){
                    if(data){
                        $.each(data, function(i, d){
                            const $option = $(`<option value="${d.value}">${d.label}</option>`);
                            $option.prop('selected', initial_value == d.value);
                            $option.appendTo($input);
                        });
                        $input.removeAttr(`data-requesting`);
                    }else{
                        $input.attr(`data-requesting`, 'empty');
                    }
                },
                complete:function(){
                },
            });
        }
        let $target_inputs = $();
        $.each(load_target_names, function(i,name){
            $target_inputs = $target_inputs.add($form.find(`:input[name="${name}"]`));
        });
        $target_inputs.on('change', request);
        request();
    });
});