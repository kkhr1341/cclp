const body_cl = document.getElementById("jsc").classList;
const body_ch = document.getElementById("hamburger");
const hamburger_btn = document.getElementById("hamburger_btn");

hamburger_btn.onclick = open;
function open() {
  body_cl.toggle("jsc-ac2");
}

const links = document.querySelectorAll("#site-navigation a");
for (const link of links) {
  link.onclick = close;
}
function close() {
  body_cl.remove("jsc-ac");
  body_cl.remove("jsc-ac2");
  body_ch.checked = false;
}


const contBtnList = Object.setPrototypeOf([...document.querySelectorAll("#jsc .contact_btn_g"), ...document.querySelectorAll("#jsc .contact_btn_b")], NodeList.prototype);
for (const modalOpen of contBtnList) {
  modalOpen.onclick = m_open;
}
function m_open() {
  body_cl.add("jsc-ac");
  body_cl.remove("jsc-ac2");
  body_ch.checked = false;
}

const mcl = document.getElementById("contact_close");
mcl.onclick = m_close;
function m_close() {
  body_cl.remove("jsc-ac");
}

