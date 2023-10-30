function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light') // .toggle realiza a função abaixo:

/*
    if (html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }
*/
}

/* 

    //  Para realizar a troca da imagem pelo JavaScript:
    
    //  Pegar a tag img:
        const img = document.querySelector("#profile img")

    //  Substituir a imagem ao trocar o modo (claro e escuro):
        
        if (html.classList.contains('light')) {
        //  Se tiver no modo claro, adiciona a imagem clara
        img.setAttribute("src", "./assets/avatar-light.png")
        

        } else {
        //  Se tiver SEM modo claro, mantém a imagem normal:
        img.setAttribute("src", "./assets/avatar.png")
        }
*/