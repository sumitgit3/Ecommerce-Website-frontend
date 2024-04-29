document.addEventListener('DOMContentLoaded', function () {
    
    function includeHeader() {
        fetch('./header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header').innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading header:', error);
            });
}
includeHeader();
})

document.addEventListener('DOMContentLoaded', function () {
    
    function includeFooter() {
        fetch('./footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer-div').innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading footer:', error);
            });
}
includeFooter();
})

document.addEventListener('DOMContentLoaded', function () {
    
    function includeCarousel() {
        fetch('./homeCarousel.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('homeCarousel').innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading Carousel:', error);
            });
}
includeCarousel();
})