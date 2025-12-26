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

      const submission_date = new Date().toLocaleDateString("fr-FR");
      const emailText = `
      Hello!
      
      You have received a new message via the pre-register form on your Smatchy site.

      Contact details:
      Full name: ${full_name}
      Email: ${email}
      Role: ${role}
      Sport: ${sport}
      Date: ${submission_date}
      Message:
      ${comment}`;

      const defaultTo = process.env.DEFAULT_TO;

      await strapi.plugins["email"].services.email.send({
        to: defaultTo,
        cc: "sam.nguyen@amagumolabs.com",
        subject: `New Contact From Pre-Register Form`,
        text: emailText,
      });

      // 2. (Tùy chọn) Gửi email thông báo cho quản trị viên
      // await strapi.plugins["email"].services.email.send({
      //   to: "annk.sale@gmail.com",
      //   cc: "sam.nguyen@amagumolabs.com",
      //   subject: `New Contact From Pre-Register Form`,
      //   text: `Full Name: ${full_name}\nEmail: ${email}\nRole: ${role}\nSport: ${sport}\nComment: ${comment}`,
      // });

      return { data: entry, message: "Message successfully sent and saved." };
    } catch (error) {
      ctx.body = { error: "Failed to process submission." };
      ctx.status = 500;
    }
  },
};
