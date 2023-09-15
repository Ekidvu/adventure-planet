/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'assets.example.com',
//           port: '',
//           pathname: '/account123/**',
//         },
//       ],
//     },
// }

nextConfig.webpack = (config, context) => {
  config.module.rules.push(
  {
    test: /\.svg$/,
    use: "@svgr/webpack",
  },
  // {
  //   test: /\.svg$/i,
  //   type: 'asset',
  //   resourceQuery: /url/, // *.svg?url
  // },
  // {
  //   test: /\.svg$/i,
  //   issuer: /\.[jt]sx?$/,
  //   resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
  //   use: ['@svgr/webpack'],
  // },
  // {
  //   test: /\.css$/i,
  //   use: ["style-loader", "css-loader"],
  // },
  // {
  //   test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
  //   // More information here https://webpack.js.org/guides/asset-modules/
  //   type: "asset/resource",
  // },
  );
  return config;
};

module.exports = nextConfig

