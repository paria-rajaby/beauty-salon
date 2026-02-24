import { supabase } from "./supabase.js";
import { alert } from "./utils.js";

const form = document.querySelector(".login-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    alert("error", " ایمیل یا رمز عبور اشتباه است!", "تلاش مجدد");
  } else {
    alert("success", "  ورود با موفقیت انجام شد", "ورود").then(
      () => (location.href = "/index.html"),
    );
  }
});
