<script lang="ts">
export default {
    mounted() {
        console.log('mouted Dashboard')
    }
}
</script>

<template>
    <div class="flex flex-row bg-slate-500">
        <nav class="bg-gray-800">
            <ul class="flex flex-col">
                <li class="text-white px-4 py-2">
                    <a href="#" class="hover:bg-gray-700">Home</a>
                </li>
                <li class="text-white px-4 py-2">
                    <a href="#" class="hover:bg-gray-700">About</a>
                </li>
                <li class="text-white px-4 py-2">
                    <a href="#" class="hover:bg-gray-700">Services</a>
                </li>
                <!-- Add more navigation items here -->
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<style scoped></style>
