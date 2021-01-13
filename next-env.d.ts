/// <reference types="next" />
/// <reference types="next/types/global" />

/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

declare module '*.scss';

declare module '*.svg' {
    const content: any;
    export default content;
}
