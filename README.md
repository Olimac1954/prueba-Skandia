# Prueba técnica Skandia – Desarrollador Junior (Plan Financiero Digital)

## 📌 Descripción
Este proyecto es una aplicación **frontend desarrollada en Angular**.  
No cuenta con backend propio, sino que actúa como una vista que **consume información desde un API externo**.  

La aplicación incluye **4 componentes principales**:
- **Navbar** (barra superior)  
- **Sidebar** (barra lateral)  
- **Footer** (pie de página)  
- **Objetivo** (visualización de la información requerida)  

Adicionalmente incluye el **servicio y interfaz para el consumo de la API suministrada**

🔗 Diseño previo: [Adobe XD](https://xd.adobe.com/view/7520751b-2b53-4b0f-9613-527817e8cc92-2073/specs/)  
🔗 Endpoint API: [MockAPI](https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards)

---
## 🛠 Tecnologías utilizadas
- **Angular 18** – Framework frontend  
- **TypeScript** – Lenguaje principal  
- **HTML y CSS** – Estructura y estilos  
- **API REST** – Consumo de datos externos  

---

## ✅ Requisitos previos
Asegúrate de tener instalado lo siguiente:  

- [Node.js](https://nodejs.org/) (v18 o superior)  
- [Angular CLI](https://angular.dev/tools/cli) (v18 o superior)  
- [Git](https://git-scm.com/) (para clonar el repositorio)  

---

## ⚡ Instalación y ejecución

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Olimac1954/prueba-Skandia
   cd prueba-Skandia

2. Instalar dependencias
    asegurarse de tener node.js y npm instalados
    ```bash
    - npm install

3. Ejecutar modo desarrollo
    ```bash
    - ng serve --o 

4. Esto levanta un servidor de desarrollo normalmente en 
    - http://localhost:420

5. ## 📂 Estructura del proyecto
       src/app/ # Lógica principal de la aplicación
        ├── footer/ # Componente del pie de página
        ├── interface/ # Definición de interfaces y modelos de datos
        │└── objetivo.ts # Interfaz para los objetivos
        ├── navbar/ # Barra de navegación superior
        ├── objetivo/ # Componente para gestionar y mostrar objetivos
        ├── services/ # Servicios para consumo de API y manejo de datos
        │ └── informacion.service.ts # Servicio que consume la API
        ├── sidebar/ # Barra lateral de navegación
        ├── skda-objetivo/ # Módulo/componente relacionado a objetivos
        ├── app-routing.module.ts # Configuración de rutas
        ├── app.component.* # Componente raíz de la aplicación
        ├── app.module.ts # Módulo principal
        └── app.module.server.ts # Módulo para renderizado en servidor (SSR)

        assets/ # Recursos estáticos (imágenes, íconos, estilos)
        index.html # Archivo raíz donde se monta Angular
        main.ts # Punto de entrada de la aplicación
        main.server.ts # Entrada para SSR
        styles.css # Estilos globales
        angular.json # Configuración de Angular CLI
        package.json # Dependencias y scripts del proyecto
        tsconfig*.json # Configuración de TypeScript
        README.md # Documentación principal

6. Autor/es o equipo de desarrollo.

    Andrés Ayala (@Olimac1954) – Desarrollo e implementación del proyecto.

7. licencia
    Este proyecto se ha desarrollado con fines educativos y de prueba técnica.
    Puedes usarlo como referencia libremente.
    
