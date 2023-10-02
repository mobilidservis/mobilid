import { isUserLogin } from "../composables/store";

export default defineNuxtRouteMiddleware(async (to) => {
  
  if (!isUserLogin.value && to.path.includes("/admin")) {
    return navigateTo("/login");
  } else if (isUserLogin.value && to.fullPath == "/login") {
    return navigateTo("/admin");
  }
});
