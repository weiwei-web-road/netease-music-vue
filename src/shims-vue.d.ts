declare module '*.vue' {
  const component: ReturnType<typeof defineComponent>;

  export default component;
}

declare module 'tiny-emitter/instance';