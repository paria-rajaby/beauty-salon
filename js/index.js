import { supabase } from "../js/supabase.js";
import { getToken } from "./utils.js";
const userHeaderName = document.querySelector(".header-top_button");
const userMenu = document.querySelector(".user-menue");
const removeMenuButton = document.querySelector(".remove-menu");

const checkAuth = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const name = user.user_metadata.username;
    userHeaderName.innerHTML = name;
  } else {
    userHeaderName.innerHTML = "ورود | ثبت نام";
  }

  if (getToken()) {
    userHeaderName.href = "javascript:void(0)";
  } else {
    userHeaderName.href = "/pages/signin.html";
  }
};
const openMenu = () => {
  userHeaderName.addEventListener("click", () => {
    if (getToken()) {
      userMenu.style.display = "block";
    } else {
      return;
    }
  });
};
const removeMenu = () => {
  removeMenuButton.addEventListener("click", () => {
    userMenu.style.display = "none";
  });
};

window.addEventListener("load", () => {
  checkAuth();
  openMenu();
  removeMenu();
});
