module.exports = {
  apps : [
  {
    name: "Application Name(4001)",
    script: "node ./bin/www",
    cwd : '/home/sotuken/',
    env: {
      PORT: 3000,
      NODE_ENV: "development",
    },
    env_production: {
      PORT: 3000,
      NODE_ENV: "production",
    }
  }
  ]
}