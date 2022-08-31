let productsCount = parseInt(localStorage.getItem('cartCounts'))
let btnPlus = document.getElementById('plus')
let btnMinus = document.getElementById('minus')
let amountCount = document.getElementById('single-item-amount')
let count = 0;
let addBtn = document.getElementById('add-single-item')

btnPlus.addEventListener('click', function() {
    count++
    amountCount.innerHTML = count
})
btnMinus.addEventListener('click', function() {
    if (count > 0) count--
        amountCount.innerHTML = count
})
addBtn.addEventListener('click', function() {

    if (productsCount) {


        localStorage.setItem('cartCounts', productsCount + count)
        let currentCount = parseInt(localStorage.getItem('cartCounts'))


        document.querySelector('h4.count').textContent = currentCount;

    }
})

/* =======================     product img     ======================================== */

let productsImg = document.querySelectorAll('.product-bottom .other-options img')
let mainProduct = document.getElementById('main-product');


productsImg.forEach(function(ele) {

    ele.addEventListener('click', function(e) {
        document.querySelector('.product-bottom .other-options img.active').classList.remove('active')
        let selectedImgSrc = e.target.getAttribute("src")
        e.target.classList.add('active')
        mainProduct.setAttribute('src', selectedImgSrc)
    })
})