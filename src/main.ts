import './style.css'
import {App} from "./app";

const appUI = App();

export function bootstrap(appSelector: string) {
    const appElement = document.querySelector(appSelector);
    if (appElement) appElement.innerHTML = appUI();
}


bootstrap('#app');
