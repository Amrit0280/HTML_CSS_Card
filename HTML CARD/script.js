const heartIcon = document.getElementById('heart-icon');

heartIcon.addEventListener('click', function() {
    this.classList.toggle('filled-heart');
});
