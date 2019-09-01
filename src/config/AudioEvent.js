const prefix = 'NETEASE_MUSIC_';

export const privateEvent = {

};

export default function (controller = '') {
    return {
        PLAY: prefix + 'PLAY',
        PAUSE: prefix + 'PAUSE',
        SETCONTROLL: prefix + 'SETCONTROLL',
        INITIALAUDIO: prefix + 'INITIALAUDIO',
        ONENDED: prefix + controller + 'ENDED',
        ONTIMEUPDAE: prefix + controller + 'ONTIMEUPDAE',
        ONCANPLAY: prefix + controller + 'ONCANPLAY',
        ONERROR: prefix + controller + 'ONERROR',
        ONPLAYING: prefix + controller + 'ONPLAYING',
        ONCANPLAYTHROUGH: prefix + controller + 'ONCANPLAYTHROUGH',
        ONPLAY: prefix + 'ONPLAY',
        ONPAUSE: prefix + 'ONPAUSE',
    };
}