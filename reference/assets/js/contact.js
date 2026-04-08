/*
 * 入力チェック
 */
$(function() {
	$.validator.addMethod("telnum", function(value, element) {
		return this.optional(element) || /^0(\d-?\d{4}|\d{2}-?\d{3}|\d{3}-?\d{2}|\d{4}-?\d|\d0-?\d{4})-?\d{4}$/.test(value);
	}, "正しい電話番号を入力してください");

	$('#contactForm').validate({
		errorElement: "p",
		errorPlacement: function(error, element) {
			error.appendTo(element.parent());
		},
		rules: {
			type: {
				required: true
			},
			companyname: {
				required: true
			},
			name: {
				required: true
			},
			department: {
				required: true
			},
			post: {
				required: true
			},
			mail: {
				required: true,
				email: true
			},
			tel: {
				required: true,
				telnum: true
			},
		}
	});
});
