module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/pre-register-form', // Endpoint mới
      handler: 'pre-register-form.submit', // Gắn với hàm submit
      config: {
        auth: false, // Cho phép truy cập công khai
      },
    },
  ],
};