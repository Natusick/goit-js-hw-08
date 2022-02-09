import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(saveTime, 1000));


function saveTime(data) {
    const saveTimeOn = data.seconds;
    localStorage.setItem(LOCALSTORAGE_KEY, saveTimeOn); 
    
    if (saveTimeOn === data.duration) {
        player.off('timeupdate', saveTime);
        localStorage.removeItem(LOCALSTORAGE_KEY);
       };    
    };

    
const saveKey = localStorage.getItem(LOCALSTORAGE_KEY);
const stogageTime = saveKey > null ? saveKey : 0;
player.setCurrentTime(saveKey);

