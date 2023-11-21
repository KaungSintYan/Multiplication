var num = document.getElementById('num');
var result = document.getElementById('result');
num.value = 1;

function multiply(i) {
    if (i == 1) {
        num.value++;
    } else if (i == 2 && num.value > 1) {
        num.value--;
    }
    var total = "";
    for (var j = 1; j <= 12; j++) {
        total += num.value + ' x ' + j + ' = ' + (num.value * j) + '<br>'
    }
    result.innerHTML = total;
}