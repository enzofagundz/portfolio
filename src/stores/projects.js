import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectsStore = defineStore('project', () => {
    const projects = ref([
        {
            id: 1,
            name: 'Make Your Burger',
            description: 'A burger builder app',
            image: 'https://i.ibb.co/0jZQY1q/make-your-burger.png',
            link: 'https://www.github.com/enzofagundz/make-your-burger',
            tags: ['#VueJS', '#ExpressJS', '#Prisma', '#MySQL', '#PicoCSS']
        },
        {
            id: 2,
            name: 'Pizza Queen',
            description: 'A pizza ordering app',
            image: 'https://i.ibb.co/0jZQY1q/make-your-burger.png',
            link: 'https://www.github.com/enzofagundz/pizza-queen',
            tags: ['#HTML', '#CSS', '#Flexbox', '#Grid']
        },
        {
            id: 3,
            name: 'Seance Ecommerce',
            description: 'An ecommerce app',
            image: 'https://i.ibb.co/0jZQY1q/make-your-burger.png',
            link: 'https://www.github.com/enzofagundz/seance-ecommerce',
            tags: ['#HTML', '#CSS', '#JavaScript', '#CRUD', '#Flexbox', '#Grid']
        },
        {
            id: 4,
            name: 'CRUD Produto MVC',
            description: 'A CRUD app made with MVC pattern in PHP',
            image: 'https://i.ibb.co/0jZQY1q/make-your-burger.png',
            link: 'https://www.github.com/enzofagundz/crud-produtomvc',
            tags: ['#PHP', '#MVC', '#MySQL', '#Bootstrap']
        }
    ])

    return { projects }
})