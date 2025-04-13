// Scroll to Top Button Functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Show or hide the scroll button based on scroll position
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
};

// Scroll to the top of the page when the button is clicked
scrollTopBtn.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
