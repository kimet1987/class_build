/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    generateBuildId: () => "codecapm-deploy-project",

    // 아래 주소만 out폴더에 만들어줘 (getServerSideProps 있는 패이지는 제외)
    exportPathMap: () => ({
        "/": { page: "/" },
        "/boards": { page: "/boards" },
        "/404": { page: "/404" },
    }),
};

module.exports = nextConfig;
