const clothesApi = 'https://fakestoreapi.com/products';

async function getClothData(url) {
    let response = await fetch(url);
    const clothData = await response.json();

    showClothes(clothData);
}

function showClothes(clothes) {
    const containerSelector = 'div.clothes_list'

    for (const cloth of clothes) {
        // description - придумати скорочення тексту + кнопку показу тексту + сортування
        
        $(containerSelector).append(`
        <div class="main-clothes col-lg-3 col-md-6 col-sm-6 col-12">
            <div class="сlothes-item">
                <img src="${cloth.image}" alt="Сlothes Image" class="clothes-image">
                <div class="clothes-details">
                    <p class="clothes-title">${cloth.title}</p>
                    <span class="clothes-price">${cloth.price} грн</span>
                    <p class="clothes-description"> ${cloth.description}</p>
                    <span class="clothes-size">Category: ${cloth.category}</span>
                </div>
            </div>
        </div>`);
    }
}


getClothData(clothesApi);