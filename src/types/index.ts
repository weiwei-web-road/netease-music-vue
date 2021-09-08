export interface IApi {
  url: string;
  method: 'GET' | 'POST' | 'DELETE' | 'PUT' | string;
}

declare global {
  interface Window {
    d3: any;
    magnificPopup: any;
  }
}

window.d3 = window.d3 || {};
