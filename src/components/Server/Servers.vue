<template>
    <v-flex>
        <v-banner max-width="90%" :sticky="sticky" :single-line="singleLine" :icon="icon"
          :color="color" :icon-color="iconColor" :elevation="elevation">

          Server #{{ child }} - Status: {{ status }}

          <template v-slot:actions>
            <v-btn @click="changeStatus" text color="teal accent-4">
              Change Status
            </v-btn>

            <v-btn @click="resetStatus" text color="teal accent-4">
              Reset Server
            </v-btn>
          </template>
        </v-banner>
    </v-flex>
</template>

<script>

 export default {
     props: ['status', 'child'],
     
    data: function() {
        return {
            status: 'Critical'
        }
    },
    methods: {
        changeStatus() {
            this.status = 'Normal';
        },
        resetStatus() {
            this.status = 'Stable';
            this.$emit('statusWasReset', this.status);
    }
    },
    created() {
        bus.$on('titleChanged', (data) => {
            this.status = data;
        });
    }
}
</script>

<style scoped>
</style>