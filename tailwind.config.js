const { variants } = require("tailwindcss/stubs/defaultConfig.stub")

module.export = {
    purge: [
        './public/**/*.html',
    ],
    darkMode: false,
    theme: {
        extend: {
            backgroundImage: theme => ({
                'wave-pattern': 'url(../img/wave-white.png)'
            })
        }
    },
    variants: {
        extend: {}
    },
    plugins: [],
}


