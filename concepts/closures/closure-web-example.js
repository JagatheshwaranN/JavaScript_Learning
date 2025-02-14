function adjustSize(size) {
    return function () {
        document.body.style.fontSize = `${size}px`;
    }
}

const size10 = adjustSize(10);
const size12 = adjustSize(12);
const size14 = adjustSize(14);

document.getElementById('size-10').onclick = size10;
document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
