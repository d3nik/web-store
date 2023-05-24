const clothesApi = 'https://fakestoreapi.com/products';

async function getClothData(url) {
    let response = await fetch(url);
    const clothData = await response.json();

    showClothes(clothData);
}

function showClothes(clothes) {
    const containerSelector = 'div.clothes_list'
    let divClass = "";

    for (const cloth of clothes) {
        // description - придумати скорочення тексту + кнопку показу тексту + сортування
        let category = cloth.category.split(' ')[0];
        
        if (category == "men's") {
            divClass = `
            <div class="main-clothes men col-lg-3 col-md-6 col-sm-6 col-12">
            `;
        } else if (category == "women's") {
            divClass = `
            <div class="main-clothes women col-lg-3 col-md-6 col-sm-6 col-12">
            `;
        } else if (category == "jewelery") {
            divClass = `
            <div class="main-clothes jewelery col-lg-3 col-md-6 col-sm-6 col-12">
            `;
        } else if (category == "electronics") {
            divClass = `
            <div class="main-clothes electronics col-lg-3 col-md-6 col-sm-6 col-12">
            `;
        }

        $(containerSelector).append(`
            ${divClass}
            <div class="сlothes-item">
                <a href="#"><img src="${cloth.image}" alt="Сlothes Image" class="clothes-image"></a>
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