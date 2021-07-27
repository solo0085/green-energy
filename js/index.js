// Load your images on page-load
function preloader() {
    const imagesPaths = [
        "./img/solar_energy.png",
        "./img/kerr_dam.png",
        "./img/windmills.png"
    ];
    const images = [];
    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }
};
window.addEventListener("load", preloader);



var buttons = document.getElementsByTagName('button');

var resource = {
    solor: {
        headingContent: "Solar Power",
        imgUrl: "./img/solar_energy.png",
        imgAlt: "Solor Image",
        bodyText: "This renewable energy source that is green is produced using cells that take on sunlight and convert it into electricity. This source of energy we call solar power is used to heat buildings and is used for cooking and lighting. It can be used for an entire neighbourhood! We also use it for domestic purposes like garden lighting."
    },
    water: {
        headingContent: "Hydropower",
        imgUrl: "./img/kerr_dam.png",
        imgAlt: "Water Image",
        bodyText: " This source of energy is also called water power is basically derived from fast running water to product electric energy or electricity. It used to power big machines. This is a form of sustrainable energy production. In earlier days this was used from watermills as renewable source of energy for irrigation purposes and operating mechanical devices."
        
       
    },
    wind: {
        headingContent: "Wind Power",
        imgUrl: "./img/windmills.png",
        imgAlt: "Wind Image",
        bodyText: "This renewable source of energy we call wind energy is present in abundance on planet earth! To make use of this source, which is natural, the best way possible is use wind turbines. These turbines that run on wind operate from 14km/hr to 90km/hr. When the earth rotates and since the surfaces of earth are irregular, the wind flows at random paths. This wind is taken by power plants to rotate and eventually produce wind energy."
        
        
    }
}


var dynamicHeading = document.getElementById('dynamicHeading');
var dynamicImage = document.getElementById('dynamicImage');
var dynamicText = document.getElementById('dynamicText');

/* 
Start event handleSelection function here. */

function clickEvent() {
    var objectName = this.classList[1]

    // set button active
    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];

        var currentList = button.classList[1];
        if (currentList == objectName) {
            button.setAttribute("id", "active-button")
        } else {
            button.removeAttribute("id")
        }
        
    }

    // change the content

    switch (objectName) {
        case "menu1":
            dynamicHeading.innerHTML = resource.solor.headingContent
            dynamicText.innerHTML = resource.solor.bodyText
            
            dynamicImage.src = resource.solor.imgUrl
            dynamicImage.alt = resource.solor.imgAlt

            break;
        case "menu2":
            dynamicHeading.innerHTML = resource.water.headingContent
            dynamicText.innerHTML = resource.water.bodyText
            
            dynamicImage.src = resource.water.imgUrl
            dynamicImage.alt = resource.water.imgAlt

            break;
        case "menu3":
            dynamicHeading.innerHTML = resource.wind.headingContent
            dynamicText.innerHTML = resource.wind.bodyText
            
            dynamicImage.src = resource.wind.imgUrl
            dynamicImage.alt = resource.wind.imgAlt

            break;
    
        default:
            break;
    }
    
}

for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener('click', clickEvent)
}
