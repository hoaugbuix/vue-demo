<script lang="ts">
export default {
    methods: {
        onNewUserPage() {
            this.$router.push('/dashboard/new')
        }
    }
} 
</script>

<template>
    <div>
        <button :onclick="onNewUserPage" type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            New User</button>
        <h1>List User</h1>
    </div>
</template>

<style scoped></style>
