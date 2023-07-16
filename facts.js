const jokeContainer =document.getElementById("joke");//jokecontainer variable is assigned to html with id joke
const btn=document.getElementById("btn");//get btn of html and assigns it to var btn
//const url="https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


let getJoke=()=>{   //creating a function getjoke with no parameters with shorter syntax
    
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data=>data.json())
    .then(item=>{
    jokeContainer.textContent=`${item.joke}`;
    jokeContainer.classList.add("fade");
    playAudio();
    });
}
btn.addEventListener("click",getJoke);//when button is clicked getJoke function is called
getJoke();

const audioList = [
    'mixkit-cartoon-laugh-voice-2882.wav',
    'mixkit-crowd-laugh-424.wav',
    'mixkit-funny-giggling-2885.wav'
  ];
  let currentAudioIndex = 0;
let playAudio=()=>
{
    
    let audio = document.getElementById("audio");
    audio.src = audioList[currentAudioIndex];
    audio.play();
    currentAudioIndex = (currentAudioIndex + 1) % audioList.length;
    
}