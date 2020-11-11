const buttonCart = document.querySelector(".button-contact");
const modalShow = document.querySelector(".modal-open-written");
const modalClose = modalShow.querySelector(".modal-close");
const buttonSearch = document.querySelector(".button-search");
const modalCart = document.querySelector(".modal-cart");

window.onload = function() {
    var a = document.querySelector('#button-search-hover')
    a.onmouseout = function(e) {
        document.getElementsById('hover-search').style.display = 'none';
    }
    a.onmouseover = function(e) {
        document.getElementById('hover-search').style.display = 'block';
    };
}

buttonCart.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalShow.classList.add("modal-show");
});

modalClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalShow.classList.remove("modal-show");
    modalShow.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modalShow.classList.contains("modal-show")) {
            evt.preventDefault();
            modalShow.classList.remove("modal-show");
            modalShow.classList.remove("modal-error");
        }
    }
});