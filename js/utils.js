// import { supabase } from "./supabase";

const alert = (icon, text, confirmButtonText) => {
  return Swal.fire({
    text: text,
    confirmButtonText: confirmButtonText,
    icon: icon,
  });
};
const getToken = () => {
  const token = localStorage.getItem("sb-vyrgkkuzadefqirmzrej-auth-token");
  return token;
};
// const checkAuth = async () => {
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   const userHeaderName = document.querySelector(".header-top_button");

//   if (user) {
//     const name = user.user_metadata.full_name;
//     userHeaderName.innerHTML = name;
//   } else {
//     userHeaderName.innerHTML = "ورود | ثبت نام";
//   }
// };
export { alert, getToken };
