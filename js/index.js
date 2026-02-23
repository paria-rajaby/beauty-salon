import { supabase } from "../js/supabase.js";
import { getToken, alert, getInfos, mySwiper } from "./utils.js";
import { startRequest, hideLoader } from "./loader.js";
const userHeaderName = document.querySelector(".header-top_button");
const userMenu = document.querySelector(".user-menue");

const logoutButton = document.querySelector("#logout");
const SpecialistsWrapper = document.querySelector(".swiper-wrapper");
const servicesWrapper = document.querySelector(".services-wrapper");
let userName;

const checkAuth = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  userName = user ? user.user_metadata.username : null;

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
  const userMenueWrapper = document.querySelector(".user-menue");

  userHeaderName.addEventListener("click", async () => {
    if (!getToken()) return;

    userMenu.style.display = "block";

    userMenueWrapper.innerHTML = `<div class="user-infos">
        <div class="user-info">
          <img src="/assets/images/admin.jpg" alt="photo">
          <span>${userName}</span>
        </div>
        <span class="remove-menu">+</span>
      </div>
      <ul>
        <li><a href="">اکانت من</a></li>
        <li><a href="">نوبت های رزرو شده</a></li>
        <li><a href="#" class="logout">خروج</a></li>
      </ul>`;

    const removeMenuButton = userMenueWrapper.querySelector(".remove-menu");
    removeMenuButton.addEventListener("click", () => {
      userMenu.style.display = "none";
    });

    const logoutButton = userMenueWrapper.querySelector(".logout");
    logoutButton.addEventListener("click", async (e) => {
      e.preventDefault();
      const result = await alert(
        "warning",
        "ایا از خروج از حساب کاربری خود اطمینان دارید ؟",
        "بله",
        "خیر",
      );
      if (result.isConfirmed) {
        await supabase.auth.signOut();
        window.location.href = "/index.html";
      }
    });
  });
};
const getServicesInfos = async () => {
  try {
    startRequest();
    const Infos = await getInfos();
    Infos.forEach((info, index) => {
      servicesWrapper.insertAdjacentHTML(
        "beforeend",
        `
        <div class="service div${index + 1}">
            <a href="/pages/services.html?services=${info.title}"><img src=${
              info.work_img
            }></a>
            <span>${info.title}</span>
        </div>
      `,
      );
    });
  } finally {
    hideLoader();
  }
};
const getSpecialistsInfos = async () => {
  try {
    startRequest();
    mySwiper(1, 2, 3);

    const Infos = await getInfos();
    Infos.forEach((info) => {
      SpecialistsWrapper.insertAdjacentHTML(
        "beforeend",
        `
        <div class="specialist swiper-slide">
        <a href="/pages/specialist.html?specialist=${info.person}">
                <img src=${info.person_img} alt="">
                <div class="specialist-info">
                    <span>${info.person}</span>
                    <p>${info.title}</p>
                </div>
         </a>        
            </div>      
    `,
      );
    });
  } finally {
    hideLoader();
  }
};

window.addEventListener("load", () => {
  checkAuth();
  openMenu();
  getServicesInfos();
  getSpecialistsInfos();
});
