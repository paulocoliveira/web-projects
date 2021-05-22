var height = 0
var widht = 0
var lives = 1
var time = 10

function getStageSize(){
    widht = window.innerWidth
    height = window.innerHeight
}

getStageSize()

var chronometer = setInterval(function(){
    time -= 1
    if (time < 0){
        clearInterval(chronometer)
        clearInterval(createMosquito)
        window.location.href = "win.html"
    }else{
        document.getElementById("chronometer").innerHTML = time    
    }
}, 1000)

function randomPosition(){
    if (document.getElementById("mosquito")){
        document.getElementById("mosquito").remove()
        if (lives > 3){
            window.location.href = "game-over.html"
        }else{
            document.getElementById("l" + lives).src = "images/empty-heart.png"
            lives++
        }
        
    }
    
    var positionX = Math.floor(Math.random() * widht) - 90
    var positionY = Math.floor(Math.random() * height) - 90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY
        
    var mosquito = document.createElement('img')
    mosquito.src = "images/mosquito.png"
    mosquito.className = randomSize() + " " + randomSide()
    mosquito.style.left = positionX + "px"
    mosquito.style.top = positionY + "px"
    mosquito.style.position = "absolute"
    mosquito.id = "mosquito"
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function randomSize(){
    var classIndex = Math.floor(Math.random() * 3)
    switch(classIndex){
        case 0:
            return "mosquito1"
        case 1:
            return "mosquito2"
        case 2:
            return "mosquito3"
    }
}

function randomSide(){
    var classIndex = Math.floor(Math.random() * 2)
    switch(classIndex){
        case 0:
            return "sideA"
        case 1:
            return "sideB"
    } 
}
