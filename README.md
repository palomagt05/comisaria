# Comisaría
DWI Comisaría

# Sistema de Información para Comisaría de Policía

Este proyecto es un sistema de información para gestionar el funcionamiento de una comisaría de policía, utilizando React para el frontend y Node + Express para el backend, con MySQL como base de datos.

## Tabla de Contenidos
- [Descripción del Proyecto](#descripción-del-proyecto)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contribuir](#contribuir)
- [Licencia](#licencia)
- [Clonación](#clonación)

## Descripción del Proyecto

El sistema de información de la comisaría de policía está diseñado para gestionar y registrar diversas actividades y recursos de la comisaría, incluyendo la gestión del personal, el inventario de armas, la administración de delincuentes y calabozos, y el seguimiento de casos investigativos.

## Instalación

Sigue estos pasos para instalar y configurar el proyecto localmente.

### Frontend

1. Entra en la carpeta general del proyecto.
      * cd  C:/ruta/a/tu/proyecto

2. Crea la aplicación React en la terminal:
      * npx create-react-app react-front

3. Entra a la carpeta de "reactfront":
      * cd reactfront

4. Instala las dependencias necesarias:
     * npm install axios react-router-dom 
     *  npm install bootstrap

### Backend
1. Entra en tu carpeta general y luego en la subcarpeta del backend que es la de "node". En la terminal, ejecuta lo siguiente:
    * cd C:/ruta/a/tu/proyecto/comisaria/node

2. Inicializa el proyecto:
     * npm init -y
   Después de ejecutar este comando, aparecerá el archivo package.json.

3. Agrega "type": "module" debajo de "main": "index.js" en el archivo package.json.

4. Instala las dependencias necesarias:
     * npm install express cors mysql sequelize

## Uso
Para correr la carpeta del frontend:

1. Inicia el frontend:
     * cd c:/ruta/a/tu/proyecto/comisaria/react-front
     * npm start

## Licencia
Este proyecto está bajo la Licencia MIT.

## Clonación
Clona este repositorio usando git bash:

* git clone https://github.com/palomagt05/comisaria.git