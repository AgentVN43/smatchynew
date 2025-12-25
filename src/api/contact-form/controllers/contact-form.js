module.exports = {
  async submit(ctx) {
    const { full_name, email, subject, message } = ctx.request.body;

    try {
      // 1. Lưu bản ghi vào database (ContactSubmission)
      const entry = await strapi.entityService.create(
        "api::contact-submission.contact-submission",
        {
          data: {
            full_name,
            email,
            subject,
            message,
            status_contact: "new", // Đặt trạng thái mặc định
          },
        }
      );

      // 2. (Tùy chọn) Gửi email thông báo cho quản trị viên
      await strapi.plugins["email"].services.email.send({
        to: "annk.sale@gmail.com",
        from: "huong.pham@amagumolabs.com",
        cc: "sam.nguyen@amagumolabs.com",
        subject: `New Contact From Contact Form: ${subject}`,
        text: `Full Name: ${full_name}\nEmail: ${email}\nMessage: ${message}`,
      });

      return { entry, message: "Message successfully sent and saved." };
    } catch (error) {
      console.error("📧 Error:", error);
      //ctx.body = { error: "Failed to process submission." };
      ctx.status = 500;
    }
  },
};
