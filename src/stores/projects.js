import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectStore = defineStore('project', () => {
    const projects = ref([
        {
            id: 1,
            name: 'Make Your Burger',
            description: 'A burger builder app',
            image: '/img/logomyb.png',
            link: 'https://www.github.com/enzofagundz/make-your-burger',
            mockup: '/img/mockup-myb.png'
        },
        {
            id: 2,
            name: 'Pizza Queen',
            description: 'A pizza ordering app',
            image: '/img/logopizzaqueen.png',
            link: 'https://www.github.com/enzofagundz/pizza-queen',
            mockup: '/img/mockup-pizzaqueen.png'
        },
        {
            id: 3,
            name: 'Seance Ecommerce',
            description: 'An ecommerce app',
            image: '/img/logoseance.png',
            link: 'https://www.github.com/enzofagundz/seance-ecommerce',
            mockup: '/img/mockup-seance.png'
        },
        {
            id: 4,
            name: 'CRUD Produto MVC',
            description: 'A CRUD app made with MVC pattern in PHP',
            image: '/img/logocrud.png',
            link: 'https://www.github.com/enzofagundz/crud-produtomvc',
            mockup: '/img/mockup-crud.png'
        }
    ]);

    return { projects }
})