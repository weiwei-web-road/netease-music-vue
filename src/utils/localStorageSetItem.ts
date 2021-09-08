export default function (key: string, newVal: any) {
    if (key === 'playingSongObj' || key === 'playingSongIdArr') {
    // 创建一个StorageEvent事件
    // var newStorageEvent = document.createEvent('StorageEvent');
        const storage = {
            'setItem': function (k: string, val: string) {
                localStorage.setItem(k, val);
                // 初始化创建的事件
                const event = new Event('setItem');
                // 派发对象

                window.dispatchEvent(event);
            }
        };

        return storage.setItem(key, JSON.stringify(newVal));
    }
    localStorage.setItem(key, JSON.stringify(newVal));

}
// dispatchEvent 和 addEventListener 属于发布订阅模式。
// dispatchEvent 是发布者，addEventListener 是订阅者。
