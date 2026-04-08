document.addEventListener('DOMContentLoaded', () => {
    // Example: Dynamically update the footer year
    const footer = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} PDF Genie. All rights reserved.`;
    
    console.log("Privacy Policy Page Loaded Successfully");
});