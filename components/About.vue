<template>
    <div class="mockup-browser bg-base-300 md:w-2/3 w-full border-2 border-primary">
        <div class="mockup-browser-toolbar">
            <div class="input">
                sobre mim
            </div>
        </div>
        <Swiper class="mockup-browser-content" :slides-per-view="1">
            <SwiperSlide>
                <div class="flex flex-col items-center space-y-4 justify-center px-4 py-16 bg-base-200">
                    <p class="text-center">
                        Para me conhecer melhor, veja minhas habilidades, projetos e experiências.
                    </p>
                    <div class="space-y-4 flex flex-col items-center">
                        <button class="btn btn-primary btn-wide">
                            <Icon name="ri:tools-fill" />
                            <span>Habilidades</span>
                        </button>
                        <button class="btn btn-primary btn-wide">
                            <Icon name="ri:file-list-3-fill" />
                            <span>Projetos</span>
                        </button>
                        <button class="btn btn-primary btn-wide">
                            <Icon name="ri:briefcase-4-fill" />
                            <span>Experiências</span>
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="flex flex-col items-center space-y-4 justify-center px-4 py-16 bg-base-200">
                    <p class="text-center">
                        Para me conhecer melhor, veja minhas habilidades, projetos e experiências.
                    </p>
                    <div class="space-y-4 flex flex-col items-center">
                        <button class="btn btn-primary btn-wide">
                            <Icon name="ri:tools-fill" />
                            <span>Habilidades</span>
                        </button>
                        <button class="btn btn-primary btn-wide">
                            <Icon name="ri:file-list-3-fill" />
                            <span>Projetos</span>
                        </button>
                        <button class="btn btn-primary btn-wide">
                            <Icon name="ri:briefcase-4-fill" />
                            <span>Experiências</span>
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="flex flex-col items-center space-y-4 justify-center px-4 py-16 bg-base-200">
                    <p class="text-center">
                        Para me conhecer melhor, veja minhas habilidades, projetos e experiências.
                    </p>
                    <div class="space-y-4 flex flex-col items-center">
                        <button class="btn btn-primary btn-wide">
                            <Icon name="ri:tools-fill" />
                            <span>Habilidades</span>
                        </button>
                        <button class="btn btn-primary btn-wide">
                            <Icon name="ri:file-list-3-fill" />
                            <span>Projetos</span>
                        </button>
                        <button class="btn btn-primary btn-wide">
                            <Icon name="ri:briefcase-4-fill" />
                            <span>Experiências</span>
                        </button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script lang="ts" setup>

</script>