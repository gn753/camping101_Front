const nextConfig = {
  pageExtensions: ["ts", "tsx"],
  reactStrictMode: false,
  //cdn-image-domain
  images: {
    domains: [
      "placehold.it",
      "source.unsplash.com",
      "campingagains3.s3.ap-northeast-2.amazonaws.com",
    ],
  },
  async rewrites() {
    return [
      {
        //ssr
        source: process.env.NEXT_PUBLIC_SOURCE_PATH, // 라우팅하려는 경로.
        destination: process.env.NEXT_PUBLIC_DESTINATION_URL, //서버 주소.
      },
    ];
  },
  //csp
};
module.exports = nextConfig;
