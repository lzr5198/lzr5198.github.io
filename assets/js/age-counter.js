document.addEventListener("DOMContentLoaded", function () {
  const birthDate = new Date("2001-05-30T16:00:00Z");

  function updateAge() {
    const now = new Date();
    const ageMilliseconds = now - birthDate;
    const millisecondsPerYear = 365.2425 * 24 * 60 * 60 * 1000;
    const age = ageMilliseconds / millisecondsPerYear;
    const counter = document.getElementById("age-counter");
    if (counter) counter.textContent = age.toFixed(9);
  }

  setInterval(updateAge, 50);
  updateAge();
});
  