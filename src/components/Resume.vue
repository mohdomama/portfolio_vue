<template>
  <center>

       <pdf src="static/Resume.pdf" type="application/pdf" width="60%" height="60%" />

  </center>
</template>

<script>
import pdf from 'pdfvuer'

export default {
  components: {
    pdf
  },
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