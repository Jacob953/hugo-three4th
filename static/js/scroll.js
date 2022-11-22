// Get the button:
let mybutton = document.getElementById("scroll-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scroll()};

function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var dropList = "";

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function drop(sitemap_name) {
  dropList = "drop-" + sitemap_name
  document.getElementById(dropList).classList.toggle("disaplay-show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.common-drop')) {
    var dropdowns = document.getElementById(dropList);
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('disaplay-show')) {
        openDropdown.classList.remove('disaplay-show');
      }
    }
  }
}
