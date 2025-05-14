<!-- Janke Rall u24571238 -->

<template>
    <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold mb-4">Blog Posts</h1>
        <select v-model="selectedCategory" @change="filterPosts" class="mb-4 p-2 border">
            <option value="">All Categories</option>
            <option>Technology</option>
            <option>Lifestyle</option>
            <option>Education</option>
        </select>

        <div v-for="post in posts" :key="post.id" class="mb-6 p-4 shadow">
            <h2 class="text-xl font-semibold">{{ post.attributes.title }}</h2>
            <p class="text-gray-600">By {{ post.attributes.author }}</p>
            <div v-html="post.attributes.content.substring(0, 100) + '...'"></div>
            <nuxt-link :to="`/posts/${post.id}`" class="text-blue-500">Read more</nuxt-link>
        </div>
    </div> 
</template>

<script>
    export default {
        async asyncData() {
            const { data } = await useFetch('http://localhost:1337/api/blog-posts')
            return {
                posts: data.value.data,
                selectedCategory: ''
            }
        },
        methods: {
            async filterPosts() {
                const { data } = await useFetch(`http://localhost:1337/api/blog-posts?filters[category][$eq]=${this.selectedCategory}`)
                this.posts = data.value.data
            }
        }
    }
</script>