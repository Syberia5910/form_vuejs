<script setup>
    import { onMounted } from 'vue';

    const url = "https://world.openfoodfacts.org/api/v3/product"
    const codes = [
        '3017620425035',
        '3274080005003',
        '5449000214911',
        '8002270014901',
        '7613034626844',
        '737628064502',
        '3228857000906',
        '87157215',
        '3124480191182',
        '80052760',
        '8715035110106'
    ]

    onMounted (() => {
        fetch(`${url}/${codes[0]}.json`)
        .then(res => res.json)
        .then(res => {
            const { 
                code,
                brands,
                categories,
                creator,
                created_at,
                image_url,
                ingredients,
                packaging_materials,
                nutriscore_grade,
                product_name,
                sources
            } = res.product
        })
        .catch((error) => console.error('error', error))
    })
</script>

<template>
    <img :src="image_url" />
</template>

<style>

</style>