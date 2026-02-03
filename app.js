var products = {
    cars: {
        honda: {
            model: "Civic",
            year: 2026,
            color: "black",
            img: "images/civic2026.avif"
        },
        kia: {
            model: "Sportage",
            year: 2026,
            color: "white",
            img: "https://kiamotors-portqasim.com/wp-content/uploads/2020/07/Kia-Sportage-Alpha-1-1-798x466.jpg"
        },
        toyota: {
            model: "Grendis",
            year: 2022,
            color: "blue",
            img: "https://imgcdn.zigwheels.pk/large/gallery/color/14/114/toyota_corolla-altis-grande_strong_blue.jpg"
        }
    },
    bikes: {
        royalEnfield: {
            model: "Royal Enfield Classic",
            year: 2023,
            color: "red",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-Mb8zjzIImAk3qr5DrWVSu42Vczsz5PxGA&s"
        },
        yamaha: {
            model: "Yamaha YZF R15",
            year: 2024,
            color: "black",
            img: "https://i.pinimg.com/736x/57/15/de/5715defee6441aa788b15884a1467718.jpg"
        },
        suzuki: {
            model: "Suzuki Gixxer",
            year: 2022,
            color: "blue",
            img: "https://media.istockphoto.com/id/594474448/photo/suzuki-gsx-r750.jpg?s=612x612&w=0&k=20&c=uCwfSf44Rya81hZyyxPTqVD815KOSpQ9uZSuZ4WUJ5Y="
        }
    },
    phones: {
        summsung: {
            model: "Galaxy S26 Ultra",
            year: 2026,
            color: "black",
            img: "https://phonebolee.com/images/Samsung-Galaxy-S26-Ultra.jpg"
        },
        apple: {
            model: "iPhone 17 Pro max",
            year: 2026,
            color: "orange",
            img: "https://www.mobiledokan.com/media/apple-iphone-17-pro-max-cosmic-orange-official-image.webp"
        },
        google: {
            model: "Pixel 10 Pro",
            year: 2026,
            color: "blue",
            img: "https://eezepc.com/wp-content/uploads/2025/09/google1.webp"
        }
    },
    laptops: {
        dell: {
            model: "Dell XPS 15",
            year: 2026,
            color: "black",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIx2yhFU2VRe5Acl_gigd-WtXJyU9F3Z8qtA&s"
        },
        hp: {
            model: "HP Spectre x360",
            year: 2026,
            color: "white",
            img: "https://hf-store.pk/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-25-at-3.14.11-AM-1.jpeg"
        },
        lenovo: {
            model: "Lenovo ThinkPad X1",
            year: 2026,
            color: "silver",
            img: "https://laptoplelo.com/wp-content/uploads/2020/02/8f3e4d6b3a9a705042a1eda3cff6d405.jpg"
        }
    }
}



// -------------------------------------------------------------------- cars products.
// 1 first card
var main = document.getElementById("cards");

var proMain1 = document.createElement("div");
proMain1.id = "cars";
proMain1.style.display = "flex";
proMain1.style.flexWrap = "wrap";
proMain1.style.justifyContent = "space-around";
proMain1.style.gap = "20px";
proMain1.style.marginTop = "30px";

var product1 = document.createElement("div");
var img1 = document.createElement("img");
var p1 = document.createElement("p");

product1.style.backgroundColor = "#686dab";
product1.style.borderRadius = "15px";
product1.style.width = "300px";
product1.style.height = "250px";
product1.style.verticalAlign = "top";
img1.src = products.cars.honda.img;
img1.width = 300;
img1.style.borderRadius = "10px" + " " + "10px" + " " + "0px" + " " + "0px";
p1.innerText = products.cars.honda.model + " - " + products.cars.honda.year + " - " + products.cars.honda.color;
p1.style.fontSize = "20px";
p1.style.fontWeight = "bold";
p1.style.color = "white";
p1.style.textAlign = "center";


