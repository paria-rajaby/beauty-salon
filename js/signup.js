import { supabase } from "./supabase.js";
import { alert } from "./utils.js";

const form = document.querySelector(".login-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const userName = document.querySelector("#username").value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username: userName },
    },
  });
  if (error) {
    alert("error", "ثبت نام نا موفق بود !", "تلاش مجدد");
  } else {
    alert("success", " ثبت نام با موفقیت انجام شد", "ورود").then(
      () => (location.href = "../index.html"),
    );
  }
});
