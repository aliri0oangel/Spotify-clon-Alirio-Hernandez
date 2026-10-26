# Spotify - Clon estático

Clon educativo de la interfaz de inicio de Spotify, construido con HTML y
Tailwind CSS. El proyecto es una maqueta estática: no reproduce audio, no usa la
API de Spotify y no incluye backend ni autenticación.

## Demo

Puedes abrir el proyecto de dos formas:

1. Abrir `index.html` directamente en el navegador.
2. Servir la carpeta con un servidor local:

   ```bash
   npx serve .
   ```

Las imágenes de portadas se cargan desde el CDN de Spotify y Tailwind se carga
desde su CDN, por lo que necesitas conexión a internet para verlo completo.

## Características

- Página de inicio con canciones, artistas y álbumes populares.
- Barra lateral de biblioteca y banner de registro.
- Header responsive con buscador visual.
- Diseño adaptado a móvil, tablet y escritorio.
- Sin frameworks de JavaScript ni proceso de build.

## Estructura

```text
.
├── .gitattributes
├── .gitignore
├── index.html
├── LICENSE
├── README.md
├── Spotify-logo.jpg
├── Spotify_logo_without_text.svg.webp
├── spotifi-icon.png
└── spotify_logo_icon_189218.webp
```

## Tecnologías

- HTML5
- Tailwind CSS 4 (CDN)
- CSS nativo para el scroll personalizado

## Alcance

Esta versión no incluye:

- Reproductor de audio ni controles funcionales.
- Búsqueda funcional.
- Playlists, favoritos o persistencia de datos.
- Inicio de sesión, registro o backend.
- Integración con la API de Spotify.

## Aviso legal

Proyecto educativo sin ánimo de lucro. No está afiliado, patrocinado ni
respaldado por Spotify. Las marcas, logotipos y portadas pertenecen a sus
respectivos propietarios.

El código de este repositorio se distribuye bajo la licencia MIT incluida en
`LICENSE`.

## Autor

Alirio Hernández.
