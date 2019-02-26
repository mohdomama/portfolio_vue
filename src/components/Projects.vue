<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <blockquote>
          &#8220;Projects will be added soon! Visit Github for now. Link is in the footer.&#8221;
          <footer>
            <small> 
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