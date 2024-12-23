/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '6500',
            pathname: '/static/images/**',
            search: '',
          },
        ],
      },

    
};


// const path = require('path');

// module.exports = {
//   webpack: (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       '@': path.resolve(__dirname, 'src'), // مسیر مورد نظر خود را تنظیم کنید
//     };
//     return config;
//   },
// };


// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'http',
//           hostname: 'localhost',
//           port: '6500',
//           pathname: '/static/images/**',
//           search: '',
//         },
//       ],
//     },
//   }



//   protocol: "http",
// hostname: "localhost",
// port: "6500",
// pathname: "/static/images/**",
// search: "",

export default nextConfig;