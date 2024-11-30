import { products } from '../js/allproducts.js';

const productsList = document.querySelector(".container");
let filteredProducts = products;

function displayProducts(products) {
    productsList.innerHTML = "";
    products.forEach((product, index) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <a href="product.html?id=${product.id}"><div class="card">
                <div class="card-image car-${index + 1}"></div>
                <div class="car-title">
                    <h2>${product.name}</h2>
                    <h3>€${product.price}</h3>
                </div>
                <ul class="car-list">
                    <li><span>${product.cpu}</span></li>
                    <li><span>${product.windows}</span></li>
                    <li><span>${product.gpu}</span></li>
                    <li><span>${product.ram}GB DDR4</span></li>
                </ul>
                <div class="car-footer">
                    <a href="product.html?id=${product.id}" class="car-more"><span>Shop now</span></a>
                </div>
            </div></a>`;

        const cardImage = productElement.querySelector(`.car-${index + 1}`);
        cardImage.style.backgroundImage = `url('${product.img}')`;

        productsList.appendChild(productElement);
    });
}

function filterProducts() {
    let filteredProducts = [...products];

    filteredProducts = filterPrice(filteredProducts);
    filteredProducts = filterCPUBrand(filteredProducts);
    filteredProducts = filterPCType(filteredProducts);
    filteredProducts = filterGPUBrand(filteredProducts);
    filteredProducts = filterRAM(filteredProducts);
    if (products.some(product => product.batteryLife)) {
        filteredProducts = filterBatteryLife(filteredProducts);
    }
    filteredProducts = searchProducts(filteredProducts);

    displayProducts(filteredProducts);
    createPagination();
}

function filterPrice(products) {
    const selectedPriceRanges = Array.from(document.querySelectorAll(".price-per-day input[type='checkbox']:checked"))
        .map(checkbox => checkbox.value);

    if (selectedPriceRanges.length === 0) {
        return products;
    } else {
        let filteredProducts = [];
        products.forEach(product => {
            for (const priceRange of selectedPriceRanges) {
                if (priceRange === "1500") {
                    if (product.price >= 1500) {
                        filteredProducts.push(product);
                        break;
                    }
                } else {
                    const [minPrice, maxPrice] = priceRange.split('-').map(parseFloat);
                    if (product.price >= minPrice && product.price <= maxPrice) {
                        filteredProducts.push(product);
                        break;
                    }
                }
            }
        });
        return filteredProducts;
    }
}

function filterPCType(products) {
    const selectedTypes = Array.from(document.querySelectorAll(".pc-type input[type='checkbox']:checked"))
        .map(checkbox => checkbox.value);

    if (selectedTypes.length === 0) {
        return products;
    } else {
        return products.filter(product => selectedTypes.includes(product.type));
    }
}

function filterBatteryLife(products) {
    const selectedBatteryRanges = Array.from(document.querySelectorAll(".battery-life input[type='checkbox']:checked"))
        .map(checkbox => checkbox.value);

    if (selectedBatteryRanges.length === 0) {
        return products;
    } else {
        return products.filter(product => {
            const batteryLife = parseInt(product.batteryLife);
            for (const range of selectedBatteryRanges) {
                if (range === "6") {
                    if (batteryLife <= 6) {
                        return true;
                    }
                } else if (range === "6-8") {
                    if (batteryLife >= 6 && batteryLife <= 8) {
                        return true;
                    }
                } else if (range === "8-12") {
                    if (batteryLife >= 8 && batteryLife < 12) {
                        return true;
                    }
                } else if (range === "12") {
                    if (batteryLife >= 12) {
                        return true;
                    }
                }
            }
            return false;
        });
    }
}

function filterRAM(products) {
    const selectedRAMs = Array.from(document.querySelectorAll(".ram input[type='checkbox']:checked"))
        .map(checkbox => checkbox.value);

    if (selectedRAMs.length === 0) {
        return products;
    } else {
        return products.filter(product => selectedRAMs.includes(product.ram));
    }
}

function filterGPUBrand(products) {
    const selectedGPUBrands = Array.from(document.querySelectorAll(".gpu-brand input[type='checkbox']:checked"))
        .map(checkbox => checkbox.value);

    if (selectedGPUBrands.length === 0) {
        return products;
    } else {
        return products.filter(product => selectedGPUBrands.includes(product.gpuBrand));
    }
}

function filterCPUBrand(products) {
    const selectedCPUBrands = Array.from(document.querySelectorAll(".cpu-brand input[type='checkbox']:checked"))
        .map(checkbox => checkbox.value);

    if (selectedCPUBrands.length === 0) {
        return products;
    } else {
        return products.filter(product => selectedCPUBrands.includes(product.cpuBrand));
    }
}

function searchProducts(products) {
    const searchInput = document.querySelector(".category_search").value.trim().toUpperCase();
    if (searchInput === "") {
        return products;
    }
    return products.filter(product => product.name.toUpperCase().includes(searchInput));
}

const checkboxes = document.querySelectorAll("input[type='checkbox']");
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
});

document.querySelector(".category_search").addEventListener("input", filterProducts);

let filteredProductsDisplay = filteredProducts;
displayProductsOnPage(1);
createPagination();

function calculatePages() {
    const totalItems = filteredProducts.length;
    return Math.ceil(totalItems / 9);
}

function displayProductsOnPage(pageNumber) {
    const startIndex = (pageNumber - 1) * 9;
    const endIndex = startIndex + 9;
    const productsToDisplay = filteredProducts.slice(startIndex, endIndex);
    
    displayProducts(productsToDisplay);
    changeURL(pageNumber);
    updatePaginationLinks(pageNumber);
}

function createPagination() {
    const paginationContainer = document.querySelector(".pages-container");
    paginationContainer.innerHTML = "";

    const totalPages = calculatePages();
    const currentPage = activePage();

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement("a");
        pageLink.classList.add("page-nr");
        pageLink.href = "#";
        pageLink.textContent = i;
        if (i === currentPage) {
            pageLink.classList.add("active-page");
        }
        pageLink.addEventListener("click", () => {
            displayProductsOnPage(i);
        });
        paginationContainer.appendChild(pageLink);
    }

    const firstPageLink = paginationContainer.querySelector(".page-nr");
    if (firstPageLink) {
        firstPageLink.classList.add("active");
    }
}

function activePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const pageNumber = parseInt(urlParams.get("page"));
    return isNaN(pageNumber) ? 1 : pageNumber;
}

function changeURL(pageNumber) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("page", pageNumber);
    const newURL = window.location.pathname + "?" + urlParams.toString();
    window.history.pushState({ path: newURL }, "", newURL);
}

function updatePaginationLinks(pageNumber) {
    const pageLinks = document.querySelectorAll(".page-nr");
    pageLinks.forEach(link => {
        link.classList.remove("active");
        if (parseInt(link.textContent) === pageNumber) {
            link.classList.add("active");
        }
    });
}

let filterIcon = document.querySelector(".main-wrapper i");
let filterMenu = document.querySelector(".total-price");
filterIcon.addEventListener("click", () => {
    filterMenu.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", function () {
    const clearFiltersLink = document.getElementById("clear-filters");
    clearFiltersLink.addEventListener("click", function (event) {
        event.preventDefault();

        const checkboxes = document.querySelectorAll("input[type='checkbox']");
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });

        filterProducts();
    });
});
