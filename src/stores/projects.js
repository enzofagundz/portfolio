import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectStore = defineStore('project', () => {
    const projects = ref([
        {
            id: 1,
            name: 'Make Your Burger',
            description: 'A burger builder app',
            image: '/img/logomyb.webp',
            link: 'https://www.github.com/enzofagundz/make-your-burger',
            mockup: '/img/mockup-myb.webp'
        },
        {
            id: 2,
            name: 'Pizza Queen',
            description: 'A pizza ordering app',
            image: '/img/logopizzaqueen.webp',
            link: 'https://www.github.com/enzofagundz/pizza-queen',
            mockup: '/img/mockup-pizzaqueen.webp'
        },
        {
            id: 3,
            name: 'Seance Ecommerce',
            description: 'An ecommerce app',
            image: '/img/logoseance.webp',
            link: 'https://www.github.com/enzofagundz/seance-ecommerce',
            mockup: '/img/mockup-seance.webp'
        },
        {
            id: 4,
            name: 'CRUD Produto MVC',
            description: 'A CRUD app made with MVC pattern in PHP',
            image: '/img/logocrud.webp',
            link: 'https://www.github.com/enzofagundz/crud-produtomvc',
            mockup: '/img/mockup-crud.webp'
        }
    ]);

    return { projects }
})