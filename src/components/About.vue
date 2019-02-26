<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <blockquote>
          &#8220;Yesterday I was clever, so I wanter to change the world. Today I am wise, so I am changing myself! &#8221;
          <footer>
            <small> 
              <em>&mdash; Maulana Rumi</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      logo_url: this.$urls.staticUrls.blog
    }
  },
  head: {
    title () {
      return {
        inner: this.$route.name
      }
    }
  }
}
</script>