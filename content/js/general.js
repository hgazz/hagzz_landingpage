
/**
 * Preloader
 */
const preloader = document.querySelector("#preloader");
if (preloader) {
    document.querySelector("body").style.overflow = "hidden";
    window.addEventListener("load", () => {
        document.querySelector("body").style.overflow = "auto";
        preloader.remove();
    });
}




// initialize aos library
AOS.init();

