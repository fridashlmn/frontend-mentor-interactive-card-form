// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    app: {
        baseURL: '',
    },
    modules: [
        '@nuxt/eslint',
        '@formkit/nuxt',
        [
            '@nuxtjs/google-fonts',
            {
                families: {
                    'Space Grotesk': true,
                },
            },
        ],
    ],

    formkit: {
        // Experimental support for auto loading (see note):
        autoImport: true,
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    vite: {
        optimizeDeps: {
            include: ['fast-deep-equal'],
        },
    },
})
