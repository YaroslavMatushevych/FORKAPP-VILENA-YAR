if (window.innerWidth > 480) {
    document.querySelector(".header__nav-bar").classList.remove("header__dropdown-menu");
}

window.addEventListener('resize', function(){
    if (window.innerWidth > 480) {
        document.querySelector(".header__nav-bar").classList.remove("header__dropdown-menu");
    } else {
        document.querySelector(".header__nav-bar").classList.add("header__dropdown-menu");
    }
});
document.getElementsByClassName('burger')[0].onclick = function(){
    this.classList.toggle('burger__button_opened');
    document.querySelector(".header__dropdown-menu").classList.toggle("dropdown-menu_opened");
};
