<template>
    <v-flex>
        <v-card class="mx-auto" max-width="400" tile>
            <v-list-item v-for="index in 5">
                <v-list-item-content>
                    <v-list-item-title>Server #{{ index }}<v-divider></v-divider></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-card>
    </v-flex>
</template>

<script>

</script>

<style scoped>

</style>