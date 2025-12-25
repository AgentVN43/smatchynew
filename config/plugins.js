module.exports = {
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.sendgrid.net",
        port: 587,
        secure: false,
        auth: {
          user: "apikey",
          pass: "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",
        },
      },
      settings: {
        defaultFrom: "huong.pham@amagumolabs.com",
        defaultReplyTo: "huong.pham@amagumolabs.com",
      },
    },
  },
};
