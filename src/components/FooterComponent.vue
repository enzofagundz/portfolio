<script setup>

</script>

<template>
    <footer>
        <div id="footer-container">
            <div>
                <img src="/img/logo-fateclins.png" alt="">
            </div>
            <div>
                <div>
                    <p>
                        Nota
                    </p>
                </div>
                <h1>
                    ?
                </h1>
            </div>
            <section>
                <div>
                </div>
                <p>
                    Desenvolvido por <a href="">Enzo Fagundes</a>
                </p>
            </section>
            <img src="img/sistemas.png" alt="">
        </div>
    </footer>
</template>

<style scoped>
footer {
    @apply bg-[#14140f] border-t-2 border-[#cdcdcd] w-full h-32 mt-20 flex items-center justify-center
}

#footer-container {
    @apply flex items-center justify-around max-w-lg w-full
}

#footer-container > div {
    @apply bg-[#1d1d16] rounded-lg border-2 border-[#cdcdcd]
}

#footer-container > div:first-child {
    @apply p-8 w-36 h-20 flex justify-center items-center
}

#footer-container > div:nth-child(2) {
    @apply flex flex-col justify-center items-center
}

#footer-container > div:nth-child(2) div {
    @apply border-b-2 border-[#e2e2e2] text-sm text-[#e2e2e2] font-gothic self-center px-2 py-1
}

#footer-container > div:nth-child(2) h1 {
    @apply text-5xl font-bold text-[#e2e2e2] font-unbounded
}

#footer-container > section {
    @apply w-20 h-20 flex flex-col items-center bg-[#1d1d16]
}

#footer-container > section div {
    @apply bg-[#8B8BFF] w-20 h-2 mb-2
}

#footer-container > section p {
    @apply text-white text-xs font-gothic ml-1
}

#footer-container > section p a {
    @apply text-[#8B8BFF]
}

#footer-container > img {
    @apply animate-spin
}
</style>