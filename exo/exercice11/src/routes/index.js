import { routes } from '@/routes/routes.js'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
    // Choix du mode naviguation
    // CreatewebHistory :  classique
    // createWebHashHistory : Naviguation avec des ancres
    // createMemoryHistory : Tests et rendu coté serveur (SSR)
    history: createWebHistory(),
    // tableau d'oject contenant les routes
    routes
})
