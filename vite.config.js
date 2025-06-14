import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
import { transformWithEsbuild } from 'vite'
import restart from 'vite-plugin-restart'
import  glsl  from 'vite-plugin-glsl'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default {
    root: 'src/',
    publicDir: '../public/',
    plugins:
    [
        // Restart server on static/public file change
        restart({ restart: [ '../public/**', ] }),

        // React support
        react(),
        //https support 
        basicSsl(),
        // shader files support 
        glsl(),
        // Tailwind Support 
        tailwindcss(),
        // .js file support as if it was JSX
        {
            name: 'load+transform-js-files-as-jsx',
            async transform(code, id)
            {
                if (!id.match(/src\/.*\.js$/))
                    return null

                return transformWithEsbuild(code, id, {
                    loader: 'jsx',
                    jsx: 'automatic',
                });
            },
        },
    ],
    server:
    {
        host: true, // Open to local network and display URL
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env) // Open if it's not a CodeSandbox
    },
    build:
    {
        base: '/daniel-echeveste.github.io/',
        outDir: '../build', // Output in the dist/ folder
        emptyOutDir: true, // Empty the folder first
        sourcemap: true, // Add sourcemap
        target: 'esnext',
    },
}