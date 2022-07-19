<template>
  <!-- Login Form -->
  <div class="text-white text-center font-bold p-5 mb-4"
  v-if="login_show_alert" :class="login_alert_variant">
    {{login_alert_msg}}
  </div>
  <vee-form v-show="tab === 'login'"
  :validation-schema="loginSchema" @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field type="email" name="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
          duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email" />
        <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field type="password" name="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
          duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password" />
        <ErrorMessage class="text-red-600" name="password" />
    </div>
    <button type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
        hover:bg-purple-700">
      Submit
    </button>
  </vee-form>
</template>
<script>
export default {
  name: 'AuthModal',
  data() {
    return {
      tab: 'login',
      schema: {
        name: 'required|min:3|max:100|alpha_spaces',
        email: 'required|min:3|max:100|email',
        age: 'required|min_value:18|max_value:100',
        password: 'required|min:4|max:20',
        confirm_password: 'passwords_mismatch:@password',
        country: 'required|country_excluded:VietNam',
        tos: 'tos',
      },
      userData: {
        country: 'USA',
      },
      loginSchema: {
        email: 'required|min:3|max:100|email',
        password: 'required|min:4|max:20',
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: 'bg-blue-500',
      reg_alert_msg: 'Please wait! Your account is being created.',
      login_show_alert: false,
      login_in_submission: false,
      login_alert_variant: 'bg-green-500',
      login_alert_msg: 'Success! Login success.',
    };
  },
  computed: {
    ...mapState(['authModalShow']),
  },
  methods: {
    ...mapMutations(['toggleAuthModal']),
    register(values) {
      this.reg_show_alert = true;
      this.reg_in_submission = true;
      this.reg_alert_variant = 'bg-green-500';
      this.reg_alert_msg = 'Success! Your account has been created.';
      console.log(values);
    },
    login(values) {
      this.login_show_alert = true;
      this.login_in_submission = true;
      this.login_alert_variant = 'bg-green-500';
      this.login_alert_msg = 'Success! Login success.';
      console.log(values);
    },
  },
};
</script>
