import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useInformationStore = defineStore('information', () => {
    const education = ref([
        {
            id: 1,
            school: 'FATEC Lins',
            course: 'Tecnólogo em Sistemas para Internet',
            period: '2021 - atual',
            status: 'Jun/2024'
        },
        {
            id: 2,
            school: 'ETEC Lins',
            course: 'Técnico em Administração',
            period: '2019 - 2020',
            status: null
        }
    ])

    const experience = ref([
        {
            id: 1,
            company: 'Copa Arena',
            role: 'Gestor de Redes Sociais',
            period: '2020 - 2022',
            responsibilities: 'Fui responsável por atualizar e monitorar as redes sociais da empresa, produzir conteúdo e auxiliar no desenvolvimento de campanhas.'
        },
        {
            id: 2,
            company: 'Prefeitura de Sabino',
            role: 'Designer Gráfico',
            period: '2019 - 2020',
            responsibilities: 'Fui responsável por conceituar elementos visuais, criar peças gráficas e testá-los em diferentes mídias'
        }
    ])

    const activities = ref([
        {
            id: 1,
            title: 'Certificado em Inglês Instrumental',
            institution: 'Universidade do Maranhão'
        },
        {
            id: 2,
            title: 'Certificado em Atendimento ao Cliente ',
            institution: 'SEBRAE'
        },
        {
            id: 3,
            title: 'Certificado em Marketing Digital',
            institution: 'SEBRAE'
        },
        {
            id: 4,
            title: 'Certificado em Fundamentos do Design Gráfico',
            institution: 'Fundação Bradesco'
        },
        {
            id: 5,
            title: 'Iniciação Iniciação científica aprovada em 2022 sobre o tema “PROTÓTIPO DE PLATAFORMA ACESSÍVEL PARA O ENSINO MATEMÁTICO ATRAVÉS DE PODCASTS”',
            institution: 'FATEC Lins'
        }
    ]);

    const languages = ref([
        'Inglês - Nível Intermediário',
        'Português - Nativo'
    ])

    return { education, experience, activities, languages }
});