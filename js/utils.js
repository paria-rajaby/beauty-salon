// import { supabase } from "./supabase";

const alert = (icon, text, confirmButtonText, cancelButtonText) => {
  return Swal.fire({
    text,
    confirmButtonText,
    icon,
    ...(cancelButtonText && {
      showCancelButton: true,
      cancelButtonText,
    }),
  });
};

const getToken = () => {
  const token = localStorage.getItem("sb-vyrgkkuzadefqirmzrej-auth-token");
  return token;
};

export { alert, getToken };
