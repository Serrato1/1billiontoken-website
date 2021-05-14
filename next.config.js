const withPlugins = require('next-compose-plugins'); 
const withCSS = require('@zeit/next-css');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins(
    [
        [//optimizedImages
            optimizedImages,
            {
                handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
                optimizeImages: true,
                mozjpeg: {
                    quality: 80,
                },
                optimizeImagesInDev: true,
                optipng: {
                    optimizationLevel: 3,
                },
                webp: {
                    preset: 'default',
                    quality: 75,
                },
                svgo: {
                    plugins: [
                        { removeComments: false }
                    ]
                },
            }
        ],
        withCSS//
    ]//e
)