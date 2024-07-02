import { resolve } from 'node:path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevtool from 'vite-plugin-vue-devtools';
import VueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver'
import VueMacros from 'unplugin-vue-macros/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router'
      ],
      dts: './src/auto-imports.d.ts',
      dirs: [
        'src/components',
        'src/layouts',
      ],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: 'src/components.d.ts',
      dirs: [
        'src/components',
        'src/layouts',
      ],
      resolvers: [
        VantResolver(),
      ],
      deep: true,
      extensions: ['vue'],
    }),
    VueJsx(),
    VueDevtool(),
    vue(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
