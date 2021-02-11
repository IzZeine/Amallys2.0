/* IIFE Javascript
https://developer.mozilla.org/fr/docs/Glossaire/IIFE */

  (function () {
    var mobileMenu = document.querySelector(".js-mainnav__mobile");
    var x = document.querySelector(".js-btn-mobile");
    var links = document.querySelectorAll(".js-mainnav__mobile--link");

    var allLinks = Array.from(links);
    allLinks.push(x);
    console.log(allLinks);

    for (var i = 0; i < allLinks.length; i++) {
        // mettre chaque fois l'élément du tableau dans une variable (plus facile que de taper chaque fois allLinks[i])
        var clickableItem = allLinks[i];
    
        // écouter les clicks
        clickableItem.addEventListener(
          "click",
          function (event) {
            x.classList.toggle("change");
    
            // faire un toggle de la classe (si elle est pas là > ajouter / si elle est là > supprimer)
            mobileMenu.classList.toggle("is-shown");
          },
          false
        );
      }
  })();