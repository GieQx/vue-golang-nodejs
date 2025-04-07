const app   = Vue.createApp({
    data() {
        return {
            showBooks: true,
            url: "https://google.com",
            books: [
                {
                    title: 'Noli Me Tangere',
                    author: 'José Rizal',
                    img: 'assets/1.jpg',
                    isFav: false
                },
                {
                    title: 'The Jungle Book',
                    author: 'Tarzan',
                    img: 'assets/2.jpg',
                    isFav: false
                },
                {
                    title: 'Harry Potter',
                    author: 'JK Rowling',
                    img: 'assets/3.jpg',
                    isFav: false
                }
            ],
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleisFav(book) {
            book.isFav = !book.isFav;
        }
    }
})

app.mount('#app')