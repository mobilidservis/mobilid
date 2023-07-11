import { isLogin } from "../composables/store";

export default defineNuxtRouteMiddleware(async (to) => {

  console.log(to);
  
  if (!isLogin.value && to.path.includes("/admin")) {
    return navigateTo("/login");
  } else if (isLogin.value && to.fullPath == "/login") {
    return navigateTo("/admin");
  }
});
