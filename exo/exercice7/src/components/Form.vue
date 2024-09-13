<template>
    <div class="addToListForm">
      <input type="text" placeholder="Saisir votre article" v-model="article"><br>
      <select name="section" id="section" v-model="section">
        <option v-for="section in sections" :value="section">{{ section }}</option>
      </select><br>
      <button @click="addToList">Ajouter</button>
    </div>
</template>

<script setup>
    // Import 
    import { ref, defineProps, defineEmits } from 'vue'

    const emits = defineEmits(['returnForAddingToList'])
    const article = ref(null)
    const section = ref(null)

    defineProps({
        sections: Array
    })

    function addToList() {
        if (article.value && section.value) {
            emits('returnForAddingToList', { "article": article.value, "section": section.value } )
            section.value = null
            article.value = null
        }   
    }
</script>

<style>
    .addToListForm {
        display: table-cell;
        width: 350px;
    }
</style>