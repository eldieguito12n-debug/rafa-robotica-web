# Guía de Despliegue y Mantenimiento - Rafa Robótica

Este documento contiene todas las instrucciones necesarias para ejecutar, desplegar y mantener tu nueva página web.

## 1. Ejecutar el proyecto localmente

Si deseas ver la página en tu propia computadora o hacer modificaciones, sigue estos pasos:

1. Abre una terminal (o PowerShell) y asegúrate de estar en la carpeta del proyecto (`rafa-robotica`).
2. Instala las dependencias (si aún no lo has hecho) ejecutando:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo ejecutando:
   ```bash
   npm run dev
   ```
4. Abre tu navegador web y visita: `http://localhost:3000`

## 2. Cómo actualizar los datos (Sin programar)

He configurado la página para que puedas cambiar la información fácilmente sin tocar los componentes visuales. Todos los datos están en la carpeta `src/data/`:

- **Información General y Contacto**: Edita `src/data/siteConfig.ts` para cambiar el correo, teléfono, links de redes sociales y descripción.
- **Servicios**: Edita `src/data/services.ts` para agregar o modificar los servicios ofrecidos.
- **Proyectos**: Edita `src/data/projects.ts` para agregar tus propios proyectos. Solo necesitas cambiar el texto y reemplazar el link de la imagen por tus imágenes reales (que puedes guardar en la carpeta `public/`).
- **Tecnologías**: Edita `src/data/technologies.ts` para añadir más herramientas a la lista animada.

## 3. Cómo subirlo a GitHub

Para poder alojar la página, primero necesitas subir el código a GitHub:

1. Crea una cuenta en [GitHub](https://github.com/) si no tienes una.
2. Crea un **Nuevo Repositorio** (New Repository) en GitHub. Llámalo, por ejemplo, `rafa-robotica-web`. No selecciones inicializar con README.
3. En tu terminal (dentro de la carpeta `rafa-robotica`), ejecuta los siguientes comandos:
   ```bash
   git add .
   git commit -m "Versión inicial de la página web"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/rafa-robotica-web.git
   git push -u origin main
   ```
   *(Reemplaza el link por el que te da GitHub)*.

## 4. Cómo desplegarlo en Vercel (Gratis)

Vercel es la mejor plataforma para alojar proyectos en Next.js.

1. Ve a [Vercel](https://vercel.com/) y crea una cuenta utilizando tu perfil de GitHub.
2. Una vez dentro de Vercel, haz clic en **"Add New" -> "Project"**.
3. Verás una lista de tus repositorios de GitHub. Selecciona el repositorio de `rafa-robotica-web` y haz clic en **"Import"**.
4. Deja toda la configuración por defecto y haz clic en **"Deploy"**.
5. ¡Listo! Vercel construirá tu sitio y en 1-2 minutos te dará un link público provisional para que puedas ver tu página online.

## 5. Cómo conectar tu dominio personalizado

Para usar `www.rafa-robotica.com`:

1. En el panel de control de tu proyecto en Vercel, ve a la pestaña **"Settings"** (Configuración) y luego a **"Domains"** (Dominios).
2. Escribe tu dominio `rafa-robotica.com` y haz clic en **"Add"**.
3. Vercel te dará unas instrucciones con unos **registros DNS** (generalmente un registro A y un registro CNAME).
4. Ve al proveedor donde compraste tu dominio (GoDaddy, Namecheap, Hostinger, etc.).
5. Entra a la configuración DNS de tu dominio y agrega los registros que te indicó Vercel.
6. En unas horas (a veces minutos), Vercel verificará los registros y tu página estará disponible en tu propio dominio con certificado de seguridad HTTPS automático.

## 6. Cómo hacer que Google pueda indexar la página

El código ya está totalmente preparado con las mejores prácticas SEO (Metadata, OpenGraph, Sitemap y Robots.txt autogenerados). Para que Google te encuentre más rápido:

1. Ve a [Google Search Console](https://search.google.com/search-console).
2. Añade tu dominio `rafa-robotica.com` como propiedad. (Google te pedirá verificar que eres el dueño, usualmente añadiendo un registro TXT en tus DNS, igual que hiciste con Vercel).
3. Una vez verificado, en el menú izquierdo ve a **"Sitemaps"**.
4. Escribe `sitemap.xml` en el campo y haz clic en **Enviar**.
5. ¡Listo! Esto le indica a Google exactamente cómo es la estructura de tu página para que la lea e indexe en sus resultados de búsqueda.
