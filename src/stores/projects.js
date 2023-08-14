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
            mockup: '/img/mockup-myb.webp',
            logoMd: '/img/logo-myb-md.webp',
            longDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat eveniet deleniti commodi vel distinctio iste suscipit possimus animi, odio neque voluptate quibusdam, dolor voluptas praesentium harum? Minus, saepe dignissimos?',
            tags: ['Vue.JS', 'Express.JS', 'Prisma', 'Pico CSS']
        },
        {
            id: 2,
            name: 'Pizza Queen',
            description: 'A pizza ordering app',
            image: '/img/logopizzaqueen.webp',
            link: 'https://www.github.com/enzofagundz/pizza-queen',
            mockup: '/img/mockup-pizzaqueen.webp',
            logoMd: '/img/logo-queen-md.webp',
            longDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat eveniet deleniti commodi vel distinctio iste suscipit possimus animi, odio neque voluptate quibusdam, dolor voluptas praesentium harum? Minus, saepe dignissimos?',
            tags: ['HTML', 'CSS']
        },
        {
            id: 3,
            name: 'Seance Ecommerce',
            description: 'An ecommerce app',
            image: '/img/logoseance.webp',
            link: 'https://www.github.com/enzofagundz/seance-ecommerce',
            mockup: '/img/mockup-seance.webp',
            logoMd: '/img/logo-seance-md.webp',
            longDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat eveniet deleniti commodi vel distinctio iste suscipit possimus animi, odio neque voluptate quibusdam, dolor voluptas praesentium harum? Minus, saepe dignissimos?',
            tags: ['HTML', 'CSS', 'JavaScript']
        },
        {
            id: 4,
            name: 'CRUD Produto MVC',
            description: 'A CRUD app made with MVC pattern in PHP',
            image: '/img/logocrud.webp',
            link: 'https://www.github.com/enzofagundz/crud-produtomvc',
            mockup: '/img/mockup-crud.webp',
            logoMd: '/img/logo-crud-md.webp',
            longDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat eveniet deleniti commodi vel distinctio iste suscipit possimus animi, odio neque voluptate quibusdam, dolor voluptas praesentium harum? Minus, saepe dignissimos?',
            tags: ['PHP', 'MVC', 'Bootstrap']
        }
    ]);

    return { projects }
})