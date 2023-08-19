<script lang="ts">
export default {
    props:
    {
        isExpanded: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            listNavBar: [
                {
                    name: 'Home',
                    link: '/',
                    icon: 'fas fa-home'
                },
                {
                    name: 'Dashboard',
                    link: '/dashboard',
                    icon: 'fas fa-tachometer-alt'
                }
            ]
        }

    },
    methods: {

    }
}
</script>

<template>
    <aside id="navbar"
        :class="`bg-slate-600 h-screen ${isExpanded ? `w-1/5` : `w-[70px]`} drop-shadow-md sticky top-0 duration-500`">
        <!-- <ul
      class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
      <li class="mr-2">
        <router-link to="/" aria-current="page"
          class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Home</router-link>
      </li>
      <li class="mr-2">
        <router-link to="/dashboard" aria-current="page"
          class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Dashboard</router-link>
      </li>

    </ul> -->
        <div class="flex justify-between gap-1 items-center p-4">
            <div v-show="isExpanded" :class="`${isExpanded ? `w-[20px]` : `w-[100px]`} `">
                <img src="https://cdn.haitrieu.com/wp-content/uploads/2022/06/logo-katinat-text.png" alt="Girl in a jacket">
            </div>

            <button @click="$emit('onExpandNavBar', 123123123)"
                class="duration-400 bg-transparent border border-white hover:bg-white hover:text-slate-600 text-white font-bold py-0.5 px-2 rounded-full">
                <i :class="`text-xs fas fa-arrow-${isExpanded ? `left` : `right`}`"></i> </button>
        </div>
        <div class="flex gap-4 px-4 items-center cursor-pointer">
            <div class="relative">
                <img class="w-12 h-12 rounded-full"
                    src="https://cdn.britannica.com/70/129770-050-AEBE1EB9/Robert-Downey-Jr-2008.jpg" alt="">
                <span
                    class="absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
            <div class="flex flex-col" v-show="isExpanded">
                <div class="text-white">
                    Lorem User
                </div>
                <i class="text-xs text-white">Timestamp</i>
            </div>
        </div>

        <nav :class="`px-1`">
            <div v-for="navItem in listNavBar"
                :class="`mt-2 ${!isExpanded ? 'flex flex-col justify-center items-center' : 'justify-center'}`">
                <router-link exact-active-class="!text-[#b89670]" class="p-2 cursor-pointer text-white hover:text-[#b89670]"
                    :to="`${navItem.link}`" aria-current="page"><i :class="`text-lg ${navItem.icon}`"></i> {{ isExpanded ?
                        navItem.name
                        : '' }}</router-link>
            </div>
        </nav>
    </aside>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
