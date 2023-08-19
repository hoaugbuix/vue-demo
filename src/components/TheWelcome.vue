<script lang="ts">
import { reactive, computed, ref } from 'vue'
import Axios from "axios"
import ComponentA from "./ComponentA.vue"
export default {
  data() {
    return {
      count: 2,
      pagination: {
        page: 1,
        size: 10,
        textSearch: "",
        abc: {
          name: 0
        },
        array: [1, 23, 4, 5, 6]
      },
      isShowComponent: false,
      listUser: [] as Array<any>
    }
  },
  components: {
    ComponentA
  },
  beforeCreate() {
  },
  async created() {
    this.getAllUser()
  },
  beforeMount() {

  },
  mounted() {
  },
  beforeUpdate() {

  },
  updated() {

  },
  setup() {
    console.log('setup COmposion')
    const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

    const author = reactive({
      name: 'John Doe',
      books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
      ]
    })

    // a computed ref
    const publishedBooksMessage = computed(() => {
      return author.books;
    })
    return { items, publishedBooksMessage }
  },
  watch: {
    pagination: {
      handler(newQuestion, oldQuestion) {

      },
      deep: true
    }
    // whenever question changes, this function will run

  },
  methods: {
    async getAllUser() {
      try {
        let { data } = await Axios.get("https://jsonplaceholder.typicode.com/users", {
          params: this.pagination
        })
        this.listUser = [...data]
      } catch (error) {
        console.log(error)
      }
    },
    getData() {

    }

  }
}


</script>

<template>
  <div id="abc">123312</div>
  <button :onclick="() => { isShowComponent = !isShowComponent }">IsShowComponent</button>
  <div v-for="(user, index) in listUser" :key="user.id">
    <p>{{ user?.username }}</p>
  </div>
</template>
