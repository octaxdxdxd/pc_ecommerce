const products = [
    {
        id: 1,
        img: "./imagini/pc1.png",
        price: 1200,
        name: "Gaming Beast",
        type: "Gaming",
        gpu: "NVIDIA GeForce RTX 3070",
        gpuBrand: "NVIDIA",
        cpu: "Intel Core i7-12700K",
        cpuBrand: "Intel",
        ram: "16",
        windows: "Windows 11",
        motherboard: "ASUS ROG Strix Z690-E",
        storage: "1TB NVMe SSD",
        psu: "750W 80+ Gold",
        category: "pc"
    },
    {
        id: 2,
        img: "./imagini/laptop1.png",
        price: 1500,
        name: "Gaming Pro",
        type: "Gaming",
        gpu: "NVIDIA GeForce RTX 3060",
        gpuBrand: "NVIDIA",
        cpu: "Intel Core i7-11800H",
        cpuBrand: "Intel",
        ram: "16",
        windows: "Windows 11",
        motherboard: "Integrated",
        storage: "1TB NVMe SSD",
        psu: "Integrated",
        batteryLife: "6",
        category: "laptop"
    },
    {
        id: 3,
        img: "./imagini/pc2.png",
        price: 1000,
        name: "Office Master",
        type: "Office",
        gpu: "Intel UHD Graphics 750",
        gpuBrand: "Intel",
        cpu: "Intel Core i5-11500",
        cpuBrand: "Intel",
        ram: "8",
        windows: "Windows 10",
        motherboard: "MSI B560M PRO",
        storage: "512GB SSD",
        psu: "500W 80+ Bronze",
        category: "pc"
    },
    {
        id: 4,
        img: "./imagini/laptop2.png",
        price: 800,
        name: "Work Companion",
        type: "Office",
        gpu: "Intel Iris Xe Graphics",
        gpuBrand: "Intel",
        cpu: "Intel Core i5-1135G7",
        cpuBrand: "Intel",
        ram: "8",
        windows: "Windows 10",
        motherboard: "Integrated",
        storage: "256GB SSD",
        psu: "Integrated",
        batteryLife: "8",
        category: "laptop"
    },
    {
        id: 5,
        img: "./imagini/pc3.png",
        price: 1800,
        name: "Ultimate Creator",
        type: "Creator",
        gpu: "NVIDIA GeForce RTX 3080",
        gpuBrand: "NVIDIA",
        cpu: "AMD Ryzen 9 5900X",
        cpuBrand: "AMD",
        ram: "32",
        windows: "Windows 11",
        motherboard: "Gigabyte X570 AORUS Master",
        storage: "2TB NVMe SSD",
        psu: "850W 80+ Platinum",
        category: "pc"
    },
    {
        id: 6,
        img: "./imagini/laptop3.png",
        price: 2000,
        name: "Creator's Dream",
        type: "Creator",
        gpu: "NVIDIA GeForce RTX 3070",
        gpuBrand: "NVIDIA",
        cpu: "AMD Ryzen 9 5900HX",
        cpuBrand: "AMD",
        ram: "32",
        windows: "Windows 11",
        motherboard: "Integrated",
        storage: "1TB NVMe SSD",
        psu: "Integrated",
        batteryLife: "10",
        category: "laptop"
    },
    {
        id: 7,
        img: "./imagini/pc4.png",
        price: 600,
        name: "Budget Gamer",
        type: "Gaming",
        gpu: "AMD Radeon RX 580",
        gpuBrand: "AMD",
        cpu: "AMD Ryzen 5 3600",
        cpuBrand: "AMD",
        ram: "16",
        windows: "Windows 10",
        motherboard: "ASRock B450M PRO4",
        storage: "1TB HDD",
        psu: "600W 80+ Bronze",
        category: "pc"
    },
    {
        id: 8,
        img: "./imagini/laptop4.png",
        price: 700,
        name: "Student's Choice",
        type: "Office",
        gpu: "AMD Radeon Vega 8",
        gpuBrand: "AMD",
        cpu: "AMD Ryzen 7 3700U",
        cpuBrand: "AMD",
        ram: "12",
        windows: "Windows 10",
        motherboard: "Integrated",
        storage: "512GB SSD",
        psu: "Integrated",
        batteryLife: "12",
        category: "laptop"
    },
    {
        id: 9,
        img: "./imagini/pc5.png",
        price: 1100,
        name: "Office Elite",
        type: "Office",
        gpu: "NVIDIA Quadro P620",
        gpuBrand: "NVIDIA",
        cpu: "Intel Core i7-10700",
        cpuBrand: "Intel",
        ram: "16",
        windows: "Windows 10",
        motherboard: "Dell Precision T3640",
        storage: "1TB NVMe SSD",
        psu: "550W 80+ Gold",
        category: "pc"
    },
    {
        id: 10,
        img: "./imagini/laptop5.png",
        price: 1700,
        name: "Developer's Delight",
        type: "Creator",
        gpu: "NVIDIA GeForce GTX 1650",
        gpuBrand: "NVIDIA",
        cpu: "Intel Core i7-9750H",
        cpuBrand: "Intel",
        ram: "16",
        windows: "Windows 11",
        motherboard: "Integrated",
        storage: "1TB SSD",
        psu: "Integrated",
        batteryLife: "7",
        category: "laptop"
    },
    {
        id: 11,
        img: "./imagini/pc6.png",
        price: 1400,
        name: "Mid-Range Marvel",
        type: "Gaming",
        gpu: "NVIDIA GeForce RTX 2060",
        gpuBrand: "NVIDIA",
        cpu: "Intel Core i5-10600K",
        cpuBrand: "Intel",
        ram: "16",
        windows: "Windows 11",
        motherboard: "MSI MPG Z490 GAMING EDGE",
        storage: "512GB NVMe SSD",
        psu: "650W 80+ Gold",
        category: "pc"
    },
    {
        id: 12,
        img: "./imagini/laptop6.png",
        price: 1300,
        name: "Travel Buddy",
        type: "Office",
        gpu: "AMD Radeon Vega 10",
        gpuBrand: "AMD",
        cpu: "AMD Ryzen 5 4500U",
        cpuBrand: "AMD",
        ram: "8",
        windows: "Windows 10",
        motherboard: "Integrated",
        storage: "512GB SSD",
        psu: "Integrated",
        batteryLife: "9",
        category: "laptop"
    },
    {
        id: 13,
        img: "./imagini/pc7.png",
        price: 2200,
        name: "Powerhouse",
        type: "Creator",
        gpu: "NVIDIA GeForce RTX 3090",
        gpuBrand: "NVIDIA",
        cpu: "Intel Core i9-12900K",
        cpuBrand: "Intel",
        ram: "64",
        windows: "Windows 11",
        motherboard: "ASUS ROG Maximus XIII Hero",
        storage: "4TB NVMe SSD",
        psu: "1000W 80+ Platinum",
        category: "pc"
    },
    {
        id: 14,
        img: "./imagini/laptop7.png",
        price: 1100,
        name: "Daily Performer",
        type: "Office",
        gpu: "Intel UHD Graphics",
        gpuBrand: "Intel",
        cpu: "Intel Core i5-10210U",
        cpuBrand: "Intel",
        ram: "8",
        windows: "Windows 10",
        motherboard: "Integrated",
        storage: "256GB SSD",
        psu: "Integrated",
        batteryLife: "7",
        category: "laptop"
    },
    {
        id: 15,
        img: "./imagini/pc8.png",
        price: 1700,
        name: "Graphics Guru",
        type: "Creator",
        gpu: "NVIDIA GeForce RTX 3070 Ti",
        gpuBrand: "NVIDIA",
        cpu: "AMD Ryzen 7 5800X",
        cpuBrand: "AMD",
        ram: "32",
        windows: "Windows 11",
        motherboard: "Gigabyte B550 AORUS ELITE",
        storage: "2TB SSD",
        psu: "750W 80+ Gold",
        category: "pc"
    },
    {
        id: 16,
        img: "./imagini/laptop8.png",
        price: 900,
        name: "College Essential",
        type: "Office",
        gpu: "Intel Iris Plus Graphics",
        gpuBrand: "Intel",
        cpu: "Intel Core i3-1005G1",
        cpuBrand: "Intel",
        ram: "8",
        windows: "Windows 10",
        motherboard: "Integrated",
        storage: "128GB SSD",
        psu: "Integrated",
        batteryLife: "10",
        category: "laptop"
    },
    {
        id: 17,
        img: "./imagini/pc9.png",
        price: 800,
        name: "Entry Level",
        type: "Gaming",
        gpu: "NVIDIA GeForce GTX 1650",
        gpuBrand: "NVIDIA",
        cpu: "Intel Core i3-10100F",
        cpuBrand: "Intel",
        ram: "8",
        windows: "Windows 10",
        motherboard: "ASUS Prime H410M-E",
        storage: "256GB SSD",
        psu: "450W 80+ Bronze",
        category: "pc"
    },
    {
        id: 18,
        img: "./imagini/laptop9.png",
        price: 1800,
        name: "Portable Studio",
        type: "Creator",
        gpu: "NVIDIA GeForce RTX 3060",
        gpuBrand: "NVIDIA",
        cpu: "AMD Ryzen 7 4800H",
        cpuBrand: "AMD",
        ram: "32",
        windows: "Windows 11",
        motherboard: "Integrated",
        storage: "1TB SSD",
        psu: "Integrated",
        batteryLife: "11",
        category: "laptop"
    },
    {
        id: 19,
        img: "./imagini/pc10.png",
        price: 950,
        name: "Home Office",
        type: "Office",
        gpu: "Intel HD Graphics 630",
        gpuBrand: "Intel",
        cpu: "Intel Core i5-10400",
        cpuBrand: "Intel",
        ram: "16",
        windows: "Windows 10",
        motherboard: "ASUS Prime B460M-A",
        storage: "512GB SSD",
        psu: "550W 80+ Bronze",
        category: "pc"
    },
    {
        id: 20,
        img: "./imagini/laptop10.png",
        price: 1400,
        name: "Creative Workhorse",
        type: "Creator",
        gpu: "NVIDIA Quadro T1000",
        gpuBrand: "NVIDIA",
        cpu: "Intel Core i7-9750H",
        cpuBrand: "Intel",
        ram: "16",
        windows: "Windows 10",
        motherboard: "Integrated",
        storage: "512GB SSD",
        psu: "Integrated",
        batteryLife: "9",
        category: "laptop"
    },
    {
        id: 21,
        img: "./imagini/pc11.png",
        price: 1250,
        name: "Balanced Build",
        type: "Gaming",
        gpu: "NVIDIA GeForce GTX 1660 Super",
        gpuBrand: "NVIDIA",
        cpu: "AMD Ryzen 5 5600X",
        cpuBrand: "AMD",
        ram: "16",
        windows: "Windows 10",
        motherboard: "MSI B450 TOMAHAWK MAX",
        storage: "1TB SSD",
        psu: "650W 80+ Bronze",
        category: "pc"
    },
    {
        id: 22,
        img: "./imagini/laptop11.png",
        price: 1600,
        name: "Designer’s Choice",
        type: "Creator",
        gpu: "NVIDIA GeForce RTX 2070",
        gpuBrand: "NVIDIA",
        cpu: "Intel Core i7-10875H",
        cpuBrand: "Intel",
        ram: "32",
        windows: "Windows 11",
        motherboard: "Integrated",
        storage: "1TB SSD",
        psu: "Integrated",
        batteryLife: "8",
        category: "laptop"
    },
    {
        id: 23,
        img: "./imagini/pc12.png",
        price: 1350,
        name: "Silent Performer",
        type: "Office",
        gpu: "Intel UHD Graphics 630",
        gpuBrand: "Intel",
        cpu: "Intel Core i7-10700",
        cpuBrand: "Intel",
        ram: "16",
        windows: "Windows 10",
        motherboard: "ASUS Prime Z490-A",
        storage: "1TB NVMe SSD",
        psu: "600W 80+ Gold",
        category: "pc"
    },
    {
        id: 24,
        img: "./imagini/laptop12.png",
        price: 1700,
        name: "Power Designer",
        type: "Creator",
        gpu: "NVIDIA Quadro P2000",
        gpuBrand: "NVIDIA",
        cpu: "AMD Ryzen 9 4900HS",
        cpuBrand: "AMD",
        ram: "32",
        windows: "Windows 11",
        motherboard: "Integrated",
        storage: "2TB SSD",
        psu: "Integrated",
        batteryLife: "10",
        category: "laptop"
    },
    {
        id: 25,
        img: "./imagini/pc13.png",
        price: 1450,
        name: "All-Rounder",
        type: "Gaming",
        gpu: "NVIDIA GeForce RTX 2060 Super",
        gpuBrand: "NVIDIA",
        cpu: "Intel Core i5-11600K",
        cpuBrand: "Intel",
        ram: "16",
        windows: "Windows 10",
        motherboard: "ASRock B560 Pro4",
        storage: "512GB SSD",
        psu: "650W 80+ Gold",
        category: "pc"
    },
    {
        id: 26,
        img: "./imagini/laptop13.png",
        price: 1000,
        name: "Daily Driver",
        type: "Office",
        gpu: "Intel Iris Xe Graphics",
        gpuBrand: "Intel",
        cpu: "Intel Core i5-1135G7",
        cpuBrand: "Intel",
        ram: "16",
        windows: "Windows 11",
        motherboard: "Integrated",
        storage: "512GB SSD",
        psu: "Integrated",
        batteryLife: "8",
        category: "laptop"
    },
    {
        id: 27,
        img: "./imagini/pc14.png",
        price: 1850,
        name: "Extreme Gaming",
        type: "Gaming",
        gpu: "NVIDIA GeForce RTX 3080",
        gpuBrand: "NVIDIA",
        cpu: "AMD Ryzen 7 5800X",
        cpuBrand: "AMD",
        ram: "32",
        windows: "Windows 11",
        motherboard: "MSI MPG B550 Gaming Edge",
        storage: "2TB NVMe SSD",
        psu: "750W 80+ Platinum",
        category: "pc"
    },
    {
        id: 28,
        img: "./imagini/laptop14.png",
        price: 1900,
        name: "Work and Play",
        type: "Workstation",
        gpu: "NVIDIA GeForce RTX 2080",
        gpuBrand: "NVIDIA",
        cpu: "Intel Core i9-9880H",
        cpuBrand: "Intel",
        ram: "32",
        windows: "Windows 11",
        motherboard: "Integrated",
        storage: "1TB NVMe SSD",
        psu: "Integrated",
        batteryLife: "9",
        category: "laptop"
    },
    {
        id: 29,
        img: "./imagini/pc15.png",
        price: 700,
        name: "Compact Performer",
        type: "Office",
        gpu: "Intel UHD Graphics 630",
        gpuBrand: "Intel",
        cpu: "Intel Core i5-10400F",
        cpuBrand: "Intel",
        ram: "16",
        windows: "Windows 10",
        motherboard: "Gigabyte B460M DS3H",
        storage: "512GB NVMe SSD",
        psu: "500W 80+ Bronze",
        category: "pc"
    },
    {
        id: 30,
        img: "./imagini/laptop15.png",
        price: 2100,
        name: "Ultimate Mobile Creator",
        type: "Creator",
        gpu: "NVIDIA GeForce RTX 3080",
        gpuBrand: "NVIDIA",
        cpu: "AMD Ryzen 9 5900HX",
        cpuBrand: "AMD",
        ram: "64",
        windows: "Windows 11",
        motherboard: "Integrated",
        storage: "2TB NVMe SSD",
        psu: "Integrated",
        batteryLife: "10",
        category: "laptop"
    }
];

export { products };