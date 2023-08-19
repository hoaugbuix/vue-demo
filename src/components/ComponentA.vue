<script lang="ts">
import { reactive, computed, ref } from 'vue'
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
                }
            },
            listPerson: []
        }
    },
    beforeCreate() {
    },
    async created() {
        this.pagination.page = 5

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
                this.getAllUser()
            },
            deep: true
        }
        // whenever question changes, this function will run

    },
    methods: {
        getAllUser() {
            console.log(this.pagination)
        },
    }
}


</script>

<template>
    <div id="abc">ComponentA</div>
</template>
