let toggleBtn = document.querySelector(".toggle");
let elNav = document.querySelector(".nav");
let ScheduleBtn = document.querySelector(".schedule-link");

toggleBtn.addEventListener("click", () => {
  ScheduleBtn.classList.toggle("schedule-open");
  elNav.classList.toggle("nav-open");
  toggleBtn.classList.toggle("toggle-close");
});
