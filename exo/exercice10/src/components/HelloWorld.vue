<script setup>
  import { ref, watchEffect } from 'vue'
  import FormVue from '@/components/Form.vue'
  import ListingVue from '@/components/Listing.vue'
  import FilterVue from '@/components/Filter.vue'
  import FoodAct from '@/components/FoodAct.vue'

  // Data
  const sections = ["Cosmétiques", "Frais", "Liquide", "Droguerie", "Boulangerie", "Boucherie", "Surgelé"];
  const sectionFilter = ref(null);
  const list = ref([]);
  const listFiltered = ref([]);
  const alreadyBuyed = ref(false)

  // Methods
  function addToList(newArticle) {
    list.value.push({ "id": list.value.length, "article": newArticle.article, "section": newArticle.section, "buyed": false })
  }

  function updateList(id, newInfo) {
    Object.assign(list.value[id], newInfo )
  }

  function updateFilters(newSectionFilter,newBuyFilter) {
    sectionFilter.value = newSectionFilter
    alreadyBuyed.value = newBuyFilter
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
  })
</script>

<template>
  <div class="container">
    <FormVue :sections="sections" @returnForAddingToList="addToList" />

    <ListingVue :listing="list" :listFiltered="listFiltered" @buyArticle="updateList" />
  </div>

  <div class="filter" v-if="list.length > 0">
    <FilterVue :sections="sections" @sendFilter="updateFilters" />
  </div>

  <div>
    <FoodAct />
  </div>
</template>

<style scoped>
  .container {
    display: block;
    width: 1000px;
    min-height: 150px;
  }

  .list {
    display: table-cell;
    width: 550px;
  }
</style>