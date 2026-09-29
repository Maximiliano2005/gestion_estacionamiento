# gestion_estacionamiento

Proyecto para la evaluación n°1 de Desarrollo web, trabajando con React, JavaScript y Bootstrap.

[![Built with React](https://img.shields.io/badge/React-18.x-61dafb?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![Vite Powered](https://img.shields.io/badge/Built%20with-Vite-646cff?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev)
[![Live Demo](https://img.shields.io/badge/Demo-Available-4caf50?style=flat-square&logo=vercel)](https://gestion-estacionamiento-omega.vercel.app)

## Overview

**gestion_estacionamiento** Es una aplicación de una sola página (SPA) basada en React para la gestión de estacionamientos. El proyecto demuestra prácticas modernas de desarrollo web utilizando React, JavaScript, Bootstrap y Vite. Presenta una interfaz de usuario limpia con páginas para Panel de control, Estacionamiento, Historial, Inicio de sesión y Registro, y utiliza datos JSON estáticos con fines demostrativos. La aplicación utiliza React Router para la navegación y React Icons para la iconografía, lo que la hace funcional y visualmente atractiva.


## Tech Stack

- **Languages:** JavaScript, HTML, CSS
- **Framework:** [React](https://react.dev)
- **Build Tool:** [Vite](https://vitejs.dev)
- **Styling:** [Bootstrap](https://getbootstrap.com), [React Bootstrap](https://react-bootstrap.github.io)
- **Routing:** [React Router DOM](https://reactrouter.com)
- **Iconography:** [React Icons](https://react-icons.github.io/react-icons)
- **Linting:** ESLint

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Maximiliano2005/gestion_estacionamiento.git
cd gestion_estacionamiento
npm install
```

## Usage

Start the development server:

```bash
npm run dev
```

The app will be available at the local development URL (typically [http://localhost:5173](http://localhost:5173)).

### Common Commands

- **Start development server:**  
  `npm run dev`
- **Build for production:**  
  `npm run build`
- **Preview production build:**  
  `npm run preview`
- **Lint code:**  
  `npm run lint`

## Project Structure

```
gestion_estacionamiento/
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── App.css
    ├── App.jsx
    ├── assets/
    │   └── Logo.png
    ├── components/
    │   ├── layout/
    │   └── props/
    ├── datos.json
    ├── index.css
    ├── main.jsx
    └── pages/
        ├── DashboardPage.jsx
        ├── Estacionamiento.jsx
        ├── Historial.jsx
        ├── LoginPage.jsx
        └── Registrar.jsx
```

- **public/**: Static assets (favicon, icons)
- **src/assets/**: Images and static resources
- **src/components/**: Reusable UI components and layouts
- **src/pages/**: Main application pages (Dashboard, Parking, History, Login, Registration)
- **src/datos.json**: Static data used by the app

## Contributing

Contributions are welcome!  
Follow the standard GitHub workflow:

1. **Fork** this repository
2. **Create a branch:** `git checkout -b feature/your-feature`
3. **Commit your changes:** `git commit -m "Add some feature"`
4. **Push to your branch:** `git push origin feature/your-feature`
5. **Open a Pull Request**

## License

**No license specified.**  
If you intend to use or contribute to this project, please contact the repository owner for license information.

---
[![README powered by ReadmeAI](https://img.shields.io/badge/README-powered%20by%20ReadmeAI-4c9be8?style=flat-square&logo=markdown)](https://www.readmeai.in)