import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const app = createApp(App)
const router = createRouter({
    // Choix du mode naviguation
    // CreatewebHistory :  classique
    // createWebHashHistory : Naviguation avec des ancres
    // createMemoryHistory : Tests et rendu coté serveur (SSR)
    history: createWebHistory(),
    // tableau d'oject contenant les routes
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeView
        },
        {
            path: "/news",
            name: "News",
            component: () => import('@/views/NewsView.vue') // Cette écriture permet de ne charger la page qu'en cas d'appel
        },
        {
            path: "/contact",
            name: "Contact",
            component: () => import('@/views/ContactView.vue') // Cette écriture permet de ne charger la page qu'en cas d'appel
        }
    ]
})
app.use(router)
app.mount('#app')
