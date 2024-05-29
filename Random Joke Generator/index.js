const jokeContainer = document.querySelector('.joke');
const btn = document.querySelector('.generate');
let url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist&type=single';


let getJoke = () => {

    fetch(url)
    .then((data) => data.json())
    .then(res => jokeContainer.textContent = `${res.joke}`)
    

}

btn.addEventListener('click', getJoke)
