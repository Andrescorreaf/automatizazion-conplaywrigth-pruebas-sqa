# 🧪 Proyecto de Automatización con Playwright y POM

Este proyecto implementa pruebas automatizadas de extremo a extremo utilizando [Playwright](https://playwright.dev/) con el patrón de diseño **Page Object Model (POM)**, lo que permite una arquitectura escalable, mantenible y reutilizable.

## 📁 Estructura del Proyecto

automatizacion-conplaywritght-prueba-sqa/ ├── tests/ # Casos de prueba (test specs) │ └── addproductocar.spec.ts ├── pages/ # Page Objects │ └── home-page.ts │ └── DashboardPage.ts ├── utils/ # Utilidades o helpers │ └── test-data.ts ├── playwright.config.ts # Configuración de Playwright ├── package.json # Dependencias y scripts ├── tsconfig.json # Configuración de TypeScript └── README.md # Este archivo


## 🚀 Tecnologías Usadas

- **Playwright**
- **TypeScript**
- **Page Object Model (POM)**
- **Node.js**

## ✅ Requisitos Previos

- Node.js >= 18.x
- npm o yarn
- Git (opcional)

## 📦 Instalación

1. Clona este repositorio:

git clone https://github.com/Andrescorreaf/automatizazion-conplaywrigth-pruebas-sqa.git
cd automatizazion-conplaywrigth-pruebas-sqa

1. **Instala las dependencias:**

* npm install

3. **Instala los navegadores necesarios para Playwright:**

* npx playwright install

## 🧪 Ejecución de Pruebas

1. **Todas las pruebas:**

* npx playwright test

2. **Prueba específica:**

* npx playwright test tests/example.spec.ts

3. **Modo UI:**

* npx playwright test --ui

4. **Reporte HTML:**

* npx playwright show-report

## 📚 Buenas Prácticas

* Usa Page Objects para encapsular la lógica de UI.
* Mantén tus pruebas limpias y enfocadas solo en la verificación.
* Utiliza test.describe y test.beforeEach para organizar pruebas.

## 🧑‍💻 Autor
Andres Correa

* 📧 felipefranco989@gmail.com
* 🌐 github.com/Andrescorreaf

## 📄 Licencia
Este proyecto está bajo la licencia MIT.

