export default function (key: string) {
    return JSON.parse(localStorage.getItem(key) || '{}') || {};
}
