<template>
  <div id="add">
    <form @submit="submitAdd" class="flex-form">
          <div class="flex-input">
            <label>Titre :</label>
            <input type="text" v-model="Title" required>
          </div>
          <div class="flex-input">
            <label>Poster (URL) :</label>
            <input type="url" v-model="Poster" required>
          </div>
          <div class="flex-input">
            <label>Genre :</label>
            <input type="text" v-model="Genre" required>
          </div>
          <div class="flex-input">
            <label>Langue :</label>
            <input type="text" v-model="Language" required>
          </div>
          <div class="flex-input">
            <label>Sortie :</label>
            <input type="text" v-model="Released" required>
          </div>
          <div class="flex-input">
            <label>Note :</label>
            <star-rating @rating-selected ="setRating" :rating="Rating" :increment="0.5" :show-rating="false"></star-rating>
          </div>
          <div class="flex-input">
            <label>Synopsis :</label>
            <textarea cols="35" v-model="Synopsis" required></textarea>
          </div>
            <h3>Realisateur</h3>
          <div class="flex-input">
            <label for="Director">Nom :</label>
            <input type="text" id="Director" v-model="Director" required>
          </div>
          <div class="flex-input">
            <label for="DirectorNationality">Nationalité :</label>
            <input type="text" id="DirectorNationality" v-model="DirectorNationality" required>
           </div>
           <div class="flex-input">
            <label for="DirectorBirthDay">Date de Naissance :</label>
            <input type="date" id="DirectorBirthDay" v-model="DirectorBirthDay" required>
          </div>

            <button>Modifier {{Title}}
              <span></span><span></span><span></span><span></span>
            </button>
        </form>
  </div>
</template>

<script>
export default {
  name: 'MovieAdd',
  data: function() {
    return {
      moviesList: window.moviesList,
      Title: this.Title,
      Poster: this.Poster,
      Released: this.Released,
      Rating: this.Rating,
      Genre: this.Genre,
      Language: this.Language,
      Director: this.Director,
      DirectorNationality: this.DirectorNationality,
      DirectorBirthDay: this.DirectorBirthDay,
      Synopsis: this.Synopsis
    }
  },
  methods: {
    submitAdd: function() {
      this.moviesList.Movies.push({
          Title: this.Title,
          Released: this.Released,
          Poster: this.Poster,
          Synopsis: this.Synopsis,
          Rating: this.Rating,
          Genre: this.Genre,
          Language: this.Language,
          Director: {
              Name: this.Director,
              Nationality: this.DirectorNationality,
              Birthday: this.DirectorBirthDay
          }
        }),
      this.$router.push({name: 'Movies'})
    },
    setRating: function(Rating){
      this.Rating = Rating;
    }
  }
}
</script>

<style scoped>
.flex-form {
    margin: 0 30%;
    display: flex;
    flex-direction: column;
    height: 100px;
}

.flex-input {
  text-align: left;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.flex-director {
  display: flex;
  flex-direction: column;
}

label {
  text-decoration: underline;
  font-weight: bold;
}

textarea {
    min-width: 70%;
    min-height: 100px;
    resize: none;
    overflow-y: scroll;
}

button {
  max-width: 100px;
  justify-content: center;
  margin: auto;
}
</style>