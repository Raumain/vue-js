<template>
  <div>
    <div class="card" v-on:click="more(id + 1)">
      <div>
        <img :src="movie.Poster" />
        <star-rating
          class="rateOnHover"
          :rating="movie.Rating"
          :increment="0.1"
          :read-only="true"
          :show-rating="false"
        ></star-rating>
      </div>
      <p class="item">
        {{ movie.Title }} / {{ movie.Runtime }} / {{ movie.Genre }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: ['movie', 'id'],
  methods: {
    more: function (idmov) {
      this.$router.push('/movie/' + idmov);
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  height: 570px;
  width: 350px;
  cursor: pointer;
}

.card > div > img {
  width: 100%;
}

.card > div {
  position: relative;
}

p {
  padding: 1rem;
  max-width: 80%;
  margin: auto;
}

.rateOnHover {
  position: absolute;
  display: none;
  left: 50%;
  bottom: 0;
  margin: 1rem 0;
  transform: translate(-50%, 0);
}

.card:hover .rateOnHover {
  display: block;
}
</style>
