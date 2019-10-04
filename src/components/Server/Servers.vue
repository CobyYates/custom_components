<template>
    <v-flex>
       <app-server
       v-for="server in servers"
       :server="server"></app-server>
    </v-flex>
</template>

<script>
import Server from './Server.vue';
export default {
    data: function() {
        return {
            servers: [
                {id: 1, status: 'Normal'},
                {id: 2, status: 'Critical'},
                {id: 3, status: 'Unknown'},
                {id: 4, status: 'Normal'}
            ]
        };
    },
    components: {
        appServer: Server
    }
}
</script>

<style scoped>
</style>