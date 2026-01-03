import {
  getUrlParam,
  getInfos,
  getWorkSamples,
  mySwiper,
  myCustomSwiper,
} from "./utils.js";
const servicesInfoWrapper = document.querySelector(".services-info-wrapper ");
let worksamplesImgsWrapper = null;

const workSamples = async () => {
  const service = getUrlParam("services");
  const workSamplesInfos = await getWorkSamples();
  const selectedworkSamples = workSamplesInfos.filter(
    (workSample) => workSample.title === service
  );
  selectedworkSamples.forEach((sample) => {
    worksamplesImgsWrapper.insertAdjacentHTML(
      "beforeend",
      `
        <img class="slide" src=${sample.img}>
    `
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
            <button>
                رزرو نوبت
                 <img src="/assets/svg/icons8-arrow-left-50.png" alt="left">
            </button>
        </div>
    `
  );
  worksamplesImgsWrapper = document.querySelector(".slider-track");
  await workSamples();
};

window.addEventListener("load", async () => {
  await getService();
});
