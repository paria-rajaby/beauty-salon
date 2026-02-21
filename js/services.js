import {
  getUrlParam,
  getInfos,
  getWorkSamples,
  mySwiper,
  myCustomSwiper,
  getToken,
  alert,
} from "./utils.js";
const servicesInfoWrapper = document.querySelector(".services-info-wrapper ");
let worksamplesImgsWrapper = null;
let reservationBtn = null;

const workSamples = async () => {
  const service = getUrlParam("services");
  const workSamplesInfos = await getWorkSamples();
  const selectedworkSamples = workSamplesInfos.filter(
    (workSample) => workSample.title === service,
  );
  selectedworkSamples.forEach((sample) => {
    worksamplesImgsWrapper.insertAdjacentHTML(
      "beforeend",
      `
        <img class="slide" src=${sample.img}>
    `,
    );
  });
  myCustomSwiper();
};
const getService = async () => {
  const service = getUrlParam("services");
  const services = await getInfos();

  const selectedService = services.find((s) => s.title === service);
  servicesInfoWrapper.insertAdjacentHTML(
    "beforeend",
    `
         <div class="services-info_top">
            <h1>${selectedService.title}</h1>
            <div class="slider worksamples-imgs_wrapper">
              <div class="slider-track">
              
              </div>
    
            </div>
            <div class="slider-button-wrapper">
              <button id="prev">قبلی</button>
              <button id="next">بعدی</button>
            </div>
        </div>
        <div class="services-info_middle">
            <div class="specialist-section">
                <img src=${selectedService.person_img}>
                <span>${selectedService.person}</span>
            </div>
            <p>${selectedService.service_desc}</p>
        </div>
        <div class="services-info_bottom">
            <button id="reservation">
                رزرو نوبت
                 <img src="/assets/svg/icons8-arrow-left-50.png" alt="left">
            </button>
        </div>
    `,
  );
  worksamplesImgsWrapper = document.querySelector(".slider-track");
  await workSamples();
  reservationFunc();
};

const reservationFunc = () => {
  reservationBtn = document.querySelector("#reservation");
  const token = getToken();
  reservationBtn.addEventListener("click", async () => {
    if (token) {
      const result = await alert(
        "",
        "نوبت خود را انتخاب کنید",
        "رزرو",
        "خروج",
        "radio",
        {
          time1: "شنبه ساعت 10 صبح",
          time2: "دوشنبه ساعت 4 بعد از ظهر",
          time3: "چهارشنبه ساعت 6 عصر",
        },
      );
      if (result.isConfirmed) {
        const result = await alert(
          "success",
          "نوبت شما با موفقیت ثبت شد",
          "تایید",
        );
      }
    } else {
      const result = await alert(
        "warning",
        "برای رزرو نوبت وارد حساب کاربری خود شوید",
        "ایجاد / ورود حساب",
        "خروج",
      );
      if (result.isConfirmed) {
        window.location.href = "signin.html";
      }
    }
  });
};

window.addEventListener("load", async () => {
  await getService();
});
