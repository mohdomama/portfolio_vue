<template>

  <v-app light>
  

    <v-navigation-drawer
      fixed
      dark
      disable-resize-watcher
      :clipped="clipped"
      v-model="drawer"
      app
    >
      <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Menu
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list dense class="pt-0">
      <v-list-tile v-for="item in items" :key="item.title" router v-bind:to="item.action">
          <v-icon class="blue--text">{{ item.icon }}</v-icon>
        <v-list-tile-content>
          <v-list-tile-title> &nbsp; {{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed app :clipped-left="clipped" class="blue lighten" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" dark></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>


    

    <v-footer fixed app class="grey lighten-2">
      <a href= "https://twitter.com/padfoot7_"style="font-size: 150%;"> <span class="fab fa-twitter"> &nbsp;  </span> </a>  
      <a href= "https://reddit.com/user/padfoot_7" style="font-size: 150%;"> <span class="fab fa-reddit"> &nbsp;  </span> </a>  
      <a href= "https://www.linkedin.com/in/mohdomama" style="font-size: 150%;"> <span class="fab fa-linkedin"> &nbsp;  </span> </a>  
      <a href= "https://github.com/mohdomama" style="font-size: 150%;"> <span class="fab fa-github"> &nbsp;  </span> </a> 
      <a href= "https://plus.google.com/+MohdOmama" style="font-size: 150%;"> <span class="fab fa-google-plus"> &nbsp;  </span> </a> 
      <a href= "https://facebook.com/mohdomama" style="font-size: 150%;"> <span class="fab fa-facebook-f"> &nbsp; </span> </a> 
    </v-footer>

  </v-app>

</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'dashboard', title: 'Home', action: 'home' },
          { icon: 'rss_feed', title: 'Blog', action: 'blog' },
          { icon: 'file_download', title: 'Downloads', action: 'downloads' },
          { icon: 'description', title: 'Resume', action: 'resume' },
          { icon: 'info', title: 'About', action: 'about' }
        ]
      }
    },
    computed: {
      title () {
        return this.$route.name
      }
    }
  }
</script>

