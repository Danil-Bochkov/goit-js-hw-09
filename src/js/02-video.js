import * as _ from 'lodash';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);

const onPlay = function (data) { 
    localStorage.setItem("videoplayer-current-time", data.seconds);
};

player.on('timeupdate', _.throttle(onPlay, 1000));
