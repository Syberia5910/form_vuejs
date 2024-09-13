<script setup>
import { ref, computed, watchEffect } from 'vue'

// Data
const article = ref(null);
const sections = ["Cosmétiques", "Frais", "Liquide", "Droguerie", "Boulangerie", "Boucherie", "Surgelé"];
const section = ref(null);
const sectionFilter = ref(null);
const list = ref([]);
const listFiltered = ref([]);
const alreadyBuyed = ref(false)

// Precalcul
const buying = computed(() => {
  let counter = 0
  list.value.forEach((art) => { if (art.buyed) counter++ })
  return counter
})

// Methods
function addToList() {
  if (list.value && section.value) {
    list.value.push({ "id": list.value.length, "article": article.value, "section": section.value, "buyed": false })
    section.value = null
    article.value = null
  }
}

function buyArticle(index) {
  if (list.value[index].buyed == true) {
    list.value[index].buyed = false
  } else {
    list.value[index].buyed = true
  }
}

// watch
watchEffect(() => {
  let filteredList = list.value;

  if (alreadyBuyed.value) {
    filteredList = filteredList.filter(art => !art.buyed);
  }

  if (sectionFilter.value) {
    filteredList = filteredList.filter(art => art.section === sectionFilter.value);
  }

  listFiltered.value = filteredList;
},
  { deep: true })
</script>

<template>
  <div class="container">
    <div class="addToListForm">
      <input type="text" placeholder="Saisir votre article" v-model="article"><br>
      <select name="section" id="section" v-model="section">
        <option v-for="section in sections" :value="section">{{ section }}</option>
      </select><br>
      <button @click="addToList()">Ajouter</button>
    </div>

    <div class="list">
      <h1>Total {{ buying }}/{{ list.length }}</h1>
      <ul class="shoppingList" v-if="listFiltered.length > 0">
        <li v-for="{ id, article, section, buyed } in listFiltered" @click="buyArticle(id)" :key=id
          :class="{ buyed: buyed }">
          {{ article }} - {{ section }}
        </li>
      </ul>
      <p v-else-if="list.length > 0">
        Aucun élément ne correspond à votre filtre
      </p>
      <p v-else>
        Aucun élément ajouté à votre liste de course
      </p>
    </div>


  </div>

  <div class="filter" v-if="list.length > 0">
    <h2>Filtres</h2>
    section :
    <select name="section" id="section" v-model="sectionFilter">
      <option value=""></option>
      <option v-for="section in sections" :value="section">{{ section }}</option>
    </select><br>
    Déjà acheté ? <input type="checkbox" name="alreadyBuyed" id="" v-model="alreadyBuyed">
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.container {
  display: block;
  width: 1000px;
  min-height: 150px;
}

.addToListForm {
  display: table-cell;
  width: 350px;
}

.list {
  display: table-cell;
  width: 550px;
}

.buyed {
  text-decoration: line-through;
  color: green;
}

.shoppingList:hover {
  cursor: pointer
}
</style>