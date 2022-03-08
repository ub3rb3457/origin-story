import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { transformAssetUrls } from '@quasar/vite-plugin'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
      reactivityTransform: true
    }),
    vueI18n({
      include: path.resolve(__dirname, './src/locales/'),
      defaultSFCLang: 'json'
    })
  ]
})  