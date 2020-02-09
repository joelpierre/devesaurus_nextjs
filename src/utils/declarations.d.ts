interface Window {
  canvas: object;
}

declare module '*.svg' {
  const content: any;
  export = content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module 'react-lazy-load';
