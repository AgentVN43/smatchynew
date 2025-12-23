module.exports = {
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.resend.com",
        port: 587,
        secure: false,
        auth: {
          user: "resend",
          pass: "re_HLP31FjX_4L9SF6UYjK41P2xkKtrmAnq3",
        },
      },
      settings: {
        defaultFrom: "onboarding@resend.dev",
        defaultReplyTo: "onboarding@resend.dev",
      },
    },
  },
};
