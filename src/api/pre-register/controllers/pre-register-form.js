module.exports = {
  async submit(ctx) {
    const { full_name, email, role, sport, comment, other_role } =
      ctx.request.body;

    try {
      // 1. Lưu bản ghi vào database (ContactSubmission)
      const entry = await strapi.entityService.create(
        "api::pre-register-form.pre-register-form",
        {
          data: {
            full_name,
            email,
            role,
            other_role,
            sport,
            comment,
            status_contact: "new", // Đặt trạng thái mặc định
          },
        }
      );

      // 2. (Tùy chọn) Gửi email thông báo cho quản trị viên
      await strapi.plugins["email"].services.email.send({
        to: "support@smatchy.app",
        from: "onboarding@resend.dev",
        subject: `New Contact From Pre-Register Form`,
        text: `Full Name: ${full_name}\nEmail: ${email}\nRole: ${role}\nOther Role: ${other_role}\nSport: ${sport}\nComment: <p>${comment}</p>`,
      });

      return { data: entry, message: "Message successfully sent and saved." };
    } catch (error) {
      ctx.body = { error: "Failed to process submission." };
      ctx.status = 500;
    }
  },
};
