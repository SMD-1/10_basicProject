const TypeWriter = function(txtElement,words, wait = 300){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

//Type method
TypeWriter.prototype.type = function() {
    // console.log('Hello world');

    // current index of word
    const current = this.wordIndex % this.words.length;
    // get full text of current text
    const fullTxt = this.words[current];
    // console.log(fullTxt);

    // check if deleting 
    if(this.isDeleting){
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);

    } else{
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into Element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    // initial Type speed
    let typeSpeed = 300;

    if(this.isDeleting){
        typeSpeed /= 2;
    }

    // check if word is complete
    if(!this.isDeleting && this.txt === fullTxt){
        // make a pause at end
        typeSpeed = this.wait;
        // set delete to true 
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        // move to next word
        this.wordIndex++;
        // pause before type starting
        typeSpeed = 500;
    }

    setTimeout( () => this.type(), typeSpeed)
}


// Init on DOM load
document.addEventListener('DOMContentLoaded', init);

// Init
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    // init typewriter
    new TypeWriter(txtElement, words, wait);
}










