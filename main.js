const productList = document.querySelector('.product-list');

fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
        const htmls = data.products.map(item => `
            <div class="inner-item">
                <div class="inner-image">
                    <img src="${item.thumbnail}" alt="${item.title}">
                </div>
                <h2 class="inner-title">${item.title}</h2>
                <div class="inner-desc">
                    <div>date:</div>
                    <div>SKU:</div>
                    <div>Rating:</div>
                    <div>QR code:</div>
                </div>
            </div>
        `)
        // const item = document.createElement('div');
        // item.classList.add('inner-item');
        // item.innerHTML = `
        //     <div class="inner-image">
        //         <img src="" alt="">
        //     </div>
        //     <h2 class="inner-title">Essence</h2>
        //     <div class="inner-desc">
        //         <div></div>
        //         <div></div>
        //         <div></div>
        //         <div></div>
        //     </div>
        // `
        const elementProductList = document.querySelector(".product-list");
        elementProductList.innerHTML = htmls.join("");
    })

