<template>
  <div class="markdown-body">
    <!-- Contatti con icone social e immagini fake -->
    <div
      style="
        padding: 2rem;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 0px 0px 2rem 2rem;
      "
    >
      <div class="flex justify-content-center flex-wrap gap-6">
        <div class="flex flex-column">
          <img
            src="/images/my-photo.jpg"
            alt="Profile Photo"
            class="profile-photo"
          />
        </div>

        <div class="flex flex-column">
          <div class="mb-4">
            <div
              style="margin: 0px; padding: 0px; font-size: 3rem"
              class="font-bold"
            >
              Simone Di Ricco
            </div>
            <div style="margin: 0px; padding: 0px; font-size: 1.5rem">
              Front end developer
            </div>
          </div>
          <div class="flex gap-2 align-items-center mb-1">
            <Icon
              name="material-symbols:work"
              color="white"
              style="font-size: 1.5rem"
            />
            <p class="p-0 m-0">
              [2021 - Presente] Front end Developer at Move Solutions
            </p>
          </div>
          <div class="flex gap-2 align-items-center">
            <Icon
              name="icon-park-solid:degree-hat"
              color="white"
              style="font-size: 1.5rem"
            />
            <p class="p-0 m-0">Graduated with Electronic Engineer</p>
          </div>

          <div class="flex flex-column mt-4">
            <div class="flex gap-2">
              <a
                href="https://github.com/sdiricco"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                color="#a1f7b9"
                  name="mdi:github"
                  style="font-size: 2rem"
                />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  color="#a1f7b9"
                  name="mdi:linkedin"
                  style="font-size: 2rem"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-section" style="padding: 2rem; margin-top: 2rem; margin-bottom: 2rem;">
      <h1 style="margin: 0px; padding: 0px; font-size: 4rem">Vue.js Developer</h1>
      <p>
        Mario Rossi è un programmatore frontend altamente competente con una
        solida esperienza nello sviluppo e nella manutenzione di applicazioni
        web. Ha lavorato presso aziende leader nel settore, contribuendo alla
        creazione di interfacce utente intuitive e responsive utilizzando
        tecnologie di punta come HTML, CSS e JavaScript
      </p>
    </div>

    <div style="padding: 2rem; background-color: rgba(255, 255, 255, 0.1); border-radius: 2rem 2rem 0px 0px">
      <ContentDoc />
    </div>
  </div>
</template>
<script setup></script>
<style>
.profile-photo {
  min-width: 300px;
  min-height: 300px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-right: 10px;
}

.social-links {
  display: flex;
  align-items: center;
  justify-content: end;
}

.social-links a {
  margin-right: 10px;
}

/* Flashlight Overlay */
/* :root {
  --cursorX: 50vw;
  --cursorY: 50vh;
}
:root:before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  pointer-events: none;
  background: radial-gradient(
    circle 50vmax at var(--cursorX) var(--cursorY),
    rgba(0,0,0,0) 0%,
    rgba(0,0,0,0.0) 90%,
    rgba(0,0,0,1) 100%
  )
} */
/* Stile base per l'intera applicazione */
body {
  margin: 0px;
  font-family: Arial, sans-serif;
  color: #ffffff; /* Colore del testo */
  height: 100vh;
}

/* Animazione di sfondo */
body {
  background: linear-gradient(-45deg, #000000, #09413f, #000000);
  background-size: 800% 2000%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.text-special{
  background: linear-gradient(
    to right,
    #a1f7b9,
    #61f3f3
  ); /* Gradiente verde-viola per il background dei titoli */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Stile per il contenitore principale del documento Markdown */
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
}

/* Stili per gli elementi di testo nel documento Markdown */
.markdown-body p {
  margin-bottom: 20px;
  line-height: 1.6;
}

/* Stili per i titoli con gradiente verde-viola */
.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5 {
  width: fit-content;
  margin-top: 30px;
  margin-bottom: 15px;
  font-weight: bold;
  background: linear-gradient(
    to right,
    #a1f7b9,
    #61f3f3
  ); /* Gradiente verde-viola per il background dei titoli */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.markdown-body ul,
.markdown-body ol {
  margin-bottom: 20px;
}

.markdown-body li {
  line-height: 1.6;
}

.markdown-body a {
  color: #99ccff; /* Colore dei link in blu chiaro */
  text-decoration: none;
}

.markdown-body a:hover {
  text-decoration: underline;
}

/* Stili per le tabelle nel documento Markdown */
.markdown-body table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
}

.markdown-body table th,
.markdown-body table td {
  border: 1px solid #666666; /* Colore dei bordi delle celle della tabella */
  padding: 8px;
}

.markdown-body table th {
  font-weight: bold;
  background-color: #444444; /* Colore di sfondo per le intestazioni delle tabelle */
}

/* Stili per le immagini nel documento Markdown */
.markdown-body img {
  max-width: 100%;
  height: auto;
}

/* Stili per i blocchi di citazione nel documento Markdown */
.markdown-body blockquote {
  border-left: 4px solid #999999; /* Colore del bordo delle citazioni */
  padding-left: 16px;
  color: #999999; /* Colore del testo delle citazioni in grigio medio */
  margin-left: 0;
}

/* Stili per il testo in grassetto e corsivo nel documento Markdown */
.markdown-body strong {
  font-weight: bold;
}

.markdown-body em {
  font-style: italic;
}

/* Stili per le sezioni di codice nel documento Markdown */
.markdown-body pre {
  background-color: #292828; /* Colore di sfondo per i blocchi di codice */
  padding: 16px;
  border-radius: 4px;
  overflow: auto;
}

.markdown-body pre code {
  display: block;
  font-size: 14px;
  overflow-x: auto;
  color: #ffffff; /* Colore del testo nei blocchi di codice */
}
</style>
