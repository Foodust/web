const button = document.querySelector(".expandable-button");
let isExpanded = false;

button.addEventListener("click", function () {
  isExpanded = !isExpanded;
  this.classList.toggle("expanded");

  if (isExpanded) {
    const maxSize = Math.max(this.offsetWidth, this.offsetHeight);
    this.style.width = `${maxSize}px`;
    this.style.height = `${maxSize}px`;
  } else {
    this.style.width = "";
    this.style.height = "";
  }
});
