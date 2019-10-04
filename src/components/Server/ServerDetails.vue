<template>
    <v-flex>
        <p v-if="!server">Please select a server</p>
        <p v-else>Server #{{ server.id }} selected, Status: {{ server.status }}</p>
        <hr>
        <v-btn class="my-4" width="200" color="success" @click="restartServer">Restart Server</v-btn><br>
        <v-btn class="mb-4" width="200" color="warning" @click="resetServer">Reset Server</v-btn><br>
        <v-btn color="error" width="200" @click="startServer">Start Server</v-btn>
    </v-flex>
</template>

<script>
    import { serverBus } from '../../main';

export default {
    data: function() {
        return {
            server: null
        }
    },
    methods: {
        restartServer() {
            this.server.status = "Restarting..."
        },
        resetServer() {
            this.server.status = "Reset"
        },
        startServer() {
            this.server.status = "Started"
        },
    },
        created() {
            serverBus.$on('serverSelected', (server) => {
                this.server = server;
            });
        }
}    
</script>

<style scoped>

</style>