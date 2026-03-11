# ViveMedellín 🌆

*Plataforma inteligente para el descubrimiento y recomendación de actividades locales en Medellín.*  
Este proyecto es desarrollado por el equipo *EP01* en el marco de las asignaturas *Ingeniería Web* y *Análisis y Diseño 2*.

---

## 📌 Objetivo del Proyecto

Facilitar a los ciudadanos de Medellín el acceso centralizado y personalizado a eventos, actividades y comunidades locales, mediante un sistema interactivo, dinámico y accesible.

---

## 🚀 Tecnologías utilizadas

- [Next.js](https://nextjs.org/) – Framework React para SSR/SSG
- [React](https://reactjs.org/) – Biblioteca para construir interfaces de usuario
- [Tailwind CSS](https://tailwindcss.com/) – Framework de estilos utilitario
- [Vercel](https://vercel.com/) – Hosting y despliegue automático
- [GitHub Actions](https://github.com/features/actions) – Automatización CI/CD

---

## 🧠 Metodología

- *Diseño atómico* para estructurar los componentes (atoms, molecules, organisms)
- *Control de versiones en ramas*:
  - main: entorno simulado de producción
  - dev: entorno de pruebas y desarrollo activo
- *Integración continua* con GitHub Actions

---

## 📁 Estructura del proyecto
src/
│
├── app/                   # App Router (páginas, layout, routing)
│   └── login/             # Ruta específica de login
│   ├── layout.tsx         # Layout general
│   └── page.tsx           # Home principal
│
├── components/            # Componentes atómicos reutilizables
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
│
.github/
└── workflows/
    └── CI-CD.yaml         # Pipeline de integración y despliegue

## Instalación local
# Clonar el repositorio
git clone https://github.com/tu-usuario/ViveMedellin.git

# Entrar al proyecto
cd ViveMedellin

# Instalar dependencias
yarn install

# Ejecutar en desarrollo
yarn dev

## 🌐 Vive-Medellín en Línea

👉 [Vive-Medellín](https://vive-medellin.vercel.app/)
