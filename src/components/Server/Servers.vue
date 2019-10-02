<template>
    <v-flex>
        <v-banner max-width="500" :sticky="sticky" :single-line="singleLine" :icon="icon"
          :color="color" :icon-color="iconColor" :elevation="elevation">

          Server #{{ index }} - Status {{ status }}

          <template v-slot:actions>
            <v-btn @click="changeStatus" text color="teal accent-4">
              Change Status
            </v-btn>
          </template>
        </v-banner>

    </v-flex>
</template>

<script>
 export default {
     props: ['status'],
    data: function() {
        return {
            status: 'Critical'
        }
    },
    methods: {
        changeStatus() {
            this.status = 'Normal';
        }
    }
}
</script>

<style scoped>
</style>