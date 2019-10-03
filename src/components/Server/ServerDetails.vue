<template>
    <v-flex>
    </v-flex>
</template>

<script>

    export default {
        methods: {
            changeTitle() {
                this.status = 'Vue Wizards';
                bus.$emit('titleChanged', 'Vue Wizards');
            }
        }
    }
</script>

<style scoped>

</style>