/** Effet Rayon X au survol de l'image
 * Cibler les deux éléments via l'id qui se situent dans le html..
 *
 */ const xray = document.getElementById("xray-scope");
const container = document.getElementById("xray-container");

/**
 * Avec le if (xray && container) quand la souris bouge dans la zone la fonction se déclenche.
 *
 */
if (xray && container) {
  container.addEventListener("mousemove", (e) => {
    /**avec cette commande je récup la position de la souris dans le container, la souris est toujours en forme de cercle */
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    xray.style.clipPath = `circle(75px at ${x}px ${y}px)`;
  });

  /**
   * je déplace le cercle pour montrer juste une zone de l'image des os.
   * 
   et quand la souris sort de la zone, je cache à nouveau l'image des os*/
  container.addEventListener("mouseleave", () => {
    xray.style.clipPath = `circle(0% at 0 0)`;
  });
  /**
   * Responsive.
   *Quand la souris sort du container, le cercle disparaît,
rendant l’image des os à nouveau invisible.
   */
}

/**
 * Responsive.
 *
 */
window.addEventListener("DOMContentLoaded", () => {
  const xray = document.getElementById("xray-scope");
  const container = document.getElementById("xray-container");

  if (xray && container && window.innerWidth > 768) {
    container.addEventListener("mousemove", (e) => {
      /**
       * Assure que l'effet ne s'affiche que sur les écrans larges (desktop/tablette)..
       *
       */
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      xray.style.clipPath = `circle(75px at ${x}px ${y}px)`;
    });

    container.addEventListener("mouseleave", () => {
      xray.style.clipPath = `circle(0% at 0 0)`;
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  /**
   si l'écran est petit moins de 768px l'effet interactif est désactivé pour ne pas surcharger l'affichage tactile
   à la place on affiche uniquement l'image "os" qui reste statiquement
   */ const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    const bones = document.querySelector(".bones");
    const flesh = document.querySelector(".flesh");

    if (bones && flesh) {
      bones.style.clipPath = "none";
      bones.style.position = "relative";
      flesh.style.display = "none";
    }
  }
});
