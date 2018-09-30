<template>

  <v-app light>
  

    <v-navigation-drawer
      fixed
      dark
      disable-resize-watcher
      :clipped="clipped"
      v-model="drawer"
      light
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


    

    <v-footer  app>
      <span>&copy; Apache License</span>
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

