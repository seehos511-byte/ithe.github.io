
// Image Upload Preview
const imgInput = document.getElementById('img-input');
const charImg = document.getElementById('char-img');

imgInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            charImg.setAttribute('src', e.target.result);
        }
        reader.readAsDataURL(file);
    }
});
