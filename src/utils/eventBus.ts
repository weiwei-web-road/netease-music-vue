/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eventBus.js
import emitter from 'tiny-emitter/instance';

export default {
    $on: (...args: any) => emitter.on(...args),
    $once: (...args: any) => emitter.once(...args),
    $off: (...args: any) => emitter.off(...args),
    $emit: (...args: any) => emitter.emit(...args)
};