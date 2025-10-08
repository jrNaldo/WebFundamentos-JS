(function(){
    window.addEventListener("scroll", positionImage)
    const dataParalaxContainer = [...document.querySelectorAll("[data-paralax]")]

    function isGettingOut(cont){
        return cont.getBoundingClientRect().top <= 0
    }

    function getNewPositionY(c){
        const v = parseFloat(c.getAttribute("data-p-velocity")) || 0.5
        return c.getBoundingClientRect().top * v * -1
    }

    function positionImage(){
        dataParalaxContainer.forEach( c => {
            let originalPositionY = getComputedStyle(c).backgroundPositionY
            let originalPositionX = getComputedStyle(c).backgroundPositionX
            console.log(originalPositionX, originalPositionY)
            if(isGettingOut(c)){
                c.style.backgroundPosition = `${originalPositionX} ${getNewPositionY(c)}px`
            }else{
                c.style.backgroundPosition = `${originalPositionX} 0px`   
            }
        })
    }

    positionImage()
})()