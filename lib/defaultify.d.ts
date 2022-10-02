declare const _exports: <T extends {
    [k: string]: any;
}, DT extends {
    [k: string]: any;
}>(data: T, defaultData: DT, recursive?: boolean) => T & DT;
export = _exports;
