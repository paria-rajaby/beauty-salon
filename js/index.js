console.log("l");
import { supabase } from "../js/supabase.js";

const checkAuth = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);

  const userHeaderName = document.querySelector(".header-top_button");

  if (user) {
    const name = user.user_metadata.username;
    userHeaderName.innerHTML = name;
  } else {
    userHeaderName.innerHTML = "ورود | ثبت نام";
  }
};

window.addEventListener("load", () => {
  checkAuth();
});
