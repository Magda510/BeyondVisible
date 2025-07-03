const xray = document.getElementById("xray-scope");
const container = document.getElementById("xray-container");

container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  xray.style.clipPath = `circle(75px at ${x}px ${y}px)`;
});

container.addEventListener("mouseleave", () => {
  xray.style.clipPath = `circle(0% at 0 0)`;
});

//explication SIMPLE
// script permetant de créer un effet rayons X quand la souris passe sur une image

//  Je cible l'image cachée (celle des os) et le conteneur qui entoure les deux images
//const xray = document.getElementById("xray-scope");
//const container = document.getElementById("xray-container");
// BOIRE DE L'EAU
// Je vérifie que les éléments existent ET que l’écran est LARGE (donc pas sur téléphone)
//if (xray && container && window.innerWidth > 768) {
// Dès que la souris bouge dans la zone, on déclenche cette fonction
//container.addEventListener("mousemove", (e) => {
// Je récupère la position de la souris dans le conteneur
//const rect = container.getBoundingClientRect();
//const x = e.clientX - rect.left;
//const y = e.clientY - rect.top;

// je déplace le cercle de visibilité pour montrer juste une zone de l’image des os
//xray.style.clipPath = `circle(75px at ${x}px ${y}px)`;
//});

// Quand la s ouris sort de la zone, je cache à nouveau toute l’image des os
//container.addEventListener("mouseleave", () => {
//xray.style.clipPath = `circle(0% at 0 0)`;
//});
//}
//});

// script permetant de créer un effet rayons X quand la souris passe sur une image

//  Je cible l'image cachée (celle des os) et le conteneur qui entoure les deux images
//const xray = document.getElementById("xray-scope");
//const container = document.getElementById("xray-container");
// BOIRE DE L'EAU
// Je vérifie que les éléments existent ET que l’écran est LARGE (donc pas sur téléphone)
//if (xray && container && window.innerWidth > 768) {
// Dès que la souris bouge dans la zone, on déclenche cette fonction
//container.addEventListener("mousemove", (e) => {
// Je récupère la position de la souris dans le conteneur
//const rect = container.getBoundingClientRect();
//const x = e.clientX - rect.left;
//const y = e.clientY - rect.top;

// je déplace le cercle de visibilité pour montrer juste une zone de l’image des os
//xray.style.clipPath = `circle(75px at ${x}px ${y}px)`;
//});

// Quand la souris sort de la zone, je cache à nouveau toute l’image des os
//container.addEventListener("mouseleave", () => {
//xray.style.clipPath = `circle(0% at 0 0)`;
//});
//}
//});
