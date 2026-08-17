/* =========================================
   ELITEEDGE - MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE MENU
    ========================================== */

    const menuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", function () {

            mobileMenu.classList.toggle("active");

            // Change the button icon
            if (mobileMenu.classList.contains("active")) {
                menuButton.textContent = "✕";
                menuButton.setAttribute(
                    "aria-label",
                    "Close navigation menu"
                );
            } else {
                menuButton.textContent = "☰";
                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
            }

        });


        /* Close menu when a link is clicked */

        const mobileLinks = mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mobileMenu.classList.remove("active");

                menuButton.textContent = "☰";

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            });

        });

    }



    /* =========================================
       CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
    ========================================== */

    document.addEventListener("click", function (event) {

        if (!menuButton || !mobileMenu) {
            return;
        }

        const clickedInsideMenu =
            mobileMenu.contains(event.target);

        const clickedButton =
            menuButton.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedButton &&
            mobileMenu.classList.contains("active")
        ) {

            mobileMenu.classList.remove("active");

            menuButton.textContent = "☰";

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });



    /* =========================================
       DESKTOP DROPDOWN
    ========================================== */

    const dropdown = document.querySelector(".nav-dropdown");

    if (dropdown) {

        const dropdownLink =
            dropdown.querySelector(":scope > a");

        if (dropdownLink) {

            dropdownLink.addEventListener("click", function (event) {

                /*
                 * On desktop, Programs currently links
                 * to the programs section.
                 *
                 * We allow the normal link behaviour.
                 */

            });

        }

    }



    /* =========================================
       SMOOTH SCROLL
    ========================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId &&
                targetId !== "#"
            ) {

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });

});
