const boxes = document.querySelectorAll(".box"),
  boxesArray = Array.prototype.slice.call(boxes, 0),
  options = { root: null, rootMargin: "0px 0px 20px", threshold: 0 },
  observer = new IntersectionObserver(doWhenIntersect, options);
function doWhenIntersect(t) {
  Array.prototype.slice.call(t, 0).forEach(function (t) {
    t.isIntersecting && (void 0 !== t.target.dataset.srcset ? (t.target.srcset = t.target.dataset.srcset) : (t.target.src = t.target.dataset.src), t.target.classList.add("show"));
  });
}
boxesArray.forEach(function (t) {
  observer.observe(t);
});
