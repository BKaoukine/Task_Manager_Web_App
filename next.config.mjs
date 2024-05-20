/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/tasks',
            destination: 'http://localhost:5000/api/tasks',
          },
          {
            source: '/api/add_task',
            destination: 'http://localhost:5000/api/add_task',
          },
        ]
    },
};

export default nextConfig;
