const kaardid =document.querySelectorAll(".card")

kaardid.forEach(kaart =>{
    const pealkiri =document.querySelectorAll("h5")
    let nimi = (kaart.querySelector("img").getAttribute("data-title"));
    let kirjeldus = (kaart.querySelector("img").getAttribute("data-description"));
    console.log(kirjeldus, nimi)
});


// console.log(kaardid[0])