import { supabase } from "../js/supabase.js";
import { getToken, alert, getInfos, mySwiper } from "./utils.js";
const userHeaderName = document.querySelector(".header-top_button");
const userMenu = document.querySelector(".user-menue");
const removeMenuButton = document.querySelector(".remove-menu");
const logoutButton = document.querySelector("#logout");
const SpecialistsWrapper = document.querySelector(".swiper-wrapper");

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
const logout = () => {
  logoutButton.addEventListener("click", async () => {
    const result = await alert(
      "warning",
      "ایا از خروج از حساب کاربری خود اطمینان دارید ؟",
      "بله",
      "خیر"
    );
    if (result.isConfirmed) {
      await supabase.auth.signOut();
      window.location.href = "/index.html";
    }
  });
};
const getSpecialistsInfos = async () => {
  mySwiper(1, 2, 3);

  const Infos = await getInfos();
  Infos.forEach((info) => {
    SpecialistsWrapper.insertAdjacentHTML(
      "beforeend",
      `
        <div class="specialist swiper-slide">
                <img src=${info.person_img} alt="">
                <div class="specialist-info">
                    <span>${info.person}</span>
                    <p>${info.title}</p>
                </div>
            </div>
    `
    );
  });
};
window.addEventListener("load", () => {
  checkAuth();
  openMenu();
  removeMenu();
  logout();
  getInfos();
  getSpecialistsInfos();
});
