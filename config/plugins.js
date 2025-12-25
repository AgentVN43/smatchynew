module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "huong.pham@amagumolabs.com",
        defaultReplyTo: "huong.pham@amagumolabs.com",
      },
    },
  },
});
