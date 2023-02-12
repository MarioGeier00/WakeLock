import {bootstrap} from "./main";

export const ref = <T>(action: () => T) => {
    const actionId = Date.now();
    refKey(async () => {
        await action();
        bootstrap('#app');
    }, actionId.toString())
    return `document.refs[${actionId}]()`;
}

const refKey = <T>(action: () => T, key: string) => {
    // @ts-ignore
    if (!document.refs) {
        // @ts-ignore
        document.refs = new Map()
    }
    // @ts-ignore
    document.refs[key] = action;
}