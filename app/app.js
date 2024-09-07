function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(!campoPesquisa){
        section.innerHTML = "<p class='estilizando-div'>Nada foi encontrado. Digite sua década favorita!</p>"
        return
    }
campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

for(let dado of playlist){
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
                    <h2 class="playwrite-de-grund">${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <iframe width="100%" height="400" src="${dado.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    `
    }
}
if(!resultados){
    resultados = "<p class='estilizando-div'>Nada foi encontrado</p>"
}
section.innerHTML = resultados

}


 // get both pupils
const pupils = document.querySelectorAll(".eye .pupil");
window.addEventListener("mousemove", (e) => {
  pupils.forEach((pupil) => {
    // get x and y postion of cursor
    var rect = pupil.getBoundingClientRect();
    var x = (e.pageX - rect.left) / 30 + "px";
    var y = (e.pageY - rect.top) / 30 + "px";
    pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
  });
});

  /*Customização menu ativo*/
// Seleciona todos os links do menu
const menuItems = document.querySelectorAll('.menu a');

// Adiciona um evento de clique para cada item do menu
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove a classe 'active' de todos os itens
        menuItems.forEach(link => link.classList.remove('active'));
        // Adiciona a classe 'active' ao item clicado
        item.classList.add('active');
    });
});
