<template>
    <v-flex>
        <v-banner max-width="90%" :sticky="sticky" :single-line="singleLine" :icon="icon"
          :color="color" :icon-color="iconColor" :elevation="elevation">

          Server #{{ server.id }}

        <template v-slot:actions>
          <v-btn text color="teal" @click="serverSelected">Select</v-btn>
        </template>

        </v-banner>
    </v-flex>
</template>

<script>
import { serverBus } from '../../main';
    export default {
        props: ['server'],
        methods: {
            serverSelected() {
                serverBus.$emit('serverSelected', this.server);
            }
        }
    }
</script>

<style scoped>
</style>