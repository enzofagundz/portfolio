<template>
    <Navbar />
    <Hero />
    <div class="flex space-x-2 justify-between flex-row">
        <Social />
        <About />
    </div>
    <Divider 
        text="Habilidades"
        icon="ri:star-fill"
    />
    <div class="flex md:space-x-2 justify-between h-1/2 flex-col space-y-2 md:space-y-0 md:flex-row">
        <Skills />
        <Resume />
    </div>
    <Divider 
        text="Projetos"
        icon="ri:file-list-3-fill"
    />
    <Projects />
</template>