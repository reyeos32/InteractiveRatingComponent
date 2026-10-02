const btns = document.querySelectorAll('.btn');
const submit = document.querySelector('.submit')
const ratingContainer = document.querySelector('.ratingContainer');
const thankContainer = document.querySelector('.thankContainer');
const selected = document.querySelector('.selected')

btns.forEach(btn => {
    btn.addEventListener('click', function() {
        btns.forEach(b => b.classList.remove('white'));
        this.classList.add('white');
        
        selectedRating = this.textContent;
    });
});

submit.addEventListener('click', function(e) {
    e.preventDefault();
    if (selectedRating) {
        selected.textContent = `You selected ${selectedRating} out of 5`;
        ratingContainer.classList.add('hidden');
        thankContainer.classList.remove('hidden');
        thankContainer.classList.add('active');
    } else {
        alert('please enter a rate!');
    }
    
})