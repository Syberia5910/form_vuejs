<script setup>
    import { onMounted, ref } from 'vue';

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
    const products = ref([])

    onMounted (() => {
        codes.forEach((code) => {
            let finalUrl = `${url}/${code}.json`
            fetch(finalUrl)
            .then(res => { 
                if (res.ok) return res.json()
            })
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
                products.value.push({
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
                })
            })
            .catch((error) => console.error('error', error))
        })
    })
</script>

<template>
    <h2>Suggestion de produit depuis openfoodfacts</h2>
    <br />
    <v-container>
        <v-row v-for="product in products">
            <v-col cols="4">
                <img :src="product.image_url" class="image"/>
            </v-col>

            <v-col cols="7">
                <v-row class="title">
                    <v-cols cols="12">
                        {{ product.product_name }} [ {{ product.brands }} ]
                    </v-cols>
                </v-row>
                <v-row>
                    <v-cols cols="12">
                        {{ product.categories }}
                    </v-cols>
                </v-row>
            </v-col>
            
            <v-col cols="1" :class="product.nutriscore_grade">
                {{ product.nutriscore_grade }}
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
    .a, .b, .c, .d, .e {
        text-transform: capitalize;
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 30px;
        color: white;
        border-color: black;
        border-radius: 5px;
        border: 10ch;
        font-weight: bold;
        height: 50px;
        width: 40px;
        text-align: center;
        display: flex;
        position: relative;
    }
    .a {
        background-color: green
    }
    .b {
        background-color: rgb(190, 190, 77);
    }
    .c {
        background-color: darkgoldenrod;
    }
    .d {
        background-color:rgb(180, 88, 22)
    }
    .e {
        background-color: rgb(141, 34, 34);
    }
    .title{
        font-size: 35px;
        font-weight: bold;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    .categorie{
        font-style: italic;
        display: grid;
        display: flex;
        position: relative;
    }
    .image {
        max-height: 150px;
        max-width: 100px;
        display: flex;
        position: relative;
    }
    .openfoodfacts_products {
        display: flex;
        margin-bottom: 50px;
    }
</style>