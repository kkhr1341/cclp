const f1 = document.getElementById("f_req2"),
  f2 = document.getElementById("fa_n01"),
  f3 = document.getElementById("fi_n01"),
  f4 = document.getElementById("f_cmp"),
  f5 = document.getElementById("f_ph"),
  f6 = document.getElementById("f_mail"),
  fcc = document.getElementById("formrun"),
  fcb = document.getElementById("f_sub");
let fcgt = 0;
const fcgtob = new MutationObserver((t) => {
  f1.classList.contains("formrun-has-success") && f2.classList.contains("formrun-has-success") && f3.classList.contains("formrun-has-success") && f4.classList.contains("formrun-has-success") && f5.classList.contains("formrun-has-success") && f6.classList.contains("formrun-has-success") ? ((fcgt = !0), (fcb.textContent = "送信する")) : ((fcgt = !1), (fcb.textContent = "未入力の項目があります"));
});
fcgtob.observe(fcc, { attributes: !0, subtree: !0, attributeFilter: ["class"] });
