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




var count_start = document.getElementsByClassName('count_start')[0];
var count_items = document.getElementsByClassName('irs-single');
var condition_value = document.getElementsByClassName('condition_value_sum')[0];
var result = document.getElementsByClassName('result_num_payment')[0];
var sum_of_mortgage = 0;
var price_to_count = 0;
var payment_to_count = 0;


count_start.addEventListener('click', count);
count_start.addEventListener("click", modal_on);

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

function modal_on () {
    modal_window.classList.add('modal_visible');
    modal_overlay.classList.add('modal_overlay');
}

close_modal_btn.addEventListener('click', close_modal);

console.log(close_modal)

function close_modal () {
    console.log(111)
    modal_window.classList.remove('modal_visible');
    modal_overlay.classList.remove('modal_overlay');
}
