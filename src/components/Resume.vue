<template>
    <embed src="https://mohdomama.github.io/Resume_Overleaf/resume.pdf" type="application/pdf" width="100%" height="100%"/>

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