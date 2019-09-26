<template>
  <v-app>
    <v-content>
      <v-container>
        <app-header></app-header>
        <hr>
      <v-layout class="pt-6" justify="space-around">
        <v-flex xs-6>
          <servers></servers>
        </v-flex>

        <v-flex xs-6>
          <app-server-details></app-server-details>
        </v-flex>
      </v-layout>
    <app-footer></app-footer>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

export default {
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    }

</script>

<style scoped>
</style>