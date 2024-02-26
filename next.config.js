const NextConfig = {
  webpack(config) {
    // Установка полифиллов для Node.js модулей, которые могут быть необходимы в браузере
    if (!config.resolve.fallback) {
      config.resolve.fallback = {};
    }

    // Полифил для `util`, если ваш код или зависимости требуют это на клиентской стороне
    // Это необходимо для Webpack 5, так как Next.js начал использовать его по умолчанию с версии 11
    config.resolve.fallback.util = require.resolve("util/");

    // Эта конфигурация активирует поддержку styled-components для серверного и клиентского рендеринга
    config.resolve.fallback.stream = require.resolve("stream-browserify");
    config.resolve.fallback.crypto = require.resolve("crypto-browserify");
    config.resolve.fallback.buffer = require.resolve("buffer/");
    config.resolve.fallback.http = require.resolve("stream-http");
    config.resolve.fallback.https = require.resolve("https-browserify");
    config.resolve.fallback.os = require.resolve("os-browserify/browser");
    config.resolve.fallback.url = require.resolve("url/");
    config.resolve.fallback.assert = require.resolve("assert/");
    config.resolve.fallback.zlib = require.resolve("browserify-zlib");

    // Добавление плагинов для предоставления глобальных переменных, таких как process
    const webpack = require("webpack");
    config.plugins.push(
      new webpack.ProvidePlugin({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
      })
    );

    return config;
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = NextConfig;
