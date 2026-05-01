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
    },
    mobChargers: {
        vivo: {
            model: "Vivo 44W Flash Charge",
            year: 2023,
            color: "white",
            img: "https://drawingtabs.pk/cdn/shop/files/92747a385f5e5a2af1d3ecc873b6288e-3273-0-020923080331488.jpg?v=1716981461"
        },
        oppo: {
            model: "Oppo 65W SuperVOOC",
            year: 2023,
            color: "white",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8x2jD3hkMM9pv4DweIKnmmOilJ_cBFVCG8g&s"
        },
        redmi: {
            model: "redmi 120W fast charge",
            year: 2023,
            color: "white",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4L0xdI5M_G8qF0Q7_CGtgGbHx219sjnyIA&s"
        }
    }
}


let body = document.querySelector("body");
let theme = document.getElementById("theme");

theme.addEventListener("change", ()=>{
    body.className = theme.value;
})


var main = document.getElementById("cards");

for (var category in products) {

    var proMain = document.createElement("div");
    proMain.id = category;

    proMain.style.display = "flex";
    proMain.style.flexWrap = "wrap";
    proMain.style.justifyContent = "center";
    proMain.style.gap = "20px";
    proMain.style.marginTop = "30px";

    for (var item in products[category]) {

        var product = document.createElement("div");
        var img = document.createElement("img");
        var p = document.createElement("p");

        product.style.backgroundColor = "#686dab";
        product.style.borderRadius = "15px";
        product.style.width = "300px";
        product.style.height = "300px";

        img.src = products[category][item].img;
        img.width = 300;
        img.height = 220;
        img.style.borderRadius = "10px 10px 0px 0px";

        p.innerText =
            products[category][item].model + " - " +
            products[category][item].year + " - " +
            products[category][item].color;

        p.style.fontSize = "20px";
        p.style.fontWeight = "bold";
        p.style.color = "white";
        p.style.textAlign = "center";

        product.appendChild(img);
        product.appendChild(p);

        proMain.appendChild(product);
    }

    main.appendChild(proMain);
}


// ---------------- FILTER ----------------

var select = document.getElementById("categorySelect");

select.addEventListener("change", function () {

    var value = this.value;

    for (var category in products) {

        var section = document.getElementById(category);

        if (value === "all") {
            section.style.display = "flex";
        } 
        else if (value === category) {
            section.style.display = "flex";
        } 
        else {
            section.style.display = "none";
        }

    }

});
