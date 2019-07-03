const config = {
  app: {
    port: process.env.SERVER_PORT || process.env.PORT || 3089,
    ip: process.env.SERVER_IP || process.env.IP || 'localhost',
    apiBase: '/api/v1',
  },
};

export default config;
