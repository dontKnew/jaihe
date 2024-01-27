/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_URL: 'https://localhost:3000/', 
        API_URL : 'https://kisme.site/test_api.php?token=WILASKLDJADLKJASD',
      },
    output: 'export',
}
module.exports = nextConfig