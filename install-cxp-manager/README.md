# Backbase Tutorial

El siguiente tutorial tiene como fin una introducción a backbase, su instalación y forma de trabajo con la versión 5.7.

## introducción

EL objetivo de Backbase es permitir a los desarrolladores web crear RIA (Rich Internet Aplication). En la aplicaciones RIA el procesamiento esta hecho del lado del cliente, perminitendote
construir sitios interactivos y dinamicos que se comportan más como una aplicación de escritorio que una aplicación web. Por lo tanto, para crear una aplicación RIA
es necesario crear una solución que lidie con las limitaciones de los navegadores web y las de HTML; interactivas, dinamicas, y personalizables aplicaciones web requieren características que HTML y las plataformas web no soportan,
como por ejemplo permitir el drag and drop de los elementos.

Para obtener más información sobre Backbase visitar el siguiente link o el archivo 1.- Manual.pdf incluido en el repositorio.

 * http://docs.huihoo.com/web/ajax/Backbase/3_1_4/docs/Manual.pdf

Adicionalmente se puede visitar la página oficial de Backbase y su página en Github.

 * https://backbase.com/

 * https://github.com/Backbase


## Instalación de CXP Manager

Basado en el tutorial de Dragoslav Pesovic https://my.backbase.com/docs/how-to-guides/article//setting-up-cxp-5-6-x-and-widget-collection-2-1-x-from-scratch

El primer paso para empezar a desarrollar con Backbase es descargar el administrador CXP, el cual permite importar los sitios, configurarlos y construir portales completos a partir de widgets.

Cabe señalar que el demo esta construido bajo versiones especificas de software de terceros y se recomienda tener instaladas dichas versiones para no caer en un error por las versiones.

A continuación se especifican las versiones del software:

 * Java - 1.8.0_101 link de descarga http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html?ssSourceSiteId=otnes
 * Node - v6.11.2 link de descarga https://nodejs.org/download/release/v6.11.2/
 * Maven - 3.5.2 link de descarga http://maven.apache.org/docs/3.5.2/release-notes.html

#### Paso 1:

Descargar e instalar Java, (Al día de hoy la versión 9 del jdk no es soportada)

#### Paso 2:

Descargar e instalar Maven, para más información se puede revisar la documentación de Maven

#### Paso 3:

Una vez instalados actualizar las variables de entorno como se muestra:

    * JAVA_HOME = directorio raiz del jdk
    * M2_HOME = directorio raíz de Maven
    * M2 = directorio bin dentro de Maven
    * MAVEN_OPTS = -Xmx512m -XX:MaxPermSize=256m
    * PATH debe contener jdk_bin_directory y maven_bin_directory

#### Paso 4:

Se puede revisar las versiones de java y Maven con los siguientes comandos.

* javac -version
* mvn --version (Asegurate de usar la versión correcta del java jdk, si no, revisa la variable JAVA_HOME)

#### Paso 5:

Modifica el archivo settings.xml que es ta en la ruta

C:\Users\user_name\\.m2

si el directorio y el archivo no existen, crealos. Dentro debe ir el siguiente codigo.

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">

    <profiles>
        <profile>
            <id>backbase</id>
            <activation>
                <activeByDefault>true</activeByDefault>
            </activation>
            <repositories>
                <repository>
                    <id>Backbase Artifact Repository</id>
                    <url>https://repo.backbase.com/repo/</url>
                </repository>
            </repositories>
            <pluginRepositories>
                <pluginRepository>
                    <id>Backbase Artifact Repository</id>
                    <url>https://repo.backbase.com/repo/</url>
                </pluginRepository>
            </pluginRepositories>
        </profile>
    </profiles>
    <servers>
        <server>
            <id>Backbase Artifact Repository</id>
            <username>user_name</username>
            <password>password</password>
        </server>
    </servers>
