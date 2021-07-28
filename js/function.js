const business = document.getElementById("business");
const Business = document.getElementById("Business");
const Entertainment = document.getElementById("Entertainment");
const entertainment = document.getElementById("entertainment");
const Generalnews = document.getElementById("Generalnews");
const general = document.getElementById("general");
const Healthnews = document.getElementById("Healthnews");
const health = document.getElementById("health");
const Sciencenews = document.getElementById("Sciencenews");
const science = document.getElementById("science");
const blog = document.getElementById("blog");

const setBusiness = () => {
    newBusines.map((value, index) => {
        const newElemnet = document.createElement("div");
        newElemnet.className = "col-md-6 col-lg-4 col-xl-3 addclass business";
        newElemnet.innerHTML = `
        <div class="card border-0 bg-light p-0 rounded overflow-hidden">
        <img class="w-100  img rounded"
            src="${value.urlToImage}"
            alt="">
     <div class="p-3 text">
        <p>${value.title}</p>
        <p class="data">${value.publishedAt}</p>
     </div>
    </div>
        `;
        Business.innerHTML = `<div class="pt-5"><h2>Business</h2></div>`
        business.appendChild(newElemnet);
        business.className = "row py-5"
        blog.remove("blog");
    });
};

const setEntertainment = () => {
    entertainment.innerHTML = "";
    entertainmentnews.map((value, index) => {
        const newElemnet = document.createElement("div");
        newElemnet.className = "col-md-6 col-lg-4 col-xl-3 addclass  entertainment";
        newElemnet.innerHTML = `
        <div class="card border-0  bg-light p-0 rounded overflow-hidden">
        <img class="w-100  img rounded"
            src="${value.urlToImage}"
            alt="">
     <div class="p-3 text">
        <p>${value.title}</p>
        <p class="data">${value.publishedAt}</p>
     </div>
    </div>
        `;
        Entertainment.innerHTML = `<div class="pt-5"><h2>Entertainment</h2></div>`
        entertainment.appendChild(newElemnet);
        entertainment.className = "row py-5"
        blog.remove("blog");
    });
};
const setGeneral = () => {
    general.innerHTML = "";
    generalnews.map((value, index) => {
        const newElemnet = document.createElement("div");
        newElemnet.className = "col-md-6 col-lg-4 col-xl-3 addclass general";
        newElemnet.innerHTML = `
        <div class="card border-0  bg-light p-0 rounded overflow-hidden">
        <img class="w-100  img rounded"
            src="${value.urlToImage}"
            alt="">
     <div class="p-3 text">
        <p>${value.title}</p>
        <p class="data">${value.publishedAt}</p>
     </div>
    </div>
        `;
        Generalnews.innerHTML = `<div class="pt-5"><h2>General</h2></div>`
        general.appendChild(newElemnet);
        general.className = "row py-5"
        blog.remove("blog");
    });
};
const setHealth = () => {
    health.innerHTML = "";
    healthnews.map((value, index) => {
        const newElemnet = document.createElement("div");
        newElemnet.className = "col-md-6 col-lg-4 col-xl-3 addclass health";
        newElemnet.innerHTML = `
        <div class="card border-0  bg-light p-0 rounded overflow-hidden">
        <img class="w-100  img rounded"
            src="${value.urlToImage}"
            alt="">
     <div class="p-3 text">
        <p>${value.title}</p>
        <p class="data">${value.publishedAt}</p>
     </div>
    </div>
        `;
        Healthnews.innerHTML = `<div class="pt-5"><h2>Health</h2></div>`
        health.appendChild(newElemnet);
        health.className = "row py-5"
        blog.remove("blog");
    });
};
const setScience = () => {
    science.innerHTML = "";
    sciensenews.map((value, index) => {
        const newElemnet = document.createElement("div");
        newElemnet.className = "col-md-6 col-lg-4 col-xl-3 addclass science";
        newElemnet.innerHTML = `
        <div class="card border-0  bg-light p-0 rounded overflow-hidden">
        <img class="w-100  img rounded"
            src="${value.urlToImage}"
            alt="">
     <div class="p-3 text">
        <p>${value.title}</p>
        <p class="data">${value.publishedAt}</p>
     </div>
    </div>
        `;
        Sciencenews.innerHTML = `<div class="pt-5"><h2>Science</h2></div>`
        science.appendChild(newElemnet);
        science.className = "row py-5"
        blog.remove("blog");
    });
};
setBusiness();
setEntertainment();
setGeneral();
setHealth();
setScience();
console.log(newBusines.length);
console.log(entertainmentnews.length);
console.log(generalnews.length);
console.log(healthnews.length);