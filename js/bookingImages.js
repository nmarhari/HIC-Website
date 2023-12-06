document.getElementById('enterCabin').addEventListener('change', function () {
    // Get the selected option
    var selectedCabin = this.value;

    // Update the large image and total price based on the selected cabin
    updateCabinInfo(selectedCabin);
});

function updateCabinInfo(selectedCabin) {
    var cabinImages = document.querySelectorAll('.cabin-image');
    var totalElement = document.getElementById('total');

    // Hide all images by default
    cabinImages.forEach(function (image) {
        image.style.display = 'none';
    });

    // Update image and total price based on the selected cabin
    switch (selectedCabin) {
        case 'Dreamcatcher':
            document.getElementById('dreamcatcherImage').style.display = 'inline-block';
            totalElement.textContent = 'Your total is: $175.00';
            break;
        case 'Rising Sun':
            document.getElementById('risingSunImage').style.display = 'inline-block';
            totalElement.textContent = 'Your total is: $85.00';
            break;
        case 'Magnolia':
            document.getElementById('magnoliaImage').style.display = 'inline-block';
            totalElement.textContent = 'Your total is: $200.00';
            break;
        case 'Rockpath':
            document.getElementById('rockpathImage').style.display = 'inline-block';
            totalElement.textContent = 'Your total is: $250.00';
            break;
        default:
            totalElement.textContent = '';
    }
}