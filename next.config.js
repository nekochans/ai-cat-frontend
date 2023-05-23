/** @type {import('next').NextConfig} */
const nextConfig = {
  // TODO 一時的に追加、エンドユーザーのアバター画像はどうやって設定するか考える
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lgtm-images.lgtmeow.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
}

module.exports = nextConfig
