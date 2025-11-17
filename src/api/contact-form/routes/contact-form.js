module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/contact-form', // Endpoint mới
      handler: 'contact-form.submit', // Gắn với hàm submit
      config: {
        auth: false, // Cho phép truy cập công khai
      },
    },
  ],
};