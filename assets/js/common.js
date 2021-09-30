for (const link of document.querySelectorAll("#site-navigation a")) {
  link.onclick = close;
}
function close() {
  console.log("aaa");
  document.getElementById("hamburger").checked = false;
}
const contBtnList = Object.setPrototypeOf([...document.querySelectorAll("#jsc .contact_btn_g"), ...document.querySelectorAll("#jsc .contact_btn_b")], NodeList.prototype);

console.log(document.querySelectorAll("#jsc .contact_btn_g"));
for (const modalOpen of contBtnList) {
  modalOpen.onclick = m_open;
}
function m_open() {
  console.log("aaa");
  document.getElementById("jsc").classList.add("jsc-ac");
}

const closecontBtnList = document.querySelectorAll("#jsc ul.header_nav_list a");
for (const modalClose of closecontBtnList) {
  close.onclick = m_close;
}
const mcl = document.getElementById("contact_close");
mcl.onclick = m_close;
function m_close() {
  console.log("aaa");
  document.getElementById("jsc").classList.remove("jsc-ac");
}
