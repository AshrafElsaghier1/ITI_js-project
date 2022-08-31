//  OPEN & CLOSE sidebar
let sidebar_close_btn = document.getElementById('sidebar_close_btn')
let sidebar_open_btn = document.getElementById('sidebar_open_btn')
let backdrop = document.getElementById('backdrop')
let sidebarContainer = document.getElementById('sidebar')
let nav = document.getElementById('nav')

function close_sidebar() {
    if (sidebarContainer.classList.contains('active')) {
        backdrop.classList.remove('active')
        sidebarContainer.classList.remove('active')
    }
}
sidebar_open_btn.addEventListener('click', function() {
    if (!sidebarContainer.classList.contains('active')) {
        backdrop.classList.add('active')
        sidebarContainer.classList.add('active')
    }
})
backdrop.addEventListener('click', close_sidebar)
sidebar_close_btn.addEventListener('click', close_sidebar)

window.addEventListener('scroll', function(e) {
        if (window.scrollY > 1) {
            nav.classList.add('sticky')
        } else {
            nav.classList.remove('sticky')

        }
    })
    /*   ================================== End sidebar ===========================================   */

/*  ================================== back to top button  */


let backToTopBtn = document.getElementById("back-to-top");

backToTopBtn.addEventListener('click', function() {
    document.documentElement.scrollTop = 0;
})
window.addEventListener('scroll', function() {

    if (window.scrollY > 50) {
        backToTopBtn.style.cssText = "right:15px ";
    } else {
        backToTopBtn.style.cssText = "right:-70px ";
    }
})
let productCount = parseInt(localStorage.getItem('cartCounts'))

document.querySelector('h4.count').textContent = productCount || 0