product1.appendChild(img1);
product1.appendChild(p1);
proMain1.appendChild(product1);
main.appendChild(proMain1);


// 1 Second Product Card
var product2 = document.createElement("div");
var img2 = document.createElement("img");
var p2 = document.createElement("p");

product2.style.backgroundColor = "#686dab";
product2.style.borderRadius = "15px";
product2.style.width = "300px";
product2.style.height = "250px";
product2.style.verticalAlign = "top";
img2.src = products.cars.kia.img;
img2.width = 300;
img2.height = 200;
img2.style.borderRadius = "10px" + " " + "10px" + " " + "0px" + " " + "0px";
p2.innerText = products.cars.kia.model + " - " + products.cars.kia.year + " - " + products.cars.kia.color;
p2.style.fontSize = "20px";
p2.style.fontWeight = "bold";
p2.style.color = "white";
p2.style.textAlign = "center";

product2.appendChild(img2);
product2.appendChild(p2);
proMain1.appendChild(product2);
main.appendChild(proMain1);

// 1 Third Product Card
var product3 = document.createElement("div");
var img3 = document.createElement("img");
var p3 = document.createElement("p");

product3.style.backgroundColor = "#686dab";
product3.style.borderRadius = "15px";
product3.style.width = "300px";
product3.style.height = "250px";
product3.style.verticalAlign = "top";
img3.src = products.cars.toyota.img;
img3.width = 300;
img3.height = 200;
img3.style.borderRadius = "10px" + " " + "10px" + " " + "0px" + " " + "0px";
p3.innerText = products.cars.toyota.model + " - " + products.cars.toyota.year + " - " + products.cars.toyota.color;
p3.style.fontSize = "20px";
p3.style.fontWeight = "bold";
p3.style.color = "white";
p3.style.textAlign = "center";

product3.appendChild(img3);
product3.appendChild(p3);
proMain1.appendChild(product3);
main.appendChild(proMain1);




// -------------------------------------------------------------------- bikes products.
// 2 first card
var proMain2 = document.createElement("div");
proMain2.id = "bikes";
proMain2.style.display = "flex";
proMain2.style.flexWrap = "wrap";
proMain2.style.justifyContent = "space-around";
proMain2.style.gap = "20px";
proMain2.style.marginTop = "30px";
var product4 = document.createElement("div");
var img4 = document.createElement("img");
var p4 = document.createElement("p");

product4.style.backgroundColor = "#686dab";
product4.style.borderRadius = "15px";
product4.style.width = "300px";
product4.style.height = "250px";
product4.style.verticalAlign = "top";
img4.src = products.bikes.royalEnfield.img;
img4.width = 300;
img4.height = 190;
img4.style.borderRadius = "10px" + " " + "10px" + " " + "0px" + " " + "0px";
p4.innerText = products.bikes.royalEnfield.model + " - " + products.bikes.royalEnfield.year + " - " + products.bikes.royalEnfield.color;
p4.style.fontSize = "20px";
p4.style.fontWeight = "bold";
p4.style.color = "white";
p4.style.textAlign = "center";


product4.appendChild(img4);
product4.appendChild(p4);
proMain2.appendChild(product4);
main.appendChild(proMain2);


// 2 second card
var product5 = document.createElement("div");
var img5 = document.createElement("img");
var p5 = document.createElement("p");

product5.style.backgroundColor = "#686dab";
product5.style.borderRadius = "15px";
product5.style.width = "300px";
product5.style.height = "250px";
product5.style.verticalAlign = "top";
img5.src = products.bikes.yamaha.img;
img5.width = 300;
img5.height = 190;
img5.style.borderRadius = "10px" + " " + "10px" + " " + "0px" + " " + "0px";
p5.innerText = products.bikes.yamaha.model + " - " + products.bikes.yamaha.year + " - " + products.bikes.yamaha.color;
p5.style.fontSize = "20px";
p5.style.fontWeight = "bold";
p5.style.color = "white";
p5.style.textAlign = "center";


