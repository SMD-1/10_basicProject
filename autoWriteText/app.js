const text = 'My name is SHAIKH MOHAMMAD DANISH, I am 2nd year B.tech student at MAKAUT.';

let index=0;

function writeText(){
    document.body.innerText = text.slice(0,index);

    index++;
    if(index>text.length){
        index=0;
    }
}

setInterval(writeText , 100);

