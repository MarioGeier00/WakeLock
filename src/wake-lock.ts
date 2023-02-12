export function hasWakeLockSupport() {
    return 'wakeLock' in navigator
}

export function createWakeLock() {
    return navigator.wakeLock.request('screen')
}