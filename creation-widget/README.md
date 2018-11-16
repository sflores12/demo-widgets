# Widgets

Una vez que hemos instalado el CXP Manager  creado un proyecto, podemos crear widgets que serán reutilizados a lo largo del desarrollo del proyecto.

Para crear widgets se debe seguir el siguiente flujo:

1. Generación de coleción de widgets
    * Basado en Retail Collection
2. Generación del Widget, Modelo y Extensión
3. Generación de Data Service module
    * Se genera a partir del RAML
    * Es el que hace las peticiones al REST(AJAX)
4. Generación de un componente
5. Generación del theme
   * Los estilos de Widget y componentes van en el theme con SASS
6. Empaquetar colección
7. Importar colección al CXP

## Prerrequisitos

Antes de comenzar a usar los widgets es necesario instalar unas herramientas que nos ayudan a generar automaticamente los widgets.

en la ventana de comandos introducir el siguiente comando:

> `npm install --global bb-cli`

con este comando se instalan de manera global las herramientas cli.

Ahora es necesario instalar los generadores que se usan para crear los widgets, los contenedores y otros componentes de CXP.

> `npm install @backbase/generator-widget @backbase/generator-widget-lp @backbase/generator-container @backbase/generator-container-template -g`


## 1. Generación de colección de widgets

Lo primero que debe hacerse es crear una colección de widgets, esta colección es una carpeta que contiene todos los elementos de backbase que se importan
al administrador de cxp.

Para más información visitar

> https://gitlab.com/kevinsalinasramirez/backbase#importar-informaci%C3%B3n-al-proyecto

En el apartado de importar información al proyecto donde se explica cómo borrar la carpeta statics para generarla con la información de la colección.

## 2. Generación del widget, Modelo y Extensión.

Para crear un widget es necesario abrir una ventana de comandos y moverse al directorio `src` dentro de la colección que a su vez debe estar en la
carpeta statics por ejemplo.

> `C:/users/[tu usuario]/documentos/backbase/**demo**/**statics**/**collection-training**/**src**`.

En este caso:

* demo: nombre del Proyecto, en el se encuentran todos los archivos necesarios para correr el servidor y el administrador CXP.
* statics: carpeta de archivos editables por el usuario, aqui se encuentra la colección de widgets.
* collection-training: nombre de la colección de widgets y componenetes de backbase

Aqui se introduce el comando siguiente para crear un widget:

> `bb-generate widget ng`

lo que hacemos es generar un nuevo widget usando la configuracion de angular. En este punto la ventana de comandos solicita unos datos:

* nombre: es el nombre que recibe el widget
* title: Titulo que va a llevar el widget.
* Description: Descripción sobre el funcionamiento del mismo.
* versión: Aceptar la de default.
* Create extension now? : Aceptar, en este caso se crea la extension del widget.
* Create model now?: Aceptar, crea el modelo del widget.
* version de backbase: 5.x

> #### Nota. En el nombre es importante seguir la notación (tipo)-(namespace)-(nombre) eg. widget-trasferencias-propias

Esto terminará de crear el widget en la carpeta src. Al final deben verse 3 carpetas la carpeta src:

 * ext-... : carpeta de la vista
 * model-... : carpeta del modelo
 * widget-... :  carpeta del controlador

para más información se puede visitar la guía 'methodology widget development' en el siguiente enlace:

> https://github.com/Backbase/methodology-widget-development

> Nota. Por convención se crea una carpeta con el nombre del elemento. por ejemplo si el widget se llama widget-transferencias-propias, se crea una carpeta llamada transferencias
y dentro otra llamada propias, de este modo se lleva un mejor orden con la creación de widgets.


## 5. Generación del theme

El theme dentro del proyecto es la carpeta donde se crean todos los estilos y se colocan los archivos estáticos usados en el proyecto.

#### Instalación de bb-sass y bb-customize

Para usar el tema de backbase es necesario importar estas dependencias, debemos ejecutar el siguiente comando:

`npm install -g @bb-cli/bb-build-plugin-sass @bb-cli/bb-customize`

Una vez instalado, para usar el tema es necesario abrir una ventana de comandos en la carpeta statics y escribir lo siguiente:

`bb-customize item theme-bb-retail collection-training/src --new-name theme-training-default`

Esto suponiendo que tu colección de widgets se llama **collection-training** si no, sustituir el el comando anterior el nombre de tu colección.

## 6. Empaquetar colección

Establecer el nombre y la versión

en la dirección ** statics/collection-training/src/theme-training-default**
abrir el archivo model.xml reemplazar el valor **Theme for Retail Banking Collection** por **Theme Training Default**
y la versión por la **0.0.1**

Una vez que el compoente esta listo podemos importarlo al administrador de CXP, para ello hay que navegar a la carpeta statics, abrir una cmd y escribir lo siguiente:

`bb-package collection-training/src --prebuilt=collection-training/prebuilt -b sass --exclude-defaults`

> Nota.

Revisa que se haya creado el archivo **package.zip** en la carpeta statics.

#### 7. Importar a CXP manager

En la misma carpeta de statics usa el comando

`bb-import package.zip`

para importar hacía CXP Manager el paquete.

> Nota. El comando bb-package toma todo lo que hay dentro de src y lo empaqueta, asi que si creas nuevos widgets o temas se usa el mismo comando para
empaquetar todo y subirlo a CXP Manager.
