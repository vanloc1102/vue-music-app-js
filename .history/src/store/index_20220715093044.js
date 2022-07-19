import { createStore } from 'vuex';

export default createStore({
  state: {
    authModalShow: false,
    userLoggedIn: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
      console.log(state.authModalShow);
    },
    toggleAuth: (state) => {
      state.userLoggedIn = !state.userLoggedIn;
    },
  },
  getters: {
    // authModalShow: (state) => state.authModalShow,
  },
  actions: {
    async register() {
      userCred = await auth.createUserWithEmailAndPassword(values.email, values.password);

      await userCollection.add({
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country,
      });
    },
  },
});
