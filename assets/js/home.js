/*   ================================== Start Banner Slider ====================================   */
let sliderContainer = document.querySelector('.carousel-items')
let nextArrow = document.querySelector('.arrow-right')
let prevArrow = document.querySelector('.arrow-left')
let sliderIndex = 0;
let sliderItemsLength = sliderContainer.children.length;
let indcatorsUl = document.getElementById('indicators');
let allIndicators;

// create dynamic indicators
if (sliderItemsLength) {
    for (let i = 0; i < sliderItemsLength - 1; i++) {
        let singleIndicator = document.createElement('li')
        indcatorsUl.append(singleIndicator)
        allIndicators = document.querySelectorAll('#indicators li')
    }
}
//  set width dynamic
sliderContainer.style.width = `${sliderItemsLength * 100}%`

// set index function

function setIndex(index) {
    document.querySelector('.controls .active').classList.remove('active')
    sliderContainer.style.transform = 'translate(' + (index) * -(100 / sliderItemsLength) + '% )'
    document.querySelector('.carousel .single-item.active').classList.remove('active')
}

// next btn func
let nextImgFunc = function() {
        sliderIndex = (sliderIndex < sliderItemsLength - 1) ? sliderIndex += 1 : 0
        setIndex(sliderIndex)
        allIndicators[sliderIndex].classList.add('active')
        sliderContainer.children[sliderIndex].classList.add('active')

    }
    //  slider auto play

let sliderInterval = setInterval(function() {
    nextImgFunc()
}, 4000);
// stop interval 
sliderContainer.addEventListener('mouseover', function() {
        clearInterval(sliderInterval)
    })
    // replay interval of slider
sliderContainer.addEventListener('mouseout', function() {
    sliderInterval = setInterval(function() {
        nextImgFunc()
    }, 4000);
})

// handling indicators circles 
allIndicators.forEach(function(indicator, index) {
        indicator.addEventListener('click', function() {
            sliderIndex = index
            setIndex(sliderIndex)
            indicator.classList.add('active')
            sliderContainer.children[sliderIndex].classList.add('active')
        })

    })
    // handling next and prev buttons 
nextArrow.addEventListener('click', nextImgFunc)
prevArrow.addEventListener('click', function() {
    sliderIndex = (sliderIndex > 0) ? sliderIndex -= 1 : sliderItemsLength - 1
    setIndex(sliderIndex)
    allIndicators[sliderIndex].classList.add('active')
    sliderContainer.children[sliderIndex].classList.add('active')

})


/*   ================================== End Slider ===========================================   */
/*   ================================== Start filter category ====================================   */

let filterBtn = document.querySelectorAll('.filter-btn');
let items = document.querySelectorAll('.category-item')

filterBtn.forEach(function(ele) {

    ele.addEventListener('click', function(e) {
        e.preventDefault()
        filterBtn.forEach(function(item) {
            item.classList.remove('active')
        })
        ele.classList.add('active')
        let dataFilter = this.getAttribute('data-filter')

        items.forEach(item => {
            item.style.transform = "scale(0)"

            setTimeout(function() {
                item.style.display = "none"
            }, 350)
            let itemCategory = item.getAttribute('data-category')
            if (itemCategory === dataFilter || dataFilter === "all") {
                item.style.transform = "scale(1)"

                setTimeout(function() {
                    item.style.display = "block"
                }, 350)

            }
        })
    })


})

// Add cart action
let addCartBtns = document.querySelectorAll('.category-item .add-cart')
let count = parseInt(document.querySelector('h4.count').textContent)


function cartCounts() {
    count++
    localStorage.setItem('cartCounts', count)
    let productCount = parseInt(localStorage.getItem('cartCounts'))

    document.querySelector('h4.count').textContent = productCount

}
addCartBtns.forEach(function(ele) {

    ele.addEventListener('click', cartCounts)

})



/*   ================================== End filter category ===========================================   */