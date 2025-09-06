# TaskFlow - Sistema de Gestión de Tareas

Un sistema moderno y elegante para la gestión de tareas personales y de equipo, construido con las mejores tecnologías web.

## 🚀 Características

- **Dashboard Intuitivo**: Vista general de tu productividad con estadísticas y métricas
- **Gestión de Tareas**: Crear, editar, eliminar y organizar tareas con diferentes prioridades
- **Estados de Tareas**: Seguimiento de tareas pendientes, en progreso y completadas
- **Filtros Avanzados**: Organiza tus tareas por estado y prioridad
- **Interfaz Moderna**: Diseño responsive con modo oscuro/claro
- **Notificaciones**: Sistema de alertas y recordatorios
- **Perfil de Usuario**: Gestión de información personal y preferencias

## 🛠️ Tecnologías Utilizadas

Este proyecto está construido con:

- **Vite** - Herramienta de construcción rápida y moderna
- **TypeScript** - Tipado estático para JavaScript
- **React 18** - Biblioteca de interfaz de usuario
- **React Router DOM** - Enrutamiento del lado del cliente
- **shadcn/ui** - Componentes de interfaz reutilizables
- **Tailwind CSS** - Framework de CSS utilitario
- **Radix UI** - Componentes primitivos accesibles
- **Lucide React** - Iconos modernos y consistentes
- **React Hook Form** - Manejo eficiente de formularios
- **Zod** - Validación de esquemas TypeScript
- **TanStack Query** - Manejo de estado del servidor
- **Sonner** - Sistema de notificaciones toast

## 📦 Instalación

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clona el repositorio**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd nebula-manage
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abre tu navegador**
   Navega a `http://localhost:5173` para ver la aplicación.

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Construcción
npm run build        # Construye la aplicación para producción
npm run build:dev    # Construye en modo desarrollo

# Linting
npm run lint         # Ejecuta ESLint para verificar el código

# Preview
npm run preview      # Previsualiza la construcción de producción
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── layout/         # Componentes de diseño (sidebar, etc.)
│   ├── ui/             # Componentes de interfaz (shadcn/ui)
│   └── theme-provider.tsx
├── hooks/              # Hooks personalizados de React
├── lib/                # Utilidades y configuraciones
├── pages/              # Páginas de la aplicación
│   ├── Dashboard.tsx   # Panel principal
│   ├── Tasks.tsx       # Gestión de tareas
│   ├── Login.tsx       # Página de inicio de sesión
│   └── Index.tsx       # Página principal con routing
└── main.tsx           # Punto de entrada de la aplicación
```

## 🎨 Personalización

### Temas

La aplicación soporta modo claro y oscuro. Los temas se pueden personalizar en:
- `src/components/theme-provider.tsx`
- `tailwind.config.ts`

### Componentes

Los componentes de shadcn/ui se pueden personalizar modificando los archivos en `src/components/ui/`.

### Estilos

Los estilos globales se encuentran en:
- `src/index.css` - Estilos globales
- `src/App.css` - Estilos específicos de la aplicación

## 🚀 Despliegue

### Construcción para Producción

```bash
npm run build
```

Los archivos construidos se generarán en la carpeta `dist/`.

### Despliegue en Vercel

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. Despliega automáticamente

### Despliegue en Netlify

1. Conecta tu repositorio a Netlify
2. Configura el comando de construcción: `npm run build`
3. Especifica el directorio de salida: `dist`

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Si tienes alguna pregunta o necesitas ayuda, por favor:

1. Revisa la documentación
2. Busca en los issues existentes
3. Crea un nuevo issue si no encuentras la respuesta

---

**¡Gracias por usar TaskFlow!** 🎉
