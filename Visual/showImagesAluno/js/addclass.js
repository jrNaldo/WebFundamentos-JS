(function(){
    window.addEventListener("scroll", showImage)
    function addClassShow(img){
        if(img.getBoundingClientRect().top < innerHeight && !img.classList.contains("show")){
            img.classList.add("show")
            img.removeAttribute("data-addclass-on-scroll-delay")
            img.removeAttribute("data-addclass-on-scroll")
        }
        
    }

    function acharImagem(sectionsImagens){
        sectionsImagens.forEach(sections => {
            const cards = sections.querySelectorAll(".card")
            cards.forEach(card =>{
                const imagens = Array.from(card.querySelectorAll("img"))
                imagens.forEach(img => {
                    addClassShow(img)
                })
            })
        })
    }

    function showImage(){
        const todasSections = Array.from(document.querySelectorAll(".content-section"))
        const sectionsImagens = Array.from(todasSections.slice(0,3))
        const resutado = acharImagem(sectionsImagens)
        return resutado
    }
    showImage()
})()