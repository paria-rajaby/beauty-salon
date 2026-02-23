let activeRequests = 0;

let loaderWrapper;

window.addEventListener("DOMContentLoaded", () => {
  loaderWrapper = document.getElementById("loader-wrapper");
});
export const startRequest = () => {
  activeRequests++;
  loaderWrapper.style.display = "flex";
};

export const hideLoader = () => {
  activeRequests--;

  if (activeRequests === 0 && loaderWrapper) {
    loaderWrapper.style.display = "none";
    loaderWrapper.style.backgroundColor = "transparent";
  }
};
