import { add, subtract, multiply, divide } from './calculator.js';

$(document).ready(function () {

    const $num1 = $('#num1');
    const $num2 = $('#num2');
    const $operator = $('#symbol');
    const $result_display = $('#result');

    $("#btn_add").click(() => $operator.val('+'));
    $("#btn_sub").click(() => $operator.val('-'));
    $("#btn_mul").click(() => $operator.val('*'));
    $("#btn_div").click(() => $operator.val('/'));

    $("#btn_res").click(() => {
        let x = Number($num1.val());
        let y = Number($num2.val());

        if (isNaN(x)) {
            alert("Please enter first number");
            return;
        }
        if (isNaN(y)) {
            alert("Please enter second number");
            return;
        }
        if (!$operator.val()) {
            alert("Please select operation");
            return;
        }

        switch ($operator.val()) {
            case '+': $result_display.val(add(x, y)); break;
            case '-': $result_display.val(subtract(x, y)); break;
            case '*': $result_display.val(multiply(x, y)); break;
            case '/': $result_display.val(divide(x, y)); break;
            default: $result_display.val("Error");
        }
    });

});
