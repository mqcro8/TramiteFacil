# TramiteFacil

**Una aplicación web para simplificar trámites burocráticos.** Escolar, gubernamental, médico, vehicular y laboral — todo en un solo lugar.

Este proyecto fue desarrollado como propuesta para la clase de programación. El objetivo era identificar un problema real y construir una solución viable. TramiteFacil facilita el acceso a información clara y organizada sobre los trámites más comunes en México: requisitos, pasos a seguir, costos, fechas y lugares, permitiendo al usuario guardarlos y crear recordatorios.

---

## Tech Stack

| Frontend | Herramientas |
|---|---|
| [React 18](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Lenguaje principal |
| [Vite 6](https://vitejs.dev/) | Build tool / dev server |
| [React Router 7](https://reactrouter.com/) | Routing SPA |
| [Tailwind CSS 4](https://tailwindcss.com/) | CSS utility-first |
| [Radix UI](https://www.radix-ui.com/) | Primitivas headless accesibles |
| [shadcn/ui](https://ui.shadcn.com/) | Componentes sobre Radix + Tailwind |
| [MUI 7](https://mui.com/) | Material UI |
| [Motion](https://motion.dev/) | Animaciones |
| [Lucide React](https://lucide.dev/) | Iconos |
| [Sonner](https://sonner.emilkowal ski.com/) | Notificaciones toast |
| [react-hook-form](https://react-hook-form.com/) | Manejo de formularios |
| [Recharts](https://recharts.org/) | Gráficas |

---

## Lenguajes

| Lenguaje | Uso |
|---|---|
| **TypeScript** | Todo el código fuente de la app (`.ts`, `.tsx`) |
| **CSS** | Estilos base, tema y tokens de diseño |
| **HTML** | Punto de montaje SPA |
| **PHP** | Stub de backend (DB.php — MySQL/PDO, no conectado) |
| **JavaScript** | Archivos de configuración (vite, eslint, postcss) |
| **Markdown** | Documentación de diseño |
| **SVG** | Favicon e íconos estáticos |
| **JSON** | package.json, tsconfig |

---

## Almacenamiento

Actualmente la aplicación es completamente **client-side**:

- **localStorage** — persistencia de trámites guardados y recordatorios del usuario.
- **Datos hardcodeados** — la información de cada trámite (requisitos, pasos, costos, fechas) está definida estáticamente en `src/app/utils/tramitesData.ts` y en `TramiteDetailScreen.tsx`.
- **DB.php** — archivo PHP con conexión MySQL vía PDO incluido en la raíz del proyecto, preparado para una futura integración con base de datos.

---

## Estilos

El diseño sigue un sistema de tokens definido con **CSS custom properties** en `src/styles/theme.css`:

- **Utility-first** con Tailwind CSS 4 en todos los componentes.
- **Tipografía**: Poppins (Google Fonts) en pesos 400–700.
- **Modo oscuro**: soporte completo via clase `.dark` con `@custom-variant`.
- **Animaciones**: via librería Motion (antes Framer Motion).
- **Paleta principal**: azul (`#2F6FED`) como color primario, verde (`#22C55E`) para acciones de guardado, y escala de grises para texto y fondos.
- **Componentes UI**: más de 40 componentes shadcn/ui (accordion, dialog, dropdown-menu, sidebar, tabs, etc.).

---

## Estructura del proyecto

```
TramiteFacil/
├── index.html                  # Punto de montaje SPA
├── DB.php                      # Stub backend MySQL (placeholder)
├── package.json                # Dependencias y scripts
├── vite.config.ts              # Configuración de Vite
├── tsconfig*.json              # Config TypeScript
├── postcss.config.mjs          # Config PostCSS
├── eslint.config.js            # Linter
├── public/                     # Archivos estáticos (favicon, icons)
│   ├── favicon.svg
│   └── icons.svg
├── src/                        # Código fuente
│   ├── main.tsx                # Entry point React
│   ├── app/
│   │   ├── App.tsx             # Router principal (11 rutas)
│   │   ├── components/         # Pantallas y componentes
│   │   │   ├── SplashScreen.tsx
│   │   │   ├── LoginScreen.tsx
│   │   │   ├── RegisterScreen.tsx
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── TramitesListScreen.tsx
│   │   │   ├── TramiteDetailScreen.tsx
│   │   │   ├── BottomNav.tsx
│   │   │   ├── SavedScreen.tsx
│   │   │   ├── RemindersScreen.tsx
│   │   │   ├── SearchScreen.tsx
│   │   │   ├── FavoritesScreen.tsx
│   │   │   ├── ProfileScreen.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── CategoryCard.tsx
│   │   │   ├── TramiteCard.tsx
│   │   │   ├── ui/             # Componentes shadcn/ui (~40)
│   │   │   └── figma/          # Componente ImageWithFallback
│   │   └── utils/
│   │       ├── localStorage.ts # Helpers de persistencia
│   │       └── tramitesData.ts # Catálogo de trámites
│   ├── styles/
│   │   ├── index.css           # Entry point de estilos
│   │   ├── fonts.css           # Import Poppins (Google Fonts)
│   │   ├── tailwind.css        # Config Tailwind v4
│   │   └── theme.css           # Tokens de diseño (185 líneas)
│   └── imports/                # Documentación de diseño (MD)
│       ├── app-design-guide.md
│       ├── tramitefacil-design-doc.md
│       └── pasted_text/
│           └── tramitefacil-app-expansion.md
└── Cardona_Mejia_Fanny/        # Build de producción (vite build)
    └── assets/
        ├── index-CAQS4xZV.css
        └── index-ZR-v_eD7.js
```

---

## Funcionalidades

- Navegar por **22+ trámites** organizados en **5 categorías**: Gubernamental, Educativo, Médico, Vehicular, Laboral.
- Ver **detalle completo** de cada trámite: requisitos, paso a paso, fechas importantes, lugar y costo.
- **Guardar/desguardar** trámites en favoritos.
- Crear **recordatorios** con fecha y hora.
- Navegación inferior fija con 4 pestañas (Inicio, Trámites, Guardados, Recordatorios).
- Animaciones de transición entre pantallas.
- Soporte **modo oscuro** (tokens de diseño incluidos).

---

## Comenzar

```bash
npm install
npm run dev      # Entorno de desarrollo (http://localhost:5173)
npm run build    # Build de producción
```

---

## Deployment

Hosteado en Render: [https://tramitefacil.onrender.com](https://tramitefacil.onrender.com)

---

## Licencia

Proyecto académico — sin licencia específica.
