module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("DATABASE_HOST", "10.9.162.79"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "blog"),
        username: env("DATABASE_USERNAME", "root"),
        password: env("DATABASE_PASSWORD", "yang0622"),
      },
      options: {},
    },
  },
});
