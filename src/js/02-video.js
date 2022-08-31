import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let time = 0;
const onPlay = function (data) { 
    time = localStorage.setItem("videoplayer-current-time", data.seconds);
    console.log(seconds);
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);
// console.log(time);