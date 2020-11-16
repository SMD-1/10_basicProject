const btn = document.querySelector('#btn');
const nav = document.querySelector('#nav');

btn.addEventListener('click' ,() => {
    console.log('Hello');
    nav.classList.toggle("active");
    btn.classList.toggle("active");

});

