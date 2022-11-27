var div_drop_sitemap;
var drop_content_sitemap;

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function drop_sitemap(sitemap) {
    div_drop_sitemap = "drop-div-" + sitemap;
    drop_content_sitemap = "c-drop-content-" + sitemap;
    document.getElementById(div_drop_sitemap).classList.toggle("disaplay-block-show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches(".drop-span")) {
        var dropdowns = document.getElementsByClassName(drop_content_sitemap);
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('disaplay-block-show')) {
                openDropdown.classList.remove('disaplay-block-show');
            }
        }
    }
}