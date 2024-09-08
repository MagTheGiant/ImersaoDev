let dados = [
    {
        titulo : "O Segredo de Brokeback Mountain",
        descricao : "O Segredo de Brokeback Mountain é um drama romântico de uma jornada emocional e complexa no coração do Velho Oeste. A história gira em torno de Ennis Del Mar e Jack Twist, dois jovens vaqueiros que se conhecem e se apaixonam durante um verão trabalhando em um remoto rancho.",
        link : "https://letterboxd.com/film/brokeback-mountain/",
        diretor : "Ang Lee",
        elenco: "Jake Gyleenhall", 
        elenco : "Heath Ledger", 
        elenco : "Michelle Willians", 
        elenco : "Anne Hathaway",
        ano : "2006",
        genero : "Drama",
        genero : "Romance"
    },
    {
        titulo : "Sociedade dos Poetas Mortos",
        descricao : "Um clássico da literatura americana, Sociedade dos Poetas Mortos é um drama que explora a importância da educação, da individualidade e da busca pela própria voz. O filme acompanha um grupo de alunos em um internato tradicional e a influência de um professor carismático e não convencional.",
        link : "https://letterboxd.com/film/dead-poets-society/",
        diretor : "Peter Weir",
        elenco: "Robin Willians", 
        elenco : "Robert Sean Leonard", 
        elenco : "Ethan Hawke",
        ano : "1989",
        genero : "Drama"
    }, 
    {
        titulo : "Nunca Fui Santa",
        descricao : "Uma comédia satírica sobre uma jovem líder de torcida que é enviada para um centro de reabilitação para curar sua homossexualidade, onde ela questiona sua identidade e encontra uma nova comunidade.",
        link : "https://letterboxd.com/film/but-im-a-cheerleader/",
        diretor : "Jamie Babbit",
        elenco: "Natasha Lyonne", 
        elenco : "Clea Duvall",
        ano : "1999",
        genero : "Comedia",
        genero : "Romance"
    },
    {
        titulo : "Garotos de Programa",
        descricao : "Garotos de Programa é um drama que explora a vida de jovens envolvidos na prostituição masculina em uma grande cidade. O filme aborda temas como exploração, sexualidade e a busca por sobrevivência em um mundo hostil.",
        link : "https://letterboxd.com/film/my-own-private-idaho/",
        diretor : "Gus Van Sant",
        elenco : "River Phoenix",
        elenco : "Keanu Reeves",
        ano : "1991",
        genero : "Drama"
    },
    {
        titulo : "Adeus Minha Concubina",
        descricao : "Adeus Minha Concubina é um épico chinês que narra a história de dois atores e ópera de Pequim, desde a infância até a Revolução Cultural. A amizade e o amor entre os dois são colocados à prova pelas turbulências políticas da China, resultando em uma jornada emocionante e trágica.",
        link : "https://letterboxd.com/film/farewell-my-concubine/",
        diretor : "Chen Kaige",
        elenco : "Leslie Cheung",
        elenco : "Zhang Fengyi",
        ano :  "1993",
        genero : "Drama"
    },
    {
        titulo : "O Talentoso Ripley",
        descricao : "O Talentoso Ripley é um thriller psicológico que acompanha a obsessão de Tom Ripley por Dickie Greenleaf, um jovem rico e charmoso. Tom se infiltra na vida de Dickie, desencadeando uma série de eventos que culminam em um jogo mortal de gato e rato.",
        link : "https://letterboxd.com/film/the-talented-mr-ripley/",
        diretor : "Anthony Minghella",
        elenco : "Matt Demon",
        elenco : "Gwyneth Paltrow",
        elenco : "Jude Law",
        ano : "1999",
        genero : "Crime",
        genero : "Drama",
        genero : "Thriller"
    },
    {
        titulo : "Café da Manhã em Plutão",
        descricao : "Café da Manhã em Plutão é um drama biográfico e musical que conta a história de Patrick Kitten Braden, uma jovem transexual em Dublin nos anos 1990. O filme explora temas como identidade de gênero, amizade e a busca por aceitação, tudo embalado por uma trilha sonora vibrante.",
        link : "https://letterboxd.com/film/breakfast-on-pluto/",
        diretor : "Neil Jordan",
        elenco : "Cillian Murphy",
        ano : "2005",
        genero : "Drama",
        genero : "Comedia"
    },
    {
        titulo : "O Retrato de Dorian Gray",
        descricao : "O Retrato de Dorian Gray é uma adaptação cinematográfica do clássico romance de Oscar Wilde. Ambientado na Londres vitoriana, o filme acompanha a história de Dorian Gray, um jovem belo e narcisista que faz um pacto com o diabo, condenando sua alma em troca da eterna juventude. À medida que ele se entrega a uma vida de prazeres e excessos, seu retrato revela os horrores de sua decadência moral.",
        link : "https://letterboxd.com/film/dorian-gray-2009/",
        diretor : "Oliver Parker",
        elenco : "Ben Barnes",
        elenco : "Colin Firth",
        elenco : "Ben Chaplin",
        ano : "2009",
        genero : "Thriller",
        genero : "Fantasia",
        genero: "Drama"
    },
    {
        titulo : "A Criada",
        descricao : "A Criada é um thriller psicológico sul-coreano que explora temas de manipulação, desejo e identidade. A história se concentra na relação complexa entre uma jovem criada e a rica herdeira que ela serve, revelando um jogo psicológico intenso e cheio de reviravoltas.",
        link : "https://letterboxd.com/film/the-handmaiden/",
        diretor : "Park Chan-wook",
        elenco : "Kim Min-hee",
        elenco : "Kim Tae-ri",
        ano : "2016",
        genero : "Thriller",
        genero : "Romance",
        genero : "Drama"
    },
    {
        titulo : "Moonlight: Sob a Luz do Luar",
        descricao : "Moonlight: Sob a Luz do Luar é um drama que explora a masculinidade negra e a identidade homossexual através da vida de Chiron, um jovem que cresce em três períodos distintos em Miami. O filme aborda temas como a violência, o amor e a busca por si mesmo.",
        link : "https://letterboxd.com/film/moonlight-2016/",
        diretor : "Barry Jenkins",
        elenco : "Trevante Rhodes",
        elenco : "André Holland",
        elenco : "Ashton Sanders",
        elenco : "Alex R. Hibbert",
        ano : "2016",
        genero : "Drama"
    },
    {
        titulo : "Retrato de uma Jovem em Chamas",
        descricao : "Retrato de uma Jovem em Chamas é um drama romântico histórico que se passa na França do século XVIII. A história acompanha a pintora Marianne, que é contratada para fazer um retrato de casamento de Héloïse, uma jovem que se recusa a posar. Enquanto se escondem para pintar em segredo, as duas mulheres desenvolvem um intenso e proibido romance.",
        link : "https://letterboxd.com/film/portrait-of-a-lady-on-fire/",
        diretor : "Céline Sciamma",
        elenco : "Noémie Merlant",
        elenco : "Adèle Haenal",
        ano : "2019",
        genero : "Histórico",
        genero : "Drama",
        genero : "Romance"
    },
    {
        titulo : "Clube da Luta para Meninas",
        descricao : "Clube de Luta para Meninas é uma comédia irreverente que acompanha duas adolescentes que decidem tomar as rédeas de suas vidas e transformar sua escola em um campo de batalha para perderem a virgindade, utilizando o clube de luta como arma para atrair garotas bonitas.",
        link : "https://letterboxd.com/film/bottoms/",
        diretor : "Emma Seligman",
        elenco : "Rachel Sennott",
        elenco : "Ayo Edebiri",
        ano : "2023",
        genero : "Comedia"
    }
]

