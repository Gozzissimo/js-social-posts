// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:

// - Creiamo il nostro array di oggetti che rappresentano ciascun post.Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine(non tutti i post devono avere una immagine), numero di likes.

// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es.Unsplash(https://unsplash.it/300/300?image=<id>)

// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.

// BONUS

// 1. Formattare le date in formato italiano(gg / mm / aaaa)
// 2. Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente(es.Luca Formicola > LF).
// 3. Al click su un pulsante “Mi Piace” di un post, incrementare il contatore di like al post e cambiare colore al testo del bottone.


// 1. creao l'array di post
const feed = [
    {
        name: 'Sancho Panza',
        proPic: 200,
        date: new Date,
        text: 'Oggi non posto immagini',
        img: 150,
        like: 47
    },
    {
        name: 'Carlo Carli',
        proPic: '',
        date: new Date(),
        text: 'Oggi metto imaagini a caso',
        img: '',
        like: 12
    },
    {
        name: 'Zorro Zarro',
        proPic: 40,
        date: new Date(),
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: 20,
        like: 52
    }
];

// 2. container
const container = document.getElementById('container');


// 3. Creo un ciclo per stampare i post in pagina
for (let i = 0; i < feed.length; i++) {
    const element = feed[i];

    const post = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="https://unsplash.it/300/300?image=${element.proPic}" alt="${element.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.name}</div>
                        <div class="post-meta__time">${element.date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">
                ${element.text}
            </div>
            <div class="post__image">
                <img src="https://unsplash.it/600/300?image=${element.img}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${element.like}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;

    container.innerHTML += post;
}
