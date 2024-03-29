import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "Home",
      path: "/Home",
      component: () => import("@/views/Home"),
    },
    {
      name: "MainPage",
      path: "/MainPage",
      component: () => import("@/views/MainPage.vue"),
    },
    {
      name: "SignIn",
      path: "/",
      component: () => import("@/views/account/SignIn"),
    },
    {
      name: "OTP",
      path: "/otp",
      component: () => import("@/views/account/OTP"),
    },
    {
      name: "OneTimeLogin",
      path: "/onetimelogin",
      component: () => import("@/views/account/OneTimeLogin"),
    },
    {
      name: "SignUp",
      path: "/signup",
      component: () => import("@/views/account/SignUp"),
    },
    {
      name: "FindPassword",
      path: "/findpassword",
      component: () => import("@/views/account/FindPassword"),
    },
    {
      name: "MyAccount",
      path: "/myaccount",
      component: () => import("@/views/account/MyAccount"),
      children: [
        {
          name: "EditProfile",
          path: "editProfile",
          component: () => import("@/views/account/accountSub/EditProfile"),
        },
        {
          name: "ChangePassword",
          path: "changepassword",
          component: () => import("@/views/account/accountSub/ChangePassword"),
        },
        {
          name: "Config",
          path: "config",
          component: () => import("@/views/account/accountSub/Config"),
        },
        {
          name: "NewPassword",
          path: "newpassword",
          component: () => import("@/views/account/accountSub/NewPassword"),
        },
      ],
    },
  ],
});
