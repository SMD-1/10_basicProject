const btn = document.getElementById('btn');
const container = document.getElementById('container');


btn.addEventListener('click', () => {
    createNotification();
});

function createNotification(){
    // console.log('hello');
    const notif = document.createElement('div');
    notif.classList.add('toast');

    notif.innerText = `you just clicked me`;

    container.appendChild(notif);
    setTimeout( () => {
        notif.remove();
    }, 3000);


}

