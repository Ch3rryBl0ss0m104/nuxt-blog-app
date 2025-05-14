// Janke Rall u24571238

import { createRouter, createWebHistory } from 'vue-router'
import Index from '../pages/index.vue'
import Search from '../pages/search.vue'
import Post from '../pages/posts/[id].vue'

const routes = [
    { path:'/', name: 'Index', component: Index },
    { path:'/search', name: 'Search', component: Search },
    { path:'/posts/[id]', name: 'Post', component: Post }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router