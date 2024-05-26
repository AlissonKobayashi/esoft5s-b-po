function criarPagina() {
    window.title = 'Página do Pokémon Squirtle'

    let header = document.querySelector('header')
    header.id = 'header'
    const h1 = document.createElement('h1')
    h1.innerText = 'Squirtle'
    document.querySelector('header').appendChild(h1)

    let ul = document.createElement('ul')
    document.querySelector('nav').appendChild(ul)

    let li = document.createElement('li')
    let a = document.createElement('a')
    a.href = '#info-squirtle'
    a.innerText = 'Informações sobre Squirtle'
    li.appendChild(a)
    ul.appendChild(li)

    li = document.createElement('li')
    a = document.createElement('a')
    a.href = '#caracteristicas'
    a.innerText = 'Características'
    li.appendChild(a)
    ul.appendChild(li)

    li = document.createElement('li')
    a = document.createElement('a')
    a.href = '#curiosidades'
    a.innerText = 'Curiosidades'
    li.appendChild(a)
    ul.appendChild(li)

    li = document.createElement('li')
    a = document.createElement('a')
    a.href = '#artigo-squirtle'
    a.innerText = 'Artigo sobre Squirtle'
    li.appendChild(a)
    ul.appendChild(li)

    li = document.createElement('li')
    a = document.createElement('a')
    a.href = '#recursos'
    a.innerText = 'Recursos Adicionais'
    li.appendChild(a)
    ul.appendChild(li)

    li = document.createElement('li')
    a = document.createElement('a')
    a.href = '#evolucao'
    a.innerText = 'Evolução'
    li.appendChild(a)
    ul.appendChild(li)

    let section = document.createElement('section')
    section.id = 'info-squirtle'
    section.ariaLabelledby = 'info-squirtle-label'

    let h2 = document.createElement('h2')
    h2.id = 'info-squirtle-label'
    h2.innerText = 'Informações sobre Squirtle'
    section.appendChild(h2)

    let div = document.createElement('div')
    div.id = 'imagensDaInfo'
    let img = document.createElement('img')
    img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
    img.alt = 'Squirtle - Pokémon do tipo Água'
    div.appendChild(img)

    img = document.createElement('img')
    img.id = 'squirtle-pulando'
    img.src = 'https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png'
    img.alt = 'Squirtle - Pokémon do tipo Água'
    div.appendChild(img)

    section.appendChild(div)

    let p = document.createElement('p')
    p.innerText = 'Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.'
    section.appendChild(p)

    document.querySelector('main').appendChild(section)

    section = document.createElement('section')
    section.id = 'caracteristicas'
    section.ariaLabelledby = 'caracteristicas-label'
    h2 = document.createElement('h2')
    h2.id = 'caracteristicas-label'
    h2.innerText = 'Características'
    section.appendChild(h2)
    p = document.createElement('p')
    p.innerText = ' Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.'
    section.appendChild(p)
    document.querySelector('main').appendChild(section)

    section = document.createElement('section')
    section.id = 'curiosidades'
    section.ariaLabelledby = 'curiosidades-label'
    h2 = document.createElement('h2')
    h2.id = 'curiosidades-label'
    h2.innerText = 'Curiosidades'
    section.appendChild(h2)
    ul = document.createElement('ul')
    section.appendChild(ul)
    li = document.createElement('li')
    li.innerText = 'Squirtle é um dos Pokémon mais populares e adoráveis.'  
    ul.appendChild(li)
    li = document.createElement('li')
    li.innerText = 'Seu nome deriva das palavras "squirrel" (esquilo) e "turtle" (tartaruga).'
    ul.appendChild(li)
    li = document.createElement('li')
    li.innerText = 'Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon.'
    ul.appendChild(li)
    document.querySelector('main').appendChild(section)

    let article = document.createElement('article')
    article.id = 'artigo-squirtle'
    article.ariaLabelledby = 'artigo-squirtle-label'
    h2 = document.createElement('h2')
    h2.id = 'artigo-squirtle-label'
    h2.innerText = 'Squirtle: O Amigo Aquático'
    article.appendChild(h2)
    p = document.createElement('p')
    p.innerText = 'Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo.  Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.'
    article.appendChild(p)
    p = document.createElement('p')
    p.innerText = 'Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.'
    article.appendChild(p)
    p = document.createElement('p')
    p.innerText = 'Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.'
    article.appendChild(p)
    document.querySelector('main').appendChild(article)

    section = document.createElement('section')
    section.id = 'recursos'
    section.ariaLabelledby = 'recursos-label'
    h2 = document.createElement('h2')
    h2.id = 'recursos-label'
    h2.innerText = 'Recursos Adicionais'
    section.appendChild(h2)
    ul = document.createElement('ul')
    section.appendChild(ul)
    li = document.createElement('li')
    a = document.createElement('a')
    a.href = 'https://www.pokemon.com/br/pokedex/squirtle'
    a.target = '_blank'
    a.innerText = 'Pokédex - Squirtle'
    li.appendChild(a)
    ul.appendChild(li)
    li = document.createElement('li')
    a = document.createElement('a')
    a.href = 'https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)'
    a.target = '_blank'
    a.innerText = 'Bulbapedia - Squirtle'
    li.appendChild(a)
    ul.appendChild(li)
    document.querySelector('main').appendChild(section)

    section = document.createElement('section')
    section.id = 'evolucao'
    section.ariaLabelledby = 'evolucao-label'
    h2 = document.createElement('h2')
    h2.id = 'evolucao-label'
    h2.innerText = 'Evoluções'
    section.appendChild(h2)
    ul = document.createElement('ul')
    section.appendChild(ul)
    li = document.createElement('li')
    a = document.createElement('a')
    figure = document.createElement('figure')
    img = document.createElement('img')
    img.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png'
    img.alt = 'Squirtle'
    figure.appendChild(img)
    figcaption = document.createElement('figcaption')
    figcaption.innerText = '1. Squirtle'
    figure.appendChild(figcaption)
    a.appendChild(figure)
    li.appendChild(a)
    ul.appendChild(li)

    li = document.createElement('li')
    a = document.createElement('a')
    figure = document.createElement('figure')
    img = document.createElement('img')
    img.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png'
    img.alt = 'Wartortle'
    figure.appendChild(img)
    figcaption = document.createElement('figcaption')
    figcaption.innerText = '2. Wartortle'
    figure.appendChild(figcaption)
    a.appendChild(figure)
    li.appendChild(a)
    ul.appendChild(li)

    li = document.createElement('li')
    a = document.createElement('a')
    figure = document.createElement('figure')
    img = document.createElement('img')
    img.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png'
    img.alt = 'Blastoise'
    figure.appendChild(img)
    figcaption = document.createElement('figcaption')
    figcaption.innerText = '3. Blastoise'
    figure.appendChild(figcaption)
    a.appendChild(figure)
    li.appendChild(a)
    ul.appendChild(li)

    document.querySelector('main').appendChild(section)
    
   
    footer = document.querySelector('footer') 
    p = document.createElement('p')
    p.ariaLabel = 'Copyright'
    p.innerText = '© 2024 Página do Pokémon Squirtle. Todos os direitos reservados.'
    footer.appendChild(p)
    p = document.createElement('p')
    a = document.createElement('a')
    a.href = '#header'
    a.innerText = 'Voltar para o topo'
    p.appendChild(a)
    footer.appendChild(p)
    p = document.createElement('p')
    a = document.createElement('a')
    a.href = 'mailto:contatos@squirtlepage.com'
    a.innerText = 'Contato via e-mail'
    p.appendChild(a)
    footer.appendChild(p)
    p = document.createElement('p') 
    a = document.createElement('a')
    a.href = 'tel: +5555555555'
    a.innerText = 'Telefone: (55) 5555-5555'
    p.appendChild(a)
    footer.appendChild(p)
}