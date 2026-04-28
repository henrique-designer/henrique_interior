# 🏠 Henrique Design - Portfolio Web

Este repositorio contiene el código fuente del proyecto final de maquetación web. El objetivo principal es la creación de un sitio web multipágina, completamente funcional y responsivo, desarrollado exclusivamente con HTML5 y CSS3 puro, sin la intervención de frameworks de estilos (como Tailwind o Bootstrap) ni JavaScript.

## 📋 Descripción del Proyecto

El sitio web simula el portfolio profesional de la empresa "Henrique Design", especializada en diseño de interiores y manufacturación de mobiliario a medida. El proyecto cumple con todos los requisitos académicos establecidos:

- Menú de navegación global que resalta la página activa.
- Pie de página (Footer) con enlaces a redes sociales y avisos legales.
- Maquetación estructurada semánticamente con etiquetas de HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Código limpio, correctamente indentado y validado según los estándares.

## 📂 Estructura de Carpetas

El proyecto simula la estructura de un proyecto real en producción, separando los estilos de la estructura HTML:

```
PortafolioWeb/
├── CSS/
│   └── style.css             # Hoja de estilos principal (variables, tipografía, grid, media queries)
├── img/
│   ├── logo.png              # (Opcional) Logotipo de la empresa
│   ├── hero-bg.jpg           # Imagen de portada principal
│   └── ...                   # Imágenes de la galería de proyectos
├── index.html                # Página de Inicio (Portada, Sobre Mí, Servicios)
├── portfolio.html            # Galería de trabajos usando CSS Grid
├── presupuesto.html          # Formulario de contacto con validación HTML5
├── contacto.html             # Datos de la empresa y mapa de ubicación incrustado
└── README.md                 # Este archivo
```

## 🗺️ Mapa del Sitio

- **Inicio (index.html)**: Contiene el Hero principal (portada), un resumen del perfil profesional y una cuadrícula de los servicios ofrecidos.
- **Portfolio (portfolio.html)**: Muestra los trabajos y productos en forma de cuadrícula (Grid CSS) con efectos hover dinámicos en las miniaturas.
- **Presupuesto (presupuesto.html)**: Un formulario avanzado que hace uso de los atributos de validación nativos de HTML5 (`required`, `type="email"`, `type="tel"`, `pattern`). Incluye la obligatoriedad de aceptar la política de privacidad.
- **Contacto (contacto.html)**: Proporciona los datos de contacto y un mapa (iframe) con la ubicación física de la empresa en Sueca, Valencia.

## 🛠️ Aspectos Técnicos Destacados

- **Diseño Responsivo (Mobile-First)**: Implementación de `@media queries` para asegurar que el contenido se adapte a dispositivos móviles, tablets y monitores de escritorio.
- **CSS Moderno**: Uso de Flexbox y CSS Grid para alineaciones complejas y distribución de las galerías, evitando técnicas obsoletas como float.
- **Variables CSS**: Uso de variables en la pseudo-clase `:root` para mantener la consistencia de la paleta de colores corporativa (azul pizarra oscuro y dorado/ocre).
- **Accesibilidad y UX**: Efectos de transición suaves (`transition: all 0.3s`), cursores pointer en elementos interactivos y uso de atributos `alt` en todas las imágenes.

## 🚀 Cómo ejecutar el proyecto

Al ser un proyecto estático compuesto únicamente por HTML y CSS, no se requiere la instalación de dependencias, gestores de paquetes (npm/pnpm) ni entornos como Node.js o Docker.

1. Clona el repositorio o descarga el archivo .zip.
2. Descomprime el archivo en tu ordenador.
3. Haz doble clic sobre el archivo `index.html` para abrirlo directamente en tu navegador web predeterminado (Chrome, Firefox, Safari, Edge).
4. Navega libremente por el menú superior para acceder al resto de las páginas.

## 👨‍💻 Autor

- **Nombre**: Henrique da Costa Gomes
- **Ubicación**: Sueca, Comunidad Valenciana, España
- **Tecnologías**: HTML5 | CSS3
