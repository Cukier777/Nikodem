document.querySelector("#butt9").addEventListener("click", function () {
    let kolor = "#";
    const mozliweLiczby = "0123456789abcdef";
    for (let i = 0; i < 6; i++) {
        kolor += mozliweLiczby[Math.floor(Math.random() * 16)];
    }
    console.log(kolor);
    document.querySelector("#kolorprzyc").style.backgroundColor = kolor;
});