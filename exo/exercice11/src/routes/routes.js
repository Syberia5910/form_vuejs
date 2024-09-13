import HomeView from '@/views/HomeView.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
export const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView
    },
    {
        path: "/mescourses",
        name: "MesCourses",
        component: () => import('@/views/MesCoursesView.vue') // Cette écriture permet de ne charger la page qu'en cas d'appel
    },
    {
        path: "/conseil_openfoodfact",
        name: "ConseilOpenFoodFact",
        component: () => import('@/views/ConseilOpenFoodFactView.vue') // Cette écriture permet de ne charger la page qu'en cas d'appel
    },
    {
        path: "/login",
        name: "Login",
        component: () => import('@/views/LoginView.vue') // Cette écriture permet de ne charger la page qu'en cas d'appel
    },
    {
        path: "/protected/account",
        name: "profil",
        meta: {
            isRequired: true
        },
        component: () => import('@/views/LoginView.vue') // Cette écriture permet de ne charger la page qu'en cas d'appel
    },
    {
        path: "/protected/password",
        name: "profil",
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem('token')) {
                next()
            } else {
                router.go(-2)
            }
        },
        component: () => import('@/views/LoginView.vue') // Cette écriture permet de ne charger la page qu'en cas d'appel
    },
    {
        /**
         * Expression régulière qui permet de dire n'importe quelle route
         * si on arrive ici ce que rien de ce qui est défini
         *  plus haut dans le tableau des routes correspond
         *  donc 404
         */
        path: '/:pathMatch(.*)*',
        name: 'not.found',
        component: () => import('@/views/default/Page404NotFound.vue')
      }
]