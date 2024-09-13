import { defineStore } from "pinia"
import { ref } from 'vue'

export const useNumberStore = defineStore('store:number', () => {
    const nb1 = ref(2)
    const nb2 = ref(4)
    const sum2Number = (n1, n2) => {
        return n1 + n2
    }

    // Retourner les datas et functions
    // qui pourront être utilisé par les composants
    return {
        nb1,
        nb2,
        sum2Number
    }
})