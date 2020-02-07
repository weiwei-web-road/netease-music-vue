export default function (key, newVal) {
    if (key === 'playingSongObj' || key === 'playingSongIdArr') {
        // 创建一个StorageEvent事件
        var newStorageEvent = document.createEvent('StorageEvent');
        const storage = {
            setItem: function (k, val) {
                localStorage.setItem(k, val);
  
                // 初始化创建的事件
                newStorageEvent.initEvent('setItem', true, true);
  
                // 派发对象
                window.dispatchEvent(newStorageEvent)
            }
        }
        return storage.setItem(key, JSON.stringify(newVal));
    } else {
        localStorage.setItem(key, JSON.stringify(newVal));
    }
}