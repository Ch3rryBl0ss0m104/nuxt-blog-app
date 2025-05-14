<!-- Janke Rall u24571238 -->

<template>
    <div class="container mx-auto p-4">
        <article class="prose lg:prose-xl">
            <h1 class="text-4xl font-bold">{{ post.attributes.title }}</h1>
            <p class="text-gray-600">By {{ post.attributes.author }}</p>
            <div v-html="compiledMarkdowm"></div>
        </article>
    </div>
</template>

<script>
    import { marked } from 'marked'

    export default {
        async asyncData({ params }) {
            const { data } = await useFetch(`http://localhost:1337/api/blog-posts/${params.id}`)
            return {
                post: data.value.data
            }
        },
        computed: {
            compiledMarkdown() {
                return marked(this.post.attributes.content)
            }
        }
    }
</script>