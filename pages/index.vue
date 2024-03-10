<template>
    <Navbar />
    <Hero />
    <div class="flex space-x-4 justify-between">
        <Social />
        <About />
    </div>
    <Divider 
        text="Habilidades"
        icon="ri:star-fill"
    />
    <div class="flex space-x-4 justify-between h-1/2">
        <Skills />
        <Resume />
    </div>
    <Divider 
        text="Projetos"
        icon="ri:file-list-3-fill"
    />
    <Projects />
</template>