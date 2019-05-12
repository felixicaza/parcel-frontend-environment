const options = {
   gifsicle: {
      optimizationLevel: 2,
      interlaced: false,
      colors: 10,
   },
   mozjpeg: {
      progressive: true,
      quality: 80,
   },
   pngquant: {
      quality: 80,
      speed: 1,
      strip: true,
   },
   svgo: {
      plugins: [{ removeViewBox: false }, { cleanupIDs: true }],
   },
   webp: {
      quality: 80,
      alphaQuality: 80,
      method: 6,
   },
};

module.exports = options;
