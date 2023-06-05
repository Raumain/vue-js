<template>
  <div class="Movies">
    <div class="search">
      <input
        type="text"
        id="search"
        v-model="search"
        placeholder="Search a movie"
      />
    </div>

    <div class="movie-card-wrapper">
      <MovieCard
        v-for="(movie, id) in searchMovie"
        :key="id"
        :movie="movie"
        :id="id"
      ></MovieCard>
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';

export default {
  name: 'moviesHome',
  components: {
    MovieCard,
  },
  data: function () {
    return {
      moviesList: window.moviesList,
      search: '',
      searchBy: 'all',
    };
  },
  computed: {
    searchMovie() {
      return this.moviesList.Movies.filter(
        (movie) =>
          movie.Title.toLowerCase().includes(this.search.toLowerCase()) ||
          movie.Director.Name.toLowerCase().includes(
            this.search.toLowerCase()
          ) ||
          movie.Released.toLowerCase().includes(this.search.toLowerCase()) ||
          movie.Director.Nationality.toLowerCase().includes(
            this.search.toLowerCase()
          ) ||
          movie.Genre.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.movie-card-wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.toLeft {
  text-align: left;
  text-decoration: underline;
  margin-left: 5rem;
}

.search {
  position: relative;
  align-items: stretch;
  justify-content: center;
  margin: 2rem;
}

input {
  padding: 4px 12px;
  color: rgba(0, 0, 0, 0.7);
  border: 2px solid #334e70;
  transition: 0.15s all ease-in-out;
  background: white;
  height: 25px;
  width: 300px;
  outline: none;
}

#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  margin: 0 auto 4rem auto;
  border: 2px #334e70 solid;
  border-radius: 10px;
  background-color: #334e70;
}

.genres {
  display: flex;
  flex-wrap: wrap;
}

.genre {
  width: 100px;
  margin: 1rem 3rem;
  border: 2px white solid;
  border-radius: 10px;
  color: white;
}
</style>
