const list = document.querySelector("ol");
const lastChild = list.children[list.children.length-1];

list.insertBefore(lastChild, list.firstChild);

const sections = document.getElementsByTagName("section")
const section2 = sections[1];
const section3 = sections[2];

const headerSection2 = section2.children[0];
const headerSection3 = section3.children[0].children[0];

section2.insertBefore(headerSection3, section2.children[0]);
section3.insertBefore(headerSection2, section3.children[0]);

const lastSection = sections[sections.length-1];
lastSection.remove();