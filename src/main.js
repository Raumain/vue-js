import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import StarRating from 'vue-star-rating'

createApp().component('star-rating', StarRating);

createApp().config.productionTip = false

window.moviesList = {
    Movies: [
        {
            Title: "Star Wars: Episode IV - A New Hope",
            Released: "25 May 1977",
            Runtime: "121 min",
            Language: "English",
            Director: {
                Name: "George Lucas",
                Nationality: "Américain",
                Birthday: "14 mai 1944"
            },
            Genre: "Action, Adventure, Fantasy",
            Poster: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
            Rating: 8.6,
            Synopsis: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ..."
        },
        {
            Title: "Avengers: Endgame",
            Released: "26 Apr 2019",
            Runtime: "181 min",
            Language: "English",
            Director: {
                Name: "Anthony Russo, Joe Russo",
                Nationality: "Américain",
                Birthday: "20 Décembre 1970"
            },
            Genre: "Action, Adventure, Drama",
            Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
            Rating: 8.4,
            Synopsis: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
        },
        {
            Title: "Alien",
            Released: "22 Jun 1979",
            Runtime: "92 min",
            Genre: " Horreur, Mystère",
            Director: {
                Name: "James Cameron",
                Nationality: "Américain",
                Birthday: "21 Avril 1994"
            },
            Language: "Anlgais",
            Poster: "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
            Rating: 3.5,
            Synopsis: "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun"
        },
        {
            Title: "Ca",
            Released: "8 septembre 2017",
            Runtime: "135 min",
            Genre: "Horreur, Mystère, Thriller",
            Director: {
                Name: "Andy Muschietti",
                Nationality: "argentin",
                Birthday: "26 aout 1973"
            },
            Language: "Anglais",
            Poster: "https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SX300.jpg",
            Rating: 3,
            Synopsis: "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town"
        },
    ]
}

new createApp({
    router,
    render: h => h(App)
}).$mount('#app')