product5.appendChild(img5);
product5.appendChild(p5);
proMain2.appendChild(product5);
main.appendChild(proMain2);

// 2 third card
var product6 = document.createElement("div");
var img6 = document.createElement("img");
var p6 = document.createElement("p");

product6.style.backgroundColor = "#686dab";
product6.style.borderRadius = "15px";
product6.style.width = "300px";
product6.style.height = "250px";
product6.style.verticalAlign = "top";
img6.src = products.bikes.suzuki.img;
img6.width = 300;
img6.height = 190;
img6.style.borderRadius = "10px" + " " + "10px" + " " + "0px" + " " + "0px";
p6.innerText = products.bikes.suzuki.model + " - " + products.bikes.suzuki.year + " - " + products.bikes.suzuki.color;
p6.style.fontSize = "20px";
p6.style.fontWeight = "bold";
p6.style.color = "white";
p6.style.textAlign = "center";


product6.appendChild(img6);
product6.appendChild(p6);
proMain2.appendChild(product6);
main.appendChild(proMain2);



// -------------------------------------------------------------------- phones products.
// 3 first card
var proMain3 = document.createElement("div");
proMain3.id = "phones";
proMain3.style.display = "flex";
proMain3.style.flexWrap = "wrap";
proMain3.style.justifyContent = "space-around";
proMain3.style.gap = "20px";
proMain3.style.marginTop = "30px";
var product7 = document.createElement("div");
var img7 = document.createElement("img");
var p7 = document.createElement("p");

product7.style.backgroundColor = "#686dab";
product7.style.borderRadius = "15px";
product7.style.width = "300px";
product7.style.height = "300px";
product7.style.verticalAlign = "top";
img7.src = products.phones.summsung.img;
img7.width = 300;
img7.height = 240;
img7.style.borderRadius = "10px" + " " + "10px" + " " + "0px" + " " + "0px";
p7.innerText = products.phones.summsung.model + " - " + products.phones.summsung.year + " - " + products.phones.summsung.color;
p7.style.fontSize = "20px";
p7.style.fontWeight = "bold";
p7.style.color = "white";
p7.style.textAlign = "center";


product7.appendChild(img7);
product7.appendChild(p7);
proMain3.appendChild(product7);
main.appendChild(proMain3);


// 3 second card
var product8 = document.createElement("div");
var img8 = document.createElement("img");
var p8 = document.createElement("p");

product8.style.backgroundColor = "#686dab";
product8.style.borderRadius = "15px";
product8.style.width = "300px";
product8.style.height = "300px";
product8.style.verticalAlign = "top";
img8.src = products.phones.apple.img;
img8.width = 300;
img8.height = 240;
img8.style.borderRadius = "10px" + " " + "10px" + " " + "0px" + " " + "0px";
p8.innerText = products.phones.apple.model + " - " + products.phones.apple.year + " - " + products.phones.apple.color;
p8.style.fontSize = "20px";
p8.style.fontWeight = "bold";
p8.style.color = "white";
p8.style.textAlign = "center";


product8.appendChild(img8);
product8.appendChild(p8);
proMain3.appendChild(product8);
main.appendChild(proMain3);


// 3 third card
var product9 = document.createElement("div");
var img9 = document.createElement("img");
var p9 = document.createElement("p");

product9.style.backgroundColor = "#686dab";
product9.style.borderRadius = "15px";
product9.style.width = "300px";
product9.style.height = "300px";
product9.style.verticalAlign = "top";
img9.src = products.phones.google.img;
img9.width = 300;
img9.height = 240;
img9.style.borderRadius = "10px" + " " + "10px" + " " + "0px" + " " + "0px";
p9.innerText = products.phones.google.model + " - " + products.phones.google.year + " - " + products.phones.google.color;
p9.style.fontSize = "20px";
p9.style.fontWeight = "bold";
p9.style.color = "white";
p9.style.textAlign = "center";


product9.appendChild(img9);
product9.appendChild(p9);
proMain3.appendChild(product9);
main.appendChild(proMain3);




