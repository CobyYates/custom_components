<template>
  <v-app>
    <v-content>
      <v-container>
        <app-header></app-header>
        <hr>
      <v-layout class="pt-6" justify="space-around">
        <v-flex xs-8>
          <servers v-for="(child, index) in 5" :child="child" :status="status" @statusWasReset="status = $event"></servers>
        </v-flex>

        <v-flex xs-4>
          <v-btn class="mb-4" color="success" @click="refreshServers">Restart Servers</v-btn>
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
  data: function() {
      return {
        status: 'Critical'
      };
  },
  methods: {
    refreshServers() {
      this.status = 'Restarting...'
    }
  },
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