module.exports = {
  pageExtensions: ["ts", "tsx"],
  async rewrites() {
    return [
      {
        destination: process.env.DESTINATION_URL, //서버 주소.
        source: process.env.SOURCE_PATH, // 라우팅하려는 경로.
      },
    ];
  },
};
