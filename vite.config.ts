import {VitePWA} from 'vite-plugin-pwa'
import {defineConfig} from "vite";

export default defineConfig({
    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['/public/favicon.svg', '/public/screen.svg','/public/pwa-icon.png', '/public/apple-touch-icon.png'],
            manifest: {
                theme_color: "#213547",
                icons: [
                    {
                        src: 'screen.svg',
                        sizes: '192x192 512x512',
                        type: 'image/svg+xml'
                    },
                    {
                        src: 'pwa-icon.png',
                        sizes: '512x512',
                        type: 'image/svg+xml'
                    },
                ]
            }
        })
    ]
})
