<script lang="ts">
import TheWelcome from './components/TheWelcome.vue'
import NavBar from "./components/NavBar.vue"
export default {
  components: {
    NavBar
  },
  data() {
    return {
      isExpanded: true,
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
    onExpandNavBar(data1231: any) {
      console.log(data1231)
      this.isExpanded = !this.isExpanded
    }
  }
}
</script>

<template>
  <div class="max-w-7xl min-w-[1200px] flex flex-row">
    <NavBar :is-expanded="isExpanded" @onExpandNavBar="onExpandNavBar" />

    <main :class="`duration-300 bg-gray-100 ${isExpanded ? `w-4/5` : `w-full`}`">

      <!-- <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view> -->

    </main>
  </div>
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
