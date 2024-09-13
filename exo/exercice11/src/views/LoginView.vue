<template>
    <h1>Accueil</h1>
    
  
    <p>NB 1 depuis le store : {{ mystore.nb1 }}</p>
</template>
<script setup>

    
    // store
    import { useNumberStore } from '@/stores/number.js'

    const mystore = useNumberStore()
</script>