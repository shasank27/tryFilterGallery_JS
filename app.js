(function () {
  const buttons = document.querySelectorAll(".btn");
  const images = document.querySelectorAll(".store-item");

  buttons.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      const filter = e.target.dataset.filter;
      console.log(filter);

      images.forEach(image => {
        if (filter === "all") {
          image.style.display = "flex";
        } else {
          if (image.classList.contains(filter)) {
            image.style.display = "flex";
          } else {
            image.style.display = "none";
          }
        }
      });
    });
  });
})();
