<template>
    <h2>Filtres</h2>
    Rayon :
    <select name="section" id="section" v-model="section">
        <option value=""></option>
        <option v-for="section in sections" :value="section">{{ section }}</option>
    </select><br>
    Déjà acheté ? <input type="checkbox" name="alreadyBuyed" id="" v-model="alreadyBuyed" >
</template>

<script setup>
    // Import 
    import { ref, defineProps, defineEmits, watchEffect } from 'vue'

    const emits = defineEmits(['sendFilter'])

    const section = ref(null)
    const alreadyBuyed = ref(false)

    defineProps({
        sections: Array
    })

    watchEffect(() => {
        emits('sendFilter', section.value, alreadyBuyed.value)
    })
</script>

<style>

</style>