import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(saveTime, 1000));


function saveTime(data) {
    const saveTimeOn = data.seconds;
    localStorage.setItem(LOCALSTORAGE_KEY, saveTimeOn);     
    };

const saveKey = localStorage.getItem(LOCALSTORAGE_KEY);
player.setCurrentTime(saveKey);