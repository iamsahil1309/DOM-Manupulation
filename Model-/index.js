let openBtn =  document.querySelector('.open-btn');
let closeBtn = document.querySelector('.close-btn');
let modelContainer = document.querySelector('.model-container');

openBtn.addEventListener('click', function(){
    modelContainer.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    modelContainer.style.display = 'none';
})

window.addEventListener('click',(e) => {
    if(e.target === modelContainer ){
        modelContainer.style.display = 'none';
    }
})