import moment from 'moment';

import localStorageSetItem from './localStorageSetItem';
import localStorageGetItem from './localStorageGetItem';

function dateformat(dataStr: string, pattern = 'YYYY-MM-DD HH:mm:ss'): string {
    return moment(dataStr).format(pattern);
}


export {
    localStorageSetItem,
    localStorageGetItem,
    dateformat
};
