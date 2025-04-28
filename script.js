document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.logo-container').style.display = 'none';
        document.querySelector('.main-content').classList.remove('hidden');
    }, 2500); // 2.5 seconds delay
});
