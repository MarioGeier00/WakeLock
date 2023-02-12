import {hasWakeLockSupport} from "./wake-lock";
import {WakeLockComponent} from "./wakeLockComponent";
import {NoWakeLockSupportComponent} from "./noWakeLockSupportComponent";

export function App() {
    if (hasWakeLockSupport()) {
        return WakeLockComponent();
    } else {
        return NoWakeLockSupportComponent();
    }
}