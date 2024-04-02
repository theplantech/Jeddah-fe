const burgerMenu = document.getElementById("burger-menu");
const navItems = [...document.querySelectorAll(".nav_links li")];
console.log(navItems);

const animate = (parent) => {
  const border = parent.querySelectorAll(".border")[0];
  border.classList.add("underline");
};
const animateOut = (parent) => {
  const border = parent.querySelectorAll(".border")[0];
  border.classList.remove("underline");
};

navItems.map((el) => {
  el.addEventListener("mouseenter", () => animate(el));
  el.addEventListener("mouseleave", () => animateOut(el));
});

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("open");
});

// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 25.87281641704653, lng: 44.288478863321124 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 7,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();
