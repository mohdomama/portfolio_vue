<template>
  <h1> Hello World </h1>
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
