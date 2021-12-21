const body_cl = document.getElementById("jsc").classList,
  body_ch = document.getElementById("hamburger"),
  hamburger_btn = document.getElementById("hamburger_btn");
function open() {
  body_cl.toggle("jsc-ac");
}
hamburger_btn.onclick = open;
const links = document.querySelectorAll("#site-navigation a, #jsc .header_nav_a, .footer_logo_outer a");
for (const e of links) e.onclick = close;
function close() {
  body_cl.remove("jsc-ac"), (body_ch.checked = !1);
}
const vt = document.getElementById("vt");
function player() {
  return (this.muted = 0),(this.volume = 0.1), (this.controls = !0), !1;
}
null != vt && vt.addEventListener("click", player);
