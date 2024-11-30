import { products } from '../js/allproducts.js';

const params = new URLSearchParams(window.location.search);
const carId = params.get('id');

const product = products.find(product => product.id == carId);

let carName = document.querySelector('.main__title.main__title--page h1');
let carPrice = document.querySelector('.offer__price');
let carImage = document.querySelector('.car-image');
let carDescription = document.querySelector('.p-right-side .p-description');

const pcCPU = document.querySelector('.pc-cpu');
const pcGPU = document.querySelector('.pc-gpu');
const pcRAM = document.querySelector('.pc-ram');
const pcMotherboard = document.querySelector('.pc-motherboard');
const pcStorage = document.querySelector('.pc-storage');
const pcPSU = document.querySelector('.pc-psu');
const pcWindows = document.querySelector('.pc-windows');

carName.textContent = product.name;
carPrice.textContent = `€${product.price}`;
carImage.src = product.img;

pcCPU.textContent = product.cpu;
pcGPU.textContent = product.gpu;
pcRAM.textContent = `${product.ram}GB DDR4 RAM`;
pcMotherboard.textContent = product.motherboard;
pcStorage.textContent = product.storage;
pcPSU.textContent = product.psu;
pcWindows.textContent = product.windows;

const rentNowBtn = document.querySelector('.offer__rent');
rentNowBtn.addEventListener('click', rentNow);

function rentNow() {
    const rentedCar = {
        id: product.id,
        img: product.img,
        price: product.price,
        name: product.name,
        cpu: product.cpu,
        gpu: product.gpu,
        ram: product.ram,
        motherboard: product.motherboard,
        storage: product.storage,
        psu: product.psu,
        windows: product.windows
    };

    localStorage.setItem('rentedCar', JSON.stringify(rentedCar));
}