// -------------------------------------------------------------------- laptops products.
// 4 first card
var proMain4 = document.createElement("div");
proMain4.id = "laptops"; 
proMain4.style.display = "flex";
proMain4.style.flexWrap = "wrap";
proMain4.style.justifyContent = "space-around";
proMain4.style.gap = "20px";
proMain4.style.marginTop = "30px";
var product10 = document.createElement("div");
var img10 = document.createElement("img");
var p10 = document.createElement("p");

product10.style.backgroundColor = "#686dab";
product10.style.borderRadius = "15px";
product10.style.width = "300px";
product10.style.height = "300px";
product10.style.verticalAlign = "top";
img10.src = products.laptops.dell.img;
img10.width = 300;
img10.height = 240;
img10.style.borderRadius = "10px" + " " + "10px" + " " + "0px" + " " + "0px";
p10.innerText = products.laptops.dell.model + " - " + products.laptops.dell.year + " - " + products.laptops.dell.color;
p10.style.fontSize = "20px";
p10.style.fontWeight = "bold";
p10.style.color = "white";
p10.style.textAlign = "center";


product10.appendChild(img10);
product10.appendChild(p10);
proMain4.appendChild(product10);
main.appendChild(proMain4);


// 4 second card
var product11 = document.createElement("div");
var img11 = document.createElement("img");
var p11 = document.createElement("p");

product11.style.backgroundColor = "#686dab";
product11.style.borderRadius = "15px";
product11.style.width = "300px";
product11.style.height = "300px";
product11.style.verticalAlign = "top";
img11.src = products.laptops.hp.img;
img11.width = 300;
img11.height = 240;
img11.style.borderRadius = "10px" + " " + "10px" + " " + "0px" + " " + "0px";
p11.innerText = products.laptops.hp.model + " - " + products.laptops.hp.year + " - " + products.laptops.hp.color;
p11.style.fontSize = "20px";
p11.style.fontWeight = "bold";
p11.style.color = "white";
p11.style.textAlign = "center";


product11.appendChild(img11);
product11.appendChild(p11);
proMain4.appendChild(product11);
main.appendChild(proMain4);


// 4 third card
var product12 = document.createElement("div");
var img12 = document.createElement("img");
var p12 = document.createElement("p");

product12.style.backgroundColor = "#686dab";
product12.style.borderRadius = "15px";
product12.style.width = "300px";
product12.style.height = "300px";
product12.style.verticalAlign = "top";
img12.src = products.laptops.lenovo.img;
img12.width = 300;
img12.height = 240;
img12.style.borderRadius = "10px" + " " + "10px" + " " + "0px" + " " + "0px";
p12.innerText = products.laptops.lenovo.model + " - " + products.laptops.lenovo.year + " - " + products.laptops.lenovo.color;
p12.style.fontSize = "20px";
p12.style.fontWeight = "bold";
p12.style.color = "white";
p12.style.textAlign = "center";


product12.appendChild(img12);
product12.appendChild(p12);
proMain4.appendChild(product12);
main.appendChild(proMain4);




// ---------------------------------------------------- category filter code.
var select = document.getElementById("categorySelect")

select.addEventListener("change", function (){
    var value = this.value

    var cars = document.getElementById("cars")
    var bikes = document.getElementById("bikes")
    var phones = document.getElementById("phones")
    var laptops = document.getElementById("laptops")

    cars.style.display = "none"
    bikes.style.display = "none"
    phones.style.display = "none"
    laptops.style.display = "none"

    if(value == "all"){
        cars.style.display = "flex"
        bikes.style.display = "flex"
        phones.style.display = "flex"
        laptops.style.display = "flex"
    }else if(value == "cars"){
        cars.style.display = "flex"
    }else if(value == "bikes"){
        bikes.style.display = "flex"
    }else if(value == "phones"){
        phones.style.display = "flex"
    }else if(value == "laptops"){
        laptops.style.display = "flex"
    }
})