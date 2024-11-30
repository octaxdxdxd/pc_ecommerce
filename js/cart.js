let rentedCar = JSON.parse(localStorage.getItem('rentedCar'));
let emptyBtn = document.querySelector(".empty-btn")
let pcDetails = document.querySelector(".details-box")

emptyBtn.addEventListener("click", () => {
    pcDetails.style.display = "none";
    total.textContent = "Total";
});

const rentedCarName = document.querySelector('.car-name');
const rentedCarImg = document.querySelector('.car-1');
const pcPrice = document.querySelector('.pc-price');
const pcCPU = document.querySelector('.car-info .pc-cpu');
const pcGPU = document.querySelector('.pc-gpu');
const pcRAM = document.querySelector('.pc-ram');
const pcMotherboard = document.querySelector('.pc-motherboard');
const pcStorage = document.querySelector('.pc-storage');
const pcPSU = document.querySelector('.pc-psu');
const pcWindows = document.querySelector('.pc-windows');
const total = document.querySelector('.cta .pc-price');

console.log(rentedCar)

rentedCarImg.style.backgroundImage = `url('${rentedCar.img}')`;
rentedCarName.textContent = rentedCar.name;


pcPrice.textContent = `€${rentedCar.price}`;
pcCPU.textContent = rentedCar.cpu;
pcGPU.textContent = rentedCar.gpu;
pcRAM.textContent = `${rentedCar.ram}GB DDR4 RAM`;
pcMotherboard.textContent = rentedCar.motherboard;
pcStorage.textContent = rentedCar.storage;
pcPSU.textContent = rentedCar.psu;
pcWindows.textContent = rentedCar.windows;
total.textContent = `Total: €${rentedCar.price}`