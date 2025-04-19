module.exports = {
    plugins: {
        'autoprefixer': {
            overrideBrowserslist: ['last 2 versions'], // Specify supported browsers
            remove: false, // Keep this option to prevent removing unused prefixes
        },
        // Add other PostCSS plugins here if needed
    }
};
