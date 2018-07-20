// Load your images on page-load

function preloader() {
    const imagesList = [
           "./img/sol1.jpg",
           "./img/sol2.jpg",
           "./img/sol3.jpg"
        ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images: \n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};

window.addEventListener("load", preloader);

/* 
Get all buttons in a NODE LIST of buttons (array like structure) */

let btn = document.querySelectorAll("button");

/* 
Complete your resource-object that will store the dynamic content.
Resource object should 3 sub-objects. Give your sub-objects
meaningful names. Every sub-object should have the following
properties headingContent, bodyText, imgUrl and imgAlt. */

let content = {
    solution1: {
        headingContent: "Unplug your electronics when not in use",
        bodyText: "Get into the habit of unplugging electronics when you’re not using them and cut back your expenditure of “phantom power.” This is the unintended energy sucked up by electronics when they’re off or in stand-by mode, which can add up to 10% of your annual electricity bill. While most devices consume only low levels of electricity, others, like computers and TVs, can consume much more. Unplug your laptop overnight and you’ll also preserve the life of the battery. When you charge, power it up to 80% and let drain to about 40%. This could extend the battery’s life up to four times as much.",
        imgUrl: "./images/sol1.jpg",
        imgAlt: "plug"
    },
    solution2: {
        headingContent: "Collect rainwater",
        bodyText: "Rain barrels can save you significant amounts of money in a season, and not just if you’re a gardener. Rain barrels (storage tanks that gather rainwater) collect gallons of free “soft water” that doesn’t contain chlorine, lime, or calcium, making it ideal for window and car washing. A rain barrel can also collect water to store for periods of drought in summer, which can be used for multiple purposes from watering plants to topping off a swimming pool.",
        imgUrl: "./images/sol2.jpg",
        imgAlt: "rain water"
    },
    solution3: {
        headingContent: "Hang curtains",
        bodyText: "Heating and cooling costs account for the majority of most total household utilities bills. Hanging heavy curtains can be a simple and effective way to insulate your home from the cold in winter and the heat in summer. Choose tightly woven cotton or natural fibers like muslin, and hang as close to the window as possible to lessen your reliance on a space heater.",
        imgUrl: "./images/sol3.jpg",
        imgAlt: "curtains"
    }
};


/* 
Get the reference to your HTML-container
that will be dynamically loaded from the resource-object. */

let solutions = document.getElementById("solutions");



/* 
The first button in a NODE LIST of buttons will initially 
have the id: active-button - this will uniquely style 
the active button (CSS rule). */

btn[0].setAttribute("id", "active-button");

/*    
The first content from the
resource-object will be loaded on the page load:
`<h1>${headingContent}</h1>
 <img src="${imgUrl}" alt="${imgAlt}">
 <p>${bodyText}</p>` */

solutions.innerHTML = `<h1>${content.solution1.headingContent}</h1>
     <img src="${content.solution1.imgUrl}" alt="${content.solution1.imgAlt}">
     <p>${content.solution1.bodyText}</p>`;



/* 
Start your handleSelection function here. */
function handleSelection() {


    /* 
    Remove the id active-button from the element that
    contains it prior to the click-event. 

    This will require the loop throught the NODE LIST of buttons. 
    Inside the loop, use conditional and the element object method
    hasAttribute() to check if the current button in the loop containes the id.
    If it does, use element-object property removeAttribute()
    to remove the id. */
    for (let i = 0; i < btn.length; i++) {
        if (btn[i].hasAttribute("id")) {
            btn[i].removeAttribute("id");
        }
    }

    /*
    Use the element-object method setAttribute() to set the id active-button 
    to the currently clicked button. */

    this.setAttribute("id", "active-button");

    /* 
    Use conditional and event-object to check which button is clicked
    and based on that, create HTML with the data inside the backticks:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>`
    Assign this content to to your HTML-container that will 
    be dynamically loaded (you already got the reference to 
    this container before you started the function handleSelection) */

    for (let i = 0; i < btn.length; i++) {
        if (btn[i].hasAttribute("id")) {
            if (i == 0) {
                solutions.innerHTML = `<h1>${content.solution1.headingContent}</h1><img src="${content.solution1.imgUrl}" alt="${content.solution1.imgAlt}"><p>${content.solution1.bodyText}</p>`;
            }
            if (i == 1) {
                solutions.innerHTML = `<h1>${content.solution2.headingContent}</h1><img src="${content.solution2.imgUrl}" alt="${content.solution2.imgAlt}"><p>${content.solution2.bodyText}</p>`;
            }
            if (i == 2) {
                solutions.innerHTML = `<h1>${content.solution3.headingContent}</h1><img src="${content.solution3.imgUrl}" alt="${content.solution3.imgAlt}"><p>${content.solution3.bodyText}</p>`;
            }
        }
    }

    /* 
    Close your handleSelection function here. */
}
/* 
Register all buttons to click event. The event-handler handleSelection will listen 
for this event to happen. */
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", handleSelection)
}