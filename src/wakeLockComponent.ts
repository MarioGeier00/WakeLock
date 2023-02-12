import {createWakeLock} from "./wake-lock";
import {ref} from "./ref";
import {bootstrap} from "./main";
// @ts-ignore
import screenOffUrl from "../public/screen-off.svg";
// @ts-ignore
import screenOnUrl from "../public/screen.svg";

export function WakeLockComponent() {

    let lock: WakeLockSentinel | null;

    const onClick = ref(async () => {
        const toggleWakeLock = !isLocked();

        lock?.release()
        if (toggleWakeLock) {
            lock = await createWakeLock()
            lock.onrelease = () => {
                bootstrap('#app')
                window.onfocus = async () => {
                    window.onfocus = null;
                    lock = await createWakeLock()
                    bootstrap('#app')
                }
            }
        }
    })

    const isLocked = () => {
        if (!lock)
            return false

        return !lock.released
    }

    return () => `
    <img src="${isLocked() ? screenOnUrl : screenOffUrl}" width="96" style="margin: 24px">
    <div>
        ${isLocked() ? '✅' : ''}
        <button onclick="${onClick}">${(isLocked() ? 'Bildschirm ausschalten' : 'Halte Bildschirm aktiv')}</button>
    </div>
    `
}
