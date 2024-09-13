// describe : description d'une liste des tests
// it : un test à effectuer
// expect : assertion (verification du résultat attendu)
// beforeEach : Execution avant chaque it
import HelloWorld from "@/components/HelloWorld.vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";

describe('Testing component HelloWorld', () => {
    let wrapper
    beforeEach(() => {
        // Arrange (préparation de ce qu'il faut pour tester)
        wrapper = mount(HelloWorld, {})
    })

    describe('Testing h1 element', () => {
        it('Test if exist', () => {
            // Arrange (préparation de ce qu'il faut pour tester)
            //Déclarer ici dans le beforeEach
    
            // Act (Appel de la fonction)
            const h1 = wrapper.find('h1')
            // Assert (Vérification du résultat)
            expect(h1.exists()).toBeTruthy()
        })
    
        it('Test if content contains "filtre"', () => {
            // Arrange (préparation de ce qu'il faut pour tester)
            const wrapper = mount(HelloWorld, {})
            // Act (Appel de la fonction)
            const h1 = wrapper.find('h1')
            // Assert (Vérification du résultat)
            expect(h1.text()).toMatch(/filtre/i)
        })
    })

    describe('Testing select element', () => {
        it('Test if exist', () => {
            // Arrange (préparation de ce qu'il faut pour tester)
            //Déclarer ici dans le beforeEach
    
            // Act (Appel de la fonction)
            const select = wrapper.find('select')
            // Assert (Vérification du résultat)
            expect(select.exists()).toBeTruthy()
        })
    
        it('Test if it name is "rayon"', () => {
            // Arrange (préparation de ce qu'il faut pour tester)
            const wrapper = mount(HelloWorld, {})
            // Act (Appel de la fonction)
            const select = wrapper.find('select')
            // Assert (Vérification du résultat)
            expect(select.attributes('name')).toBe("rayon")
        })
    })


    it('Should have 1 input html element', () => {
        // Arrange (préparation de ce qu'il faut pour tester)
        const wrapper = mount(HelloWorld, {})
        // Act (Appel de la fonction)
        const input = wrapper.findAll('input[type=text]')
        // Assert (Vérification du résultat)
        expect(input).toHaveLength(1)
    })
})