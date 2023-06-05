<template>
    <div id="edit">
      <div class="pageTitle">
        <h2> Modification de "{{Title}}" </h2>
      </div>
        <form @submit="submitEdit" class="flex-form">
          <div class="flex-input">
            <label>Titre :</label>
            <input type="text" v-model="Title">
          </div>
          <div class="flex-input">
            <label>Langue :</label>
            <input type="text" v-model="Language">
          </div>
          <div class="flex-input">
            <label>Sortie :</label>
            <input type="text" v-model="Released">
          </div>
          <div class="flex-input">
            <label>Poster (URL) :</label>
            <input type="url" v-model="Poster">
          </div>
          <div class="flex-input">
            <label>Genre :</label>
            <input type="text" v-model="Genre">
          </div>
          <div class="flex-input">
            <label>Note :</label>
            <star-rating @rating-selected ="setRating" :rating="Rating" :increment="0.5" :show-rating="false" ></star-rating>
          </div>
          <div class="flex-input">
            <label>Synopsis :</label>
            <textarea cols="35" v-model="Synopsis"></textarea>
          </div>
            <h3 style="text-decoration: underline;">Realisateur</h3>
          <div class="flex-input">
            <label for="Director">Nom :</label>
            <input type="text" id="Director" v-model="Director">
          </div>
          <div class="flex-input">
            <label for="DirectorNationality">Nationalité :</label>
            <input type="text" id="DirectorNationality" v-model="DirectorNationality">
           </div>
           <div class="flex-input">
            <label for="DirectorBirthDay">Date de Naissance :</label>
            <input type="date" id="DirectorBirthDay" v-model="DirectorBirthDay">
          </div>

            <button>Enregistrer
            </button>
        </form>
    </div>
</template>

<script>

export default {
  data: function() {
    return {
      id: this.$route.params.id - 1,
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
    submitEdit() {
      this.moviesList.Movies[this.id].Title = this.Title,
      this.moviesList.Movies[this.id].Poster = this.Poster,
      this.moviesList.Movies[this.id].Synopsis = this.Synopsis,
      this.moviesList.Movies[this.id].Genre = this.Genre,
      this.moviesList.Movies[this.id].Rating = this.Rating,
      this.moviesList.Movies[this.id].Language = this.Language,
      this.moviesList.Movies[this.id].Director.Name = this.Director,
      this.moviesList.Movies[this.id].Director.Nationality = this.DirectorNationality,
      this.moviesList.Movies[this.id].Director.Birthday = this.DirectorBirthDay,
      this.moviesList.Movies[this.id].Released = this.Released,
      this.$router.push({name: 'Details'})
    },
    setRating: function(Rating){
      this.Rating = Rating;
    }
  },
  mounted() {
    this.Title = this.moviesList.Movies[this.id].Title,
    this.Poster = this.moviesList.Movies[this.id].Poster,
    this.Synopsis = this.moviesList.Movies[this.id].Synopsis,
    this.Genre = this.moviesList.Movies[this.id].Genre,
    this.Rating = this.moviesList.Movies[this.id].Rating,
    this.Language = this.moviesList.Movies[this.id].Language,
    this.Director = this.moviesList.Movies[this.id].Director.Name,
    this.DirectorNationality = this.moviesList.Movies[this.id].Director.Nationality,
    this.DirectorBirthDay = this.moviesList.Movies[this.id].Director.Birthday,
    this.Released = this.moviesList.Movies[this.id].Released
  }
}
</script>

<style scoped>
.flex-form {
    margin: 0 30%;
}

textarea {
    min-width: 70%;
    min-height: 100px;
    resize: none;
    overflow-y: scroll;
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
</style>