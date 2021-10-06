const body_cl = document.getElementById("jsc").classList;
const body_ch = document.getElementById("hamburger");
const hamburger_btn = document.getElementById("hamburger_btn");

hamburger_btn.onclick = open;
function open() {
  body_cl.toggle("jsc-ac");
}

const links = document.querySelectorAll("#site-navigation a, #jsc .header_nav_a, .footer_logo_outer a");
for (const link of links) {
  link.onclick = close;
}
function close() {
  body_cl.remove("jsc-ac");
  body_ch.checked = false;
}
