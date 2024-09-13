<template>
    <div class="list">
        <h1>Total {{ buying }}/{{ listing.length }}</h1>
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
    </div>

    
  <p>NB 1 depuis le store : {{  store.nb1 }}</p>
</template>

<script setup>
    import { computed, defineProps, defineEmits } from 'vue'

    const emits = defineEmits(['buyArticle'])

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

    function buyArticle(index) {
        if (props.listing[index].buyed == true) {
            emits('buyArticle', index, { "buyed": false } )
        } else {
            emits('buyArticle', index, { "buyed": true } )
        }
    }
    
    // store
    import { useNumberStore } from '@/stores/number.js'

    const store = useNumberStore()
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