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
        pic: 'https://i.picsum.photos/id/667/200/300.jpg?hmac=nFrrPWfmtwoDnfNPyXPB8GuxdU_6ic8_cKQm7oyXw1Y',
        data: '07/08/2020',
        text: 'lorem lorem lorem',
        img: 'https://i.picsum.photos/id/758/500/300.jpg?hmac=Hho2NXOXzla9Euf67--KssqEbKNuI02m4LekxfXRyvk',
        like: '47'
    },
    {
        name: 'Zorro Zarro',
        pic: 'https://i.picsum.photos/id/514/200/300.jpg?hmac=2SFAKrM0w5MkU7I_tQM9mq1m6POUDSPrTYu5tb5Sqlg',
        data: '09/12/2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: 'https://i.picsum.photos/id/212/500/300.jpg?hmac=kGG5x0AzfRQapGOPUYqQtNgk6pvUNVbGDDjBCY6hJlg',
        like: '52'
    }
];