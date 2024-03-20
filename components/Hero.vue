<template>
    <div class="hero bg-base-200 rounded-2xl shadow-md h-[50vh]">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <p class="md:text-2xl text-lg">
                    Oi, eu sou o Enzo
                </p>
                <h1 class="md:text-4xl text-xl font-bold">
                    {{ typingText }}
                </h1>
            </div>
        </div>
    </div>
</template>

<script lang="" setup>
const typingText = ref('')
onMounted(() => {
    const texts = ['Desenvolvedor Full Stack']
    let count = 0
    let index = 0
    let currentText = ''
    let letter = ''
    ;(function type() {
        if (count === texts.length) {
            count = 0
        }
        currentText = texts[count]
        letter = currentText.slice(0, ++index)
        typingText.value = letter
        if (letter.length === currentText.length) {
            count++
            index = 0
        }
        setTimeout(type, 300)
    })()
})


</script>