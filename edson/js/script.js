function createWhatsappLink(){
    var name = document.getElementById("whats-name").value
    var message = document.getElementById("whats-message").value

    var resName = encodeURI(name);
    var resMessage = encodeURI(message);
    
    var base_url = "https://api.whatsapp.com/send?phone=5562981508924&text=Olá%2C%20me%20chamo%20"
    var url = base_url + resName + ".%20" + resMessage

    window.open(url);
}

const btnMobile = document.getElementById("btn-menu-mobile");

function toggleMenu(event){
    if (event.type === "touchstart"){
        event.preventDefault();
    }
    const nav = document.getElementById("main-menu");
    nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);