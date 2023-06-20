/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Chỉ cần cấu hình loader cho tệp PDF trên phía client
    if (!isServer) {
      config.module.rules.push({
        test: /\.(pdf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, // Tùy chỉnh giới hạn kích thước tệp để xử lý
              fallback: "file-loader",
              publicPath: "/_next",
              outputPath: "static/images", // Thay đổi đường dẫn đầu ra nếu cần thiết
              name: "[name].[hash].[ext]",
            },
          },
        ],
      });
    }

    return config;
  },
};

module.exports = nextConfig;
