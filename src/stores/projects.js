import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectStore = defineStore('project', () => {
    const projects = ref([
        {
            id: 1,
            name: 'Make Your Burger',
            description: 'A burger builder app',
            image: '../../public/img/logomyb.png',
            link: 'https://www.github.com/enzofagundz/make-your-burger',
            tags: ['#VueJS', '#ExpressJS', '#Prisma', '#MySQL', '#PicoCSS'],
            mockup: '../../public/img/mockup-myb.png'
        },
        {
            id: 2,
            name: 'Pizza Queen',
            description: 'A pizza ordering app',
            image: '../../public/img/logopizzaqueen.png',
            link: 'https://www.github.com/enzofagundz/pizza-queen',
            tags: ['#HTML', '#CSS', '#Flexbox', '#Grid'],
            mockup: '../../public/img/mockup-pizzaqueen.png'
        },
        {
            id: 3,
            name: 'Seance Ecommerce',
            description: 'An ecommerce app',
            image: '../../public/img/logoseance.png',
            link: 'https://www.github.com/enzofagundz/seance-ecommerce',
            tags: ['#HTML', '#CSS', '#JavaScript', '#CRUD', '#Flexbox', '#Grid'],
            mockup: '../../public/img/mockup-seance.png'
        },
        {
            id: 4,
            name: 'CRUD Produto MVC',
            description: 'A CRUD app made with MVC pattern in PHP',
            image: '../../public/img/logocrud.png',
            link: 'https://www.github.com/enzofagundz/crud-produtomvc',
            tags: ['#PHP', '#MVC', '#MySQL', '#Bootstrap'],
            mockup: '../../public/img/mockup-crud.png'
        }
    ]);

    return { projects }
})