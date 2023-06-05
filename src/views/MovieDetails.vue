<template>
  <div>
    <div class="movie-details">
      <div>
        <img :src="moviesList.Movies[id].Poster" />
      </div>
      <div class="meta">
        <h1 style="text-align: left">{{ moviesList.Movies[id].Title }}</h1>

        <p><strong>Sortie</strong> : {{ moviesList.Movies[id].Released }}</p>

        <p><strong>Langue</strong> : {{ moviesList.Movies[id].Language }}</p>

        <p><strong>Genre</strong> : {{ moviesList.Movies[id].Genre }}</p>
        <div>
          <p><strong>Réalisteur</strong> :</p>
          <ul>
            <li>
              {{ moviesList.Movies[id].Director.Name }} ({{
                moviesList.Movies[id].Director.Birthday
              }})
            </li>
            <li>{{ moviesList.Movies[id].Director.Nationality }}</li>
          </ul>
        </div>

        <p class="rate">
          <strong>Note</strong> :
          <star-rating
            :rating="moviesList.Movies[id].Rating"
            :increment="0.1"
            :read-only="true"
            :show-rating="false"
          ></star-rating>
        </p>

        <div class="buttons">
          <button type="submit" v-on:click="edit()">
            <span> Editer </span>
          </button>
          <button type="submit" v-on:click="del()">
            <span> Supprimer </span>
          </button>
        </div>
      </div>
    </div>
    <div class="synopsis">
      <p><strong>Synopsis</strong> : {{ moviesList.Movies[id].Synopsis }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieDetails',
  data: function () {
    return {
      id: this.$route.params.id - 1,
      moviesList: window.moviesList,
    };
  },
  methods: {
    edit() {
      this.$router.push({
        name: 'EditMovie',
        params: { id: this.$route.params.id },
      });
    },
    del() {
      this.moviesList.Movies.splice(this.id, 1);
      this.$router.push({ name: 'Movies' });
    },
  },
};
</script>

<style scoped>
.movie-details {
  margin: 0 30%;
}

div.meta {
  position: relative;
  display: flex;
  max-width: 600px;
  flex-direction: column;
  text-align: justify;
  margin-left: 1rem;
}

div.synopsis {
  margin: auto;
  width: 100%;
  max-width: 1000px;
  text-align: justify;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

button {
  width: 100px;
  height: 50px;
}

.rate {
  margin-bottom: 4rem;
}

img {
  height: 700px;
  margin-right: 5rem;
}

@media (max-width: 1140px) {
  .movie-details {
    align-items: center;
    margin: 0;
  }

  img {
    margin: 0;
  }
}
</style>
