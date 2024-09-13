<template>
    <div class="list" v-if="affichage === 'classique'">
        <ListingLayout #header>
            <h1>Total {{ buying }}/{{ listing.length }}</h1>
        </ListingLayout>
        <ListingLayout #content>
            <ul class="shoppingList" v-if="listFiltered.length > 0">
            <li v-for="{ id, article, section, buyed } in listFiltered"
                @click="buyArticle(id)"
                :key=id
                :class="{ buyed: buyed }">
                {{ article }} - {{ section }}
            </li>
            </ul>
            <p v-else-if="listing.length > 0">
                Aucun élément ne correspond à votre filtre
            </p>
            <p v-else>
                Aucun élément ajouté à votre liste de course
            </p>
        </ListingLayout>
        <ListingLayout #footer>
            <span @click="AffichageTable()">Afficher en mode table</span>
        </ListingLayout>
    </div>

    <div class="list" v-if="affichage === 'Table'">
        <ListingLayout #header>
            <h1>Total {{ buying }}/{{ listing.length }}</h1>
        </ListingLayout>
        <ListingLayout #content>
            <table>
                <tbody>
                    <tr v-for="{ id, article, section, buyed } in listFiltered"
                        @click="buyArticle(id)"
                        :key=id
                        :class="{ buyed: buyed }">
                            <td>{{ article }}</td>
                            <td>{{ section }}</td>
                    </tr>
                </tbody>
            </table>
        </ListingLayout>
        <ListingLayout #footer>
            <span @click="AffichageClassique()">Afficher en mode classe</span>
        </ListingLayout>
    </div>
</template>

<script setup>
    import { computed, ref } from 'vue'
    import ListingLayout from '@/components/ListingLayout.vue';

    const emits = defineEmits(['buyArticle'])
    const affichage = ref("classique")

    const props = defineProps({
        listing: Array,
        listFiltered: Array
    })

    // Precalcul
    const buying = computed(() => {
        if (props.listing) {
            let counter = 0
            props.listing.forEach((art) => { if (art.buyed) counter++ })
            return counter
        }
    })

    function AffichageClassique() {
        affichage.value = "classique"
    }
    function AffichageTable() {
        affichage.value = "Table"
    }

    function buyArticle(index) {
        if (props.listing[index].buyed == true) {
            emits('buyArticle', index, { "buyed": false } )
        } else {
            emits('buyArticle', index, { "buyed": true } )
        }
    }
</script>

<style>
    h1 {
        font-weight: 500;
        font-size: 2.6rem;
        position: relative;
        top: -10px;
    }
    
    .buyed {
        text-decoration: line-through;
        color: green;
    }

    .shoppingList:hover {
        cursor: pointer
    }
</style>