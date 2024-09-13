<template>
    <div class="addToListForm">
      <h1> Ajouter les éléments a votre liste de course </h1>
      <input type="text" placeholder="Saisir votre article" v-model="article"><br>
      <select name="section" id="section" v-model="section">
        <option v-for="section in sections" :value="section">{{ section }}</option>
      </select><br>
      <button @click="addToList" id="adding">Ajouter</button>
    </div>
</template>

<script setup>
    // Import 
    import { ref } from 'vue'

    const article = ref(null)
    const section = ref(null)
    const sections = ["Cosmétiques", "Frais", "Liquide", "Droguerie", "Boulangerie", "Boucherie", "Surgelé"];

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