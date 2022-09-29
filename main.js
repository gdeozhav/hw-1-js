const mainBlock = document.querySelector('.main-block');
const blocks = document.querySelectorAll('.color-block');

const block1 = document.querySelector('.block1');
const block2 = document.querySelector('.block2');
const block3 = document.querySelector('.block3');
const block4 = document.querySelector('.block4');

mainBlock.addEventListener('input', function() {
    block1.style.backgroundColor = hex2rgb(mainBlock.value, 50, 50, 50);
    block2.style.backgroundColor = hex2rgb(mainBlock.value, -50, -50, -50);
    block3.style.backgroundColor = hex2rgb(mainBlock.value, 100, 100, 100);
    block4.style.backgroundColor = hex2rgb(mainBlock.value, -100, -100, -100);
})
//не работает, если вынести ^ в функцию
blocks.forEach(function(block) {
    block.addEventListener('mouseover', function() {
        block.innerHTML = block.style.backgroundColor;
    })
    block.addEventListener('mouseleave', function() {
        block.innerHTML = '';
    })
    block.addEventListener('click', function() {
        mainBlock.value = rgb2hex(block.style.backgroundColor);

        block1.style.backgroundColor = hex2rgb(mainBlock.value, 50, 50, 50);
        block2.style.backgroundColor = hex2rgb(mainBlock.value, -50, -50, -50);
        block3.style.backgroundColor = hex2rgb(mainBlock.value, 100, 100, 100);
        block4.style.backgroundColor = hex2rgb(mainBlock.value, -100, -100, -100);
    })
})

function hex2rgb(c, rD, gD, bD) {
    let bigint = parseInt(c.split('#')[1], 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return 'rgb(' + (r+rD) + ',' + (g+gD) + ',' + (b+bD) + ')';
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

    return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
};