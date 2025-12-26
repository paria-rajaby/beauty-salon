import { supabase } from "./supabase";

const form = document.querySelector(".login-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const userName = form.userName.value;
  const email = form.email.value;
  const password = form.password.value;

  const { data, error } = await supabase.auth.signInWithPassword({
    userName,
    email,
    password,
  });
  if (error) {
  }
});
