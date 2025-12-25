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
          pass: process.env.SENDGRID_API_KEY,
        },
      },
      settings: {
        defaultFrom: "huong.pham@amagumolabs.com",
        defaultReplyTo: "huong.pham@amagumolabs.com",
      },
    },
  },
};
