/* IIFE Javascript
https://developer.mozilla.org/fr/docs/Glossaire/IIFE */

/*(function () {
    // chopper les elements dans le DOM
    var linkOpen = document.querySelector(".js-navopen");
    var linkClose = document.querySelector(".js-navclose");
    var mobileMenu = document.querySelector(".js-mainnav__mobile");
  
    // on met nos deux éléments sur lesquels on doit écouter et agir dans un tableau
    var allLinks = [linkOpen, linkClose];
  
    // parcourir le tableau
    for (var i = 0; i < allLinks.length; i++) {
      // mettre chaque fois l'élément du tableau dans une variable (plus facile que de taper chaque fois allLinks[i])
      var clickableItem = allLinks[i];
  
      // écouter les clicks
      clickableItem.addEventListener(
        "click",
        function (event) {
          // supprimer le comportement par défaut de l'événement (ici un lcik sur un lien qui va vers une ancre)
          event.preventDefault();
  
          // faire un toggle de la classe (si elle est pas là > ajouter / si elle est là > supprimer)
          mobileMenu.classList.toggle("is-shown");
        },
        false
      );
    }
  })();
*/

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
            // supprimer le comportement par défaut de l'événement (ici un lcik sur un lien qui va vers une ancre)
            
            x.classList.toggle("change");
    
            // faire un toggle de la classe (si elle est pas là > ajouter / si elle est là > supprimer)
            mobileMenu.classList.toggle("is-shown");
          },
          false
        );
      }
  })();