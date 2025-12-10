# Centro Cultural KULLAWA 🎭

![KULLAWA](assets/images/logo.png)

Sitio web oficial del Centro Cultural KULLAWA, agrupación folclórica de Talca dedicada a la preservación y difusión de las danzas del norte de Chile.

## 🌟 Características

- ✨ Diseño responsive (móvil y escritorio)
- 📱 Menú hamburguesa para dispositivos móviles
- 🎨 Secciones de altura completa con scroll suave
- 🖼️ Galería de imágenes interactiva con efectos hover
- 🎬 Integración de videos de YouTube
- 📧 Formulario de contacto funcional
- ⚡ Animaciones al hacer scroll
- 🎯 Navegación sticky que permanece visible

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica y accesible
- **CSS3** - Estilos modernos con:
  - Flexbox y Grid para layouts responsivos
  - Gradientes y sombras para profundidad visual
  - Animaciones y transiciones suaves
  - Media queries para diseño responsive
- **JavaScript Vanilla** - Interactividad sin dependencias:
  - Navegación suave (smooth scroll)
  - Intersection Observer para animaciones
  - Toggle de menú móvil
  - Validación de formularios

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Gris oscuro | `#2C3E50` | Navegación, títulos |
| Gris medio | `#34495E` | Degradados |
| Rojo tierra | `#C0392B` | Acentos, botones |
| Rojo claro | `#E74C3C` | Degradados de acento |
| Amarillo dorado | `#FFD700` | Logo, destacados |
| Naranja | `#FFA500` | Degradados de botones |

## 📁 Estructura del Proyecto

```
kullawa-website/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── README.md           # Este archivo
└── assets/
    └── images/         # Imágenes del sitio
        ├── logo.png
        ├── agrupacion.jpg
        ├── foto1.jpg
        ├── foto2.jpg
        ├── foto3.jpg
        ├── foto4.jpg
        ├── foto5.jpg
        └── foto6.jpg
```

## 🚀 Cómo usar este proyecto

### 1. Clonar el repositorio
```bash
git clone https://github.com/TU-USUARIO/kullawa-website.git
cd kullawa-website
```

### 2. Agregar tus imágenes
- Coloca tu logo en `assets/images/logo.png`
- Agrega tus fotos en `assets/images/` con los nombres: foto1.jpg, foto2.jpg, etc.

### 3. Agregar videos de YouTube
En `index.html`, busca `VIDEO_ID` y reemplázalo con el ID de tu video:
```html
<!-- Antes -->
<iframe src="https://www.youtube.com/embed/VIDEO_ID" ...></iframe>

<!-- Después (ejemplo) -->
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" ...></iframe>
```

### 4. Abrir en el navegador
Simplemente abre `index.html` en tu navegador favorito.

## 🌐 Deploy en GitHub Pages

1. Sube el proyecto a tu repositorio de GitHub
2. Ve a Settings → Pages
3. Selecciona la rama `main` como source
4. ¡Tu sitio estará disponible en minutos!

URL: `https://TU-USUARIO.github.io/kullawa-website/`

## 📝 Personalización

### Cambiar colores
Edita las variables de color en `styles.css`:
```css
/* Busca y reemplaza estos colores */
#2C3E50  /* Gris oscuro */
#C0392B  /* Rojo tierra */
#FFD700  /* Amarillo dorado */
```

### Modificar textos
Todos los textos están en `index.html`. Busca y edita el contenido según necesites.

### Ajustar animaciones
Las animaciones están en `styles.css` (sección `@keyframes`) y en `script.js` (Intersection Observer).

## 📧 Conectar el formulario

Actualmente el formulario muestra un alert. Para conectarlo a un servicio real:

**Opción 1: Formspree** (Gratis)
```html
<form action="https://formspree.io/f/TU-ID" method="POST">
```

**Opción 2: EmailJS** (Gratis)
Sigue la [documentación de EmailJS](https://www.emailjs.com/docs/)

**Opción 3: Netlify Forms** (Si usas Netlify)
```html
<form name="contact" method="POST" data-netlify="true">
```

## 🎯 Sobre el Proyecto

Este sitio web fue desarrollado para el Centro Cultural KULLAWA de Talca, una agrupación folclórica dedicada a la preservación y difusión de las danzas del norte de Chile, incluyendo:

- 🎭 **Diablada** - Danza representativa del norte con coloridos trajes y máscaras
- ⚔️ **Tobas** - Guerreros andinos que celebran la fuerza y tradición
- 💪 **Caporales** - Danza enérgica con acrobacias y saltos espectaculares
- 🎉 **Salto** - Expresión de alegría y devoción nortina

### Datos de la agrupación:
- 📍 **Ubicación**: Talca, Región del Maule, Chile
- 🎵 **Especialidad**: Folclore del norte de Chile
- 💬 **Eslogan**: "Donde la cultura se hace fiesta"

## 👨‍💻 Autor

Proyecto desarrollado como parte del portafolio de desarrollo web.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

---

**¿Tienes preguntas o sugerencias?** No dudes en abrir un issue o contactar a la agrupación a través del formulario del sitio web.

🎭 **Centro Cultural KULLAWA** - Preservando nuestras tradiciones, construyendo futuro.