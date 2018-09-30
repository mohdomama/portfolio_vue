<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img :src="logo_url" alt="Vuetify.js" class="mb-5">
        <blockquote>
          &#8220;This is the basic scaffolding of the site&#8221;
          <footer>
            <small>
              <em>&mdash;Thanks to Areeb Jamal</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
    <vue-particles
        color="#c1e1de"
        :particleOpacity="0.7"
        :particlesNumber="100"
        shapeType="circle"
        :particleSize="3"
        linesColor="#c1e1de"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.3"
        :linesDistance="200"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
    </vue-particles>
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

<style scope>
#particles-js { position: absolute; background-size: cover; top: 0; bottom: 0; left: 0; right: 0; overflow-y: hidden; z-index: 0; }
</style>