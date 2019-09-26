<template>
    <v-flex>
        <v-card class="mx-auto py-2" max-width="400" tile>
            <v-list-item v-for="index in 5">
                <v-list-item-content>
                    <v-list-item-title>Server #{{ index }}<v-divider class="mt-3"></v-divider></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-card>
    </v-flex>
</template>

<script>

</script>

<style scoped>
</style>