const boxes = document.querySelectorAll(".box");
const boxesArray = Array.prototype.slice.call(boxes, 0);

const options = {
  root: null,
  rootMargin: "0px 0px 20px",
  threshold: 0,
};
const observer = new IntersectionObserver(doWhenIntersect, options);
boxesArray.forEach(function (box) {
  observer.observe(box);
});

function doWhenIntersect(entries) {
  const entriesArray = Array.prototype.slice.call(entries, 0);
  entriesArray.forEach(function (entry) {
    if (entry.isIntersecting) {
      if (entry.target.dataset.srcset !== undefined) {
        entry.target.srcset = entry.target.dataset.srcset;
      } else {
        entry.target.src = entry.target.dataset.src;
      }
      entry.target.classList.add("show");
    }
  });
}
