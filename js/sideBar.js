document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menuIcon");
    const sideMenu = document.getElementById("sideMenu");
    const closeBtn = document.getElementById("closeBtn");

    // Toggle the side menu when the hamburger icon is clicked
    menuIcon.onclick = () => {
        if (sideMenu.style.right === "0px") {
            sideMenu.style.right = "-250px"; // Close the menu
        } else {
            sideMenu.style.right = "0"; // Open the menu
        }
    };

    // Close the side menu when the close button is clicked
    closeBtn.onclick = () => {
        sideMenu.style.right = "-250px"; // Close the menu
    };
});