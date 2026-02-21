import {
  getUrlParam,
  getInfos,
  getWorkSamples,
  mySwiper,
  myCustomSwiper,
  getToken,
  alert,
} from "./utils.js";
const scoringSection = () => {
  const scoringBtn = document.querySelector(".scoring-btn");
  const token = getToken();
  scoringBtn.addEventListener("click", async () => {
    if (token) {
      const result = await alert(
        "",
        "امتیاز خود را بین 1 تا 10 ثبت کنید",
        "ثبت",
        "خروج",
        "text",
      );
      if (result.isConfirmed) {
        if (!result.value) {
          const result = await alert("warning", "فیلد خالی است!", "تایید");
        } else {
          const result = await alert(
            "success",
            "امتیاز شما با موفقیت ثبت شد",
            "تایید",
          );
        }
      }
    } else {
      const result = await alert(
        "warning",
        "برای امتیاز دهی وارد حساب کاربری خود شوید",
        "ایجاد / ورود حساب",
        "خروج",
      );
      if (result.isConfirmed) {
        window.location.href = "signin.html";
      }
    }
  });
};
const getService = async () => {
  const specialist = getUrlParam("specialist");
  const specialists = await getInfos();
  const specialistsSection = document.querySelector(".specialists-section");

  const selectedSpecialist = specialists.find((s) => s.person === specialist);

  specialistsSection.insertAdjacentHTML(
    "beforeend",
    `
        <img src=${selectedSpecialist.person_img} alt="Specialist">
        <div class="specialists-info">
            <span>${selectedSpecialist.person}</span>
            <p>${selectedSpecialist.specialist_desc}</p>
        </div>
        <div class="scoring">
            <button class="scoring-btn">
                امتیاز دهی
            </button>
            <button>
                امتیاز ${selectedSpecialist.score} از 10
            </button>
        </div>
       `,
  );
  scoringSection();
};
window.addEventListener("load", () => {
  getService();
});
