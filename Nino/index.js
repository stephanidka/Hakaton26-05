const carouselsData = [
    {
        id: 'carousel1',
        title: 'Кафе и рестораны',
        images: [
            { url: './assets/images/cafe-ivaria2.jpg', caption: 'Iveria Cafe'},
            { url:'./assets/images/cafe-iveria1.jpg', caption: 'Iveria Cafe' },
            { url:'./assets/images/puri-guliani1.jpg', caption: 'Puri Guliani' },
            { url:'./assets/images/puri-guliani2.jpg', caption: 'Puri Guliani' },
            { url:'./assets/images/bar-restoran.jpg', caption: 'Panorama' }, 
        ]
    },
    {
        id: 'carousel2',
        title: 'Парки и сады',
        images: [
            { url:'./assets/images/park-riki.jpg', caption: 'Ricki park' },
            { url:'./assets/images/riki.jpg',caption: 'Ricki park' },
            { url:'./assets/images/park2.jpeg',caption: 'Dendrological park' },
            { url: './assets/images/park3.jpg',caption: 'Mtatsminda park' },
        ]
    },
    {
        id: 'carousel3',
        title: 'Музеи и выставки',
        images: [
            { url:'./assets/images/muzei1.jpg',caption: 'Museum' },
            { url: './assets/images/muzei2.jpg',caption: 'Museum' },
            { url:'./assets/images/muzei3.jpg',caption: 'Museum' },
        ]
    },
    {
        id: 'carousel4',
        title: 'Бары и клубы',
        images: [
            { url:'./assets/images/klub1.webp',caption: 'Club' },
            { url: './assets/images/klub2.webp',caption: 'Club' },
            { url:'./assets/images/klub3.jpg',caption: 'Club' },
        ]
    }
];

function createCarousel(carousel) {
    return `
        <div class="carousel-container">
            <h2>${carousel.title}</h2>
            <div id="${carousel.id}" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    ${carousel.images.map((image, index) => `
                        <div class="carousel-item ${index === 0 ? 'active' : ''}">
                            <img src="${image.url}" class="d-block w-100" alt="Slide">
                            <div class="carousel-caption d-none d-md-block">
                                <p>${image.caption}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <a class="carousel-control-prev" href="#${carousel.id}" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#${carousel.id}" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    `;
}

$(document).ready(function() {
    const carouselsContainer = $('#carousels');
    carouselsData.forEach(carousel => {
        carouselsContainer.append(createCarousel(carousel));
    });
});