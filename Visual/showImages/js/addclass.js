(function(){
    window.addEventListener("scroll", showImage)

    function showImage(){
        // Elementos no DOM
        const sectionsCont = document.getElementsByClassName("content-section");
        const sectionsImagens = Array.from([...sectionsCont].slice(0, -1))
        const imagens = Array.from(document.querySelectorAll("img"))

        // Add class show
        if(sectionsImagens[0].getBoundingClientRect().top < innerHeight){
            const imagensSec01 = Array.from(imagens.slice(0,3))
            imagensSec01.forEach(img => {
                img.classList.add("show")
            })
        }
        if(sectionsImagens[1].getBoundingClientRect().top < innerHeight){
            const imagensSec02 = Array.from(imagens.slice(3,6))
            imagensSec02.forEach(img => {
                img.classList.add("show")
            })
            
        }
        if(sectionsImagens[2].getBoundingClientRect().top < innerHeight){
            const imagensSec03 = Array.from(imagens.slice(6))
            imagensSec03.forEach(img => {
                img.classList.add("show")
            })
            
        }


    }
    showImage()
})()