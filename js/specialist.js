import {
  getUrlParam,
  getInfos,
  getWorkSamples,
  mySwiper,
  myCustomSwiper,
  getToken,
  alert,
} from "./utils.js";

const getService = async () => {
  const specialist = getUrlParam("specialist");
  const specialists = await getInfos();
  const specialistsSection = document.querySelector(".specialists-section");

  const selectedSpecialist = specialists.find((s) => s.person === specialist);
  console.log(selectedSpecialist);

  specialistsSection.insertAdjacentHTML(
    "beforeend",
    `
        <img src=${selectedSpecialist.person_img} alt="Specialist">
        <div class="specialists-info">
            <span>${selectedSpecialist.person}</span>
            <p>${selectedSpecialist.specialist_desc}</p>
        </div>
        <div class="scoring">
            <button onclick="">
                امتیاز دهی
            </button>
            <button>
                امتیاز ${selectedSpecialist.score} از 10
            </button>
        </div>
       `,
  );
};
window.addEventListener("load", () => {
  getService();
});
