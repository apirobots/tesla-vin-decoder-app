declare module 'fork-me-github' {
  interface ForkMeOptions {
    backgroundColor?: string;
    textColor?: string;
    position?: 'left' | 'right';
  }

  function ForkMe(url: string, options?: ForkMeOptions): void;
  export default ForkMe;
} 