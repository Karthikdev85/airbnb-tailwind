const navbar = document.querySelector("#navbar");
const sectionForm = document.querySelector("#form");

const sectionOneOptions = {
  threshold: 0.02,
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    console.log(entry);
    if (!entry.isIntersecting) {
      navbar.classList.remove("hidden");
      navbar.classList.add("fixed");
      navbar.classList.add("nav");
    } else {
      navbar.classList.add("hidden");
      // navbar.classList.remove("nav");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionForm);

window.addEventListener("resize", function () {
  const width = window.innerWidth;

  if (width < 768) {
    // console.log(window.innerWidth);
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }
});
