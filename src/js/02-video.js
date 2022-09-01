import * as _ from 'lodash';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let time = 0;

player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);

const onPlay = function (data) { 
    time = localStorage.setItem("videoplayer-current-time", data.seconds);
};

player.on('timeupdate', _.throttle(onPlay, 1000));
