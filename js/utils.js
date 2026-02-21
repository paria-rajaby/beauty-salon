const alert = (
  icon,
  text,
  confirmButtonText,
  cancelButtonText,
  input,
  inputOptions,
) => {
  return Swal.fire({
    text,
    confirmButtonText,
    icon,
    input,
    inputOptions,

    ...(cancelButtonText && {
      showCancelButton: true,
      cancelButtonText,
    }),
  });
};

// const { value: importance } = await Swal.fire({
//   title: "اهمیت این کار چقدره؟",
//   input: "radio",
//   inputOptions: {
//     low: "کم",
//     medium: "متوسط",
//     high: "زیاد",
//   },
//   confirmButtonText: "ثبت",
//   inputValidator: (value) => {
//     if (!value) return "باید یکی رو انتخاب کنی!";
//   },
// });

const getWorkSamples = async () => {
  const url = `https://vyrgkkuzadefqirmzrej.supabase.co`;
  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5cmdra3V6YWRlZnFpcm16cmVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyMTUyMTUsImV4cCI6MjA4MTc5MTIxNX0.DM6irl8qtwI_UVTB6EPx2YKbg7hP5S_xPG9EumX_QLM";

  const response = await fetch(`${url}/rest/v1/service_imgs?select=*`, {
    method: "GET",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
    },
  });
  const data = await response.json();
  return data;
};
const getInfos = async () => {
  const url = `https://vyrgkkuzadefqirmzrej.supabase.co`;
  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5cmdra3V6YWRlZnFpcm16cmVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyMTUyMTUsImV4cCI6MjA4MTc5MTIxNX0.DM6irl8qtwI_UVTB6EPx2YKbg7hP5S_xPG9EumX_QLM";

  const response = await fetch(`${url}/rest/v1/Services?select=*`, {
    method: "GET",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
    },
  });
  const infos = await response.json();
  return infos;
};

const getToken = () => {
  const token = localStorage.getItem("sb-vyrgkkuzadefqirmzrej-auth-token");
  return token;
};
const mySwiper = (slidesPerView1, slidesPerView2, slidesPerView3) => {
  const swiper = new Swiper(".swiper", {
    slidesPerView: slidesPerView1,
    spaceBetween: 40,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: slidesPerView1,
      },
      768: {
        slidesPerView: slidesPerView2,
      },
      1024: {
        slidesPerView: slidesPerView3,
      },
    },
  });
};
const getUrlParam = (key) => {
  const urlPrams = new URLSearchParams(window.location.search);
  return urlPrams.get(key);
};
const myCustomSwiper = () => {
  const track = document.querySelector(".slider-track");
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector("#next");
  const prevBtn = document.querySelector("#prev");
  let currentPosition = 0;
  let step;
  const setStep = () => {
    step = window.innerWidth >= 520 ? 500 : 300;
  };
  setStep();
  window.addEventListener("resize", setStep);

  function moveSlider(direction) {
    if (direction === "next" && currentPosition < slides.length - 2) {
      currentPosition += 1;
    } else if (direction === "prev" && currentPosition >= 0) {
      currentPosition -= 1;
    }
    track.style.transform = `transLateX(${currentPosition * step}px)`;
  }

  prevBtn.addEventListener("click", function () {
    moveSlider("prev");
  });

  nextBtn.addEventListener("click", function () {
    moveSlider("next");
  });
};
export {
  alert,
  getToken,
  getInfos,
  mySwiper,
  getUrlParam,
  getWorkSamples,
  myCustomSwiper,
};
