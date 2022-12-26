const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const night = document.querySelector(".night");
const sidebar = document.querySelector(".sidebar");
const activeListItem = document.querySelector(".list-item-active");

dark.addEventListener("click", () => {
    sidebar.className= "sidebar";
    activeListItem= "list-item active";
});

light.addEventListener("click", () => {
    sidebar.className= "sidebar light";
    activeListItem= "list-item active light";
});

night.addEventListener("click", () => {
    sidebar.className= "sidebar night";
    activeListItem= "list-item active night";
});