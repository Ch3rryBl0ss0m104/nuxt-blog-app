<!-- Janke Rall u24571238 -->

<template>
    <div class="container mx-auto p-4">
        <input v-model="searchQuery" placeholder="Search posts..." class="mb-4 p-2 border w-full" />
        <div v-for="post in filteredPosts" :key="post.id" class="mb-6 p-4 shadow">
            <h2 class="text-xl font-semibbold">{{ post.attributes.title }}</h2>
            <p class="text-gray-600">By {{ post.attributes.author }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchQuery: '',
                allPosts: []
            }
        },
        async mounted() {
            const { data } = await useFetch('http://localhost:1337/api/blog-posts')
            this.allPosts = data.value.data
        },
        computed: {
            filteredPosts() {
                return this.allPosts.filter(post =>
                    post.attributes.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                    post.attributes.author.toLowerCase().includes(this.searchQuery.toLowerCase())
                )
            }
        }
    }
</script>