</settings>
```

En el campo de **user_name** y **password** reemplazar con los datos correspondientes.

#### Paso 6:

Ahora debes instalar Nodejs y Npm. Asegurate de poner la siguiente ruta C:\Users\[user-name]\AppData\Roaming\npm en tus variables de entorno Path.

**Se requiere instalar la version 6.11.2 por instalaciones y configuraciones futuras, puedes descargarlo del siguiente link**

 * https://nodejs.org/download/release/v6.11.2/

#### Paso 7:

Ahora hay que instalar las herramientas **bb-cli** con el siguiente comando en la CMD.

`npm install --global @bb-cli/bb-package @bb-cli/bb-import @bb-cli/bb-generate`

El comando de arriba va a instalar **bb-generate, bb-package,** y **bb-import**

Después se debe instalar los generadores

`npm install --global @backbase/generator-project-statics @backbase/generator-model-ng @backbase/generator-widget@2.4.3 @backbase/generator-ui-ng @backbase/generator-ext-ng@2.1.0`


## Creación de un nuevo proyecto con Maven

Para crear un proyecto en Backbase es necesario crear un nuevo proyecto con Maven usando el comando siguiente:

> **Nota. Asegurate de que la ruta en la que estas no contiene espacios, ya que puede generar un problema en la instalación**

`mvn archetype:generate -DarchetypeArtifactId=launchpad-archetype-CXP5.7 -DarchetypeGroupId=com.backbase.launchpad -DarchetypeVersion=2.4.0`

Sete preguntará por los detalles del proyecto

 * groupId – un identificador, e.g. com.backbase.training.
 * artifactId – el nombre de tu proyecto, puede ser el nombre de tu carpeta que creaste
 * versión – Puedes aceptar la default.

Confirma con `y` o `n` para finalizar

## Corriendo el proyecto

Para correr el proyecto, colocáte en la ruta que acabas de crear. Si tu proyecto se llama "demo" haz un `cd demo` desde la consola para moverte a esa carpeta
y desde ahí corre el siguiente comando.

> `mvn clean install -Pclean-database`

Una vez finalizado, corre el siguiente comando

> `run.bat`

Esto abrirá cuatro ventanas de comandos, con diferentes procesos Portal Server, Content Services, Orchestrator, y Solr. Para continuar espera a que en las cuatro ventanas
aparezca el mensaje "Started Jetty Server".

> **Nota. Si en alguna de las ventanas existe un error, Asegurate de solucionarlo primero antes de continuar.**

## Importar información al proyecto.

Esto es necesario para Ejecutar el servidor y verlo ya funcionando en el proyecto, es importante seguir los pasos correctamente y si existe un error
no seguir hasta solucionar el problema.

Paso 1:

En la carpeta del proyecto eliminar la carpeta `statics`

Paso 2:

En la carpeta raíz del proyecto ejecutar el siguiete comando:

> `bb-generate project-statics`

Se te solicitan ciertos datos.

 * Folder name – el nombre de la carpeta que se generará, acepta la de defecto (statics).
 * Project Group Id – el identificador del proyecto, e.g. com.backbase.training.
 * Collection Name – acepta el de defecto (collection-training).
 * Project Version – acepta el de defecto.
 * Node Version – versión de node instalada (for example, v7.5.0).
 * NPM Version – acepta el de defecto.
 * CXP line – selecciona 5.x
 * Collection depends on – selecciona las dependencias de abajo usando la tecla **espacio** y muevete con las flechas arriba y abajo. Presiona enter para terminar
        collection-banking-containers
        collection-retail-banking-mocks
        collection-retail-banking-theming
        collection-retail-banking
 * Would you like to use latest versions for all the dependencies? – Si la versión de cada colección es la 2.10.0, PResiona  `Y`. Si no, ingresa
   n y selecciona 2.10.0 en cada una, usa la tecla espacio para seleccionar y cuando tengas todas presiona enter.

Paso 3:

ingresa a la dirección http://localhost:7777/portalserver/import en tu navegador. INgresa como administador usando `admin` en user y password
y se abrirá una pagina con varias opciones marcadas. En el final de la página hay un botón verde que dice import, presionalo y la página se recargará.

Paso 4:

Cambíate a la carpeta statics del proyecto.

Paso 5:

Descarga el archivo `CXP collection`

repo.backbase.com/backbase-development-rc-releases/com/backbase/universal/collection-cxp-universal/1.3.0/collection-cxp-universal-1.3.0.zip

o en este repo el archivo 3.- collection-cxp-universal-1.3.0

copia el zip en la carpeta statics de tu proyecto. para importarlo ejecuta el siguiente comando en la carpeta statics:

> `bb-import package collection-cxp-universal-1.3.0.zip`

Paso 6:

Ejecuta el siguiente comando desde la carpeta statics.

> `mvn clean package`

> ** Nota. En este paso asegurate de que no haya ningún error, de ser asi solucionalo antes de seguir al siguiente paso. Aquí es donde es requerida la versión 6.11.2 de Nodejs

Paso 7:

Ejecuta el siguiente comando desde la carpeta statics.

> `bb-import package collection-training/target/collection-training-cxp-dist-1.0-SNAPSHOT.zip`

Paso 8:

Descarga el archivo Retail Banking Demo Portal desde:

https://repo.backbase.com/expert-release-local/com/backbase/widget/portal/portal-retail-banking/2.10.0/portal-retail-banking-2.10.0.zip

o desde este repo el archivo 4.- portal-retail-banking-2.10.0.zip

y copia el zip en la carpeta statics de tu proyecto.

#### Para importar el demo en el portal es necesario:

 * entrar en el siguiente link http://localhost:7777/portalserver/cxp-manager
 * clic en create portal -> import portal
 * selecciona el archivo zip descargado.
 * clic en import

Con esto ya esta el demo importado en el CXP Manager.






















