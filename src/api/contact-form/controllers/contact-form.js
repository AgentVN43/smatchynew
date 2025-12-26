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

      // 2. Gửi email thông báo cho quản trị viên
      const submission_date = new Date().toLocaleDateString("fr-FR");
      const emailText = `
      Hello!
      
      You have received a new message via the contact form on your Smatchy site.

      Contact details:
      Full name: ${full_name}
      Email: ${email}
      Date: ${submission_date}
      Message:
      ${message}`;

      const defaultTo = process.env.DEFAULT_TO;

      await strapi.plugins["email"].services.email.send({
        to: defaultTo,
        cc: "sam.nguyen@amagumolabs.com",
        subject: `New Contact From Contact Form`,
        text: emailText,
      });

      return { entry, message: "Message successfully sent and saved." };
    } catch (error) {
      console.error("📧 Error:", error);
      ctx.status = 500;
      ctx.body = { error: error.message };
    }
  },
};
