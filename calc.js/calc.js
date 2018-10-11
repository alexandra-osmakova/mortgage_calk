$(document).ready(function () {

    $("#price_id").ionRangeSlider({
        min: 300000,
        max: 15000000,
        step: 20000,
        prettify: true,
        from: 6000000,
        grid: true,
        postfix: " руб."
    });

    $("#payment").ionRangeSlider({
        min: 300000,
        max: 15000000,
        step: 20000,
        prettify: true,
        from: 6000000,
        grid: true,
        postfix: " руб."
    });

    $("#mortgage").ionRangeSlider({
        min: 5,
        max: 25,
        step: 1,
        prettify: true,
        from: 15,
        grid: true,
        postfix: " лет"
    });
});

$('#phone-number')

	.keydown(function (e) {
		var key = e.which || e.charCode || e.keyCode || 0;
        $phone = $(this);

    if ($phone.val().length === 1 && (key === 8 || key === 46)) {
			$phone.val('('); 
      return false;
		} 
    else if ($phone.val().charAt(0) !== '(') {
			$phone.val('('+String.fromCharCode(e.keyCode)+''); 
		}

		if (key !== 8 && key !== 9) {
			if ($phone.val().length === 4) {
				$phone.val($phone.val() + ')');
			}
			if ($phone.val().length === 5) {
				$phone.val($phone.val() + ' ');
			}			
			if ($phone.val().length === 9) {
				$phone.val($phone.val() + '-');
			}
		}

		return (key == 8 || 
				key == 9 ||
				key == 46 ||
				(key >= 48 && key <= 57) ||
				(key >= 96 && key <= 105));	
	})
	
	.bind('focus click', function () {
		$phone = $(this);
		
		if ($phone.val().length === 0) {
			$phone.val('+7(___) ___-___-____');
		}
		else {
			var val = $phone.val();
			$phone.val('').val(val); 
		}
	})
	
	.blur(function () {
		$phone = $(this);
		
		if ($phone.val() === '+7(___)') {
			$phone.val('');
		}
	});




var count_start = document.getElementsByClassName('count_start')[0];
var count_items = document.getElementsByClassName('irs-single');
var condition_value = document.getElementsByClassName('condition_value_sum')[0];
var result = document.getElementsByClassName('result_num_payment')[0];
var sum_of_mortgage = 0;
var price_to_count = 0;
var payment_to_count = 0;

 var a = document.getElementById('price_id');

function count() {
    var price_start = count_items[0].innerHTML.indexOf(' руб.');
    var price = count_items[0].innerHTML.substr(0, price_start);
    price_to_count = price.split(" ").join('');

    var payment_start = count_items[1].innerHTML.indexOf(' руб.');
    var payment = count_items[1].innerHTML.substr(0, payment_start);
    payment_to_count = payment.split(" ").join('');

    var mortgage_start = count_items[2].innerHTML.indexOf(' лет');
    var mortgage = count_items[2].innerHTML.substr(0, mortgage_start);
    var mortgage_time = mortgage.split(" ").join('');

    sum_of_mortgage = Number(price_to_count) - Number(payment_to_count);
    condition_value.innerHTML = sum_of_mortgage.toLocaleString() + " руб.";

    result.innerHTML = Math.round(sum_of_mortgage / (12 * Number(mortgage_time))).toLocaleString() + " руб.";

}

var modal_window = document.getElementsByClassName('modal_window')[0];
var modal_overlay = document.getElementById('modal_overlay');
var close_modal_btn = document.getElementById('close_btn');
var header_modal_btn = document.getElementsByClassName('promo_img_section__btn')[0];

count_start.addEventListener("click", modal_on);
header_modal_btn.addEventListener("click", modal_on);
close_modal_btn.addEventListener('click', close_modal);


function modal_on() {
    modal_window.classList.add('modal_visible');
    modal_overlay.classList.add('modal_overlay');
}

function close_modal() {
    modal_window.classList.remove('modal_visible');
    modal_overlay.classList.remove('modal_overlay');
}
