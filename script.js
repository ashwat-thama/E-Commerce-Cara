const bar = document.getElementById('bar');
const nav1 = document.getElementsByClassName('navbar');
const nav = nav1[0];
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

const main_img = document.getElementById('main-img');
const change_img = document.getElementsByClassName('change-img');

change_img[0].onclick = function(){
    main_img.src = change_img[0].src;
}

change_img[1].onclick = function(){
    main_img.src = change_img[1].src;
}

change_img[2].onclick = function(){
    main_img.src = change_img[2].src;
}

change_img[3].onclick = function(){
    main_img.src = change_img[3].src;
}