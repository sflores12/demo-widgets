# 
![qownnotes-media-CU7976](./assets/images/logo.png)

BACKBASE: create the Widgets

### CXP Manager:
_**Nota:** Install zip, para tener la master page_

### _Instalar los Paquetes globales_

> Las versiones de los paquetes corresponden a la version de nodeJS 6.13.1

    npm install --global @bb-cli/bb-package@2.8.0 @bb-cli/bb-import@2.3.4 @bb-cli/bb-generate@2.5.1 @bb-cli/bb-config@2.0.1

    npm install --global @backbase/generator-project-statics@1.5.2 @backbase/generator-model-ng@2.1.0 @backbase/generator-widget@3.1.0 @backbase/generator-ui-ng@2.0.3 @backbase/generator-ext-ng@3.0.0


### _Paquetes adicionales:NodeJS_
* **JSDoc**

        npm i -D jsdoc tui-jsdoc-template
        npm run docs
            > jsdoc -c jsdoc.json

* **ESLint**

        npm install eslint --save-dev
        npm i -D eslint@3.0.1 eslint-plugin-import@1.10.3 @backbase/eslint-config-backbase
        npm run lint
            > eslint . --fix

* **Node Security Platform**

        npm install -g nsp
            npm install -g nsp nsp-reporter-checkstyle
                nsp check --reporter checkstyle

* **cross-env**

    	npm install --save-dev cross-env

* **fs-extra**

	    npm install --save fs.extra

### _Crear la carpeta contenedora de widget_
* **create carpeta contenedora de widget**

> --Depends on the collection: collection-retail-banking select

	bb-generate project-statics
	--? collection-retail-banking: 2.8.0

### Aceder al proyecto de widget creado
        cd bb-widgets
        mvn clean package

### Paquetes locales: instalarlos despues de crear el proyecto de widget

        @bb-cli/bb-config
	@bb-cli/bb-serve
	@bb-cli/bb-package
	@bb-cli/bb-build-plugin-uglify
	@bb-cli/bb-test

* **Resumen**

        npm install --save-dev webpack@1.15.0

        npm install --save-dev @bb-cli/bb-build-plugin-font@1.0.1 @bb-cli/bb-build-plugin-sass@1.2.0 @bb-cli/bb-build-plugin-uglify@1.0.1 @bb-cli/bb-doc@2.0.1-pr.15 @bb-cli/bb-package@2.5.1 @bb-cli/bb-serve@2.6.0 @bb-cli/bb-test@2.3.1 @bb-cli/bb-test-plugin-ngmock@1.0.1

* **Detalles**

    * **Plugins:**

            npm install --save-dev @bb-cli/bb-build-plugin-font@1.0.1 @bb-cli/bb-build-plugin-sass@1.2.0 @bb-cli/bb-build-plugin-uglify@1.0.1

        > En caso de error de sass

        * **webpack:**

                npm install --global webpack
                npm install --save-dev webpack@1.15.0
                npm install --save-dev @bb-cli/bb-build-plugin-sass@1.2.0

	* **Documentación:**

			npm install --save-dev @bb-cli/bb-doc@2.0.1-pr.15

	* **Generación de paquetes para importar al CXP y a mobile:**

			npm install --save-dev @bb-cli/bb-package@2.5.1

    * **Servidor para el desarrollo de Widgets(WebpackDevServer):**

			npm install --save-dev @bb-cli/bb-serve@2.6.0

    * **Pruebas unitarias y Lint:**

			npm install --save-dev @bb-cli/bb-test@2.3.1

    * **Angular mocks:**

			npm install --save-dev @bb-cli/bb-test-plugin-ngmock@1.0.1

### Instalacion para general Themes:

* **Instalacion de la dependencia**

                npm install -g @bb-cli/bb-build-plugin-sass@1.2.0 @bb-cli/bb-customize

* **Crear un nuevo theme**

                bb-customize theme-bb-default --new-name theme-custom-mytheme collection-myportal/src

* **Clonar un theme existente**

                bb-customize item theme-bb-retail collection-myportal/src --new-name theme-myportal-default

### Genera un nuevo widget:

	bb-generate widget ng

### Importar package al CXP Manager

* **Para exportar al CXP-Manager ejecutar en consola los siguientes comandos:**

>**Para empaquetar a zip:**

        npm run package-ng

>**Para importar**

        npm run import-ng

_**Nota:** en el archivo **package.json** agregar estos atajos con las instrucciones correspondientes._ y en su contenido agregar las instrucciones correspondientes:

```javascript
package-ng:'bb-package collection-myportal/src --prebuilt=collection-myportal/prebuilt -b sass --exclude-defaults',
import-ng:'bb-import --portal-context=/ package package.zip'
```


> Descomprimir el archivo:BB-Training.zip dentro trae otra zip:raml.zip, descomprimirla y dejarla en raiz en la carpeta del proyecto de widget

* **Comvertir el raml a codigo javascript para los modulos de angular y consumirlos**

        bb-convert raml raml/advisors/advisors.raml --template mock-ng --output collection-myportal/src -y
        bb-convert raml raml/appointments/appointments.raml --template mock-ng --output collection-myportal/src -y
        bb-convert raml raml/customers/customers.raml --template mock-ng --output collection-myportal/src -y

### RAML a MOCKUP

    bb-convert raml raml_Login/login.raml --template mock-ng --output collection-myportal/src -y

    bb-convert raml DemoLogin-RAML-API/api.raml --template mock-ng --output collection-myportal/src -y
    bb-convert raml DemoLogin-RAML-API/login.raml --template mock-ng --output collection-myportal/src -y
    bb-convert raml DemoLogin-RAML-API/ramlLogin/login.raml --template mock-ng --output collection-myportal/src -y
    bb-convert raml ramlSLogin/login.raml --template mock-ng --output collection-myportal/src -y

    bb-convert raml accitrade-api/api.raml --template mock-ng --output collection-myportal/src -y

### RAML a Model Services

    bb-convert raml DemoLogin-RAML-API/login.raml --output collection-myportal/src -y

    bb-convert raml raml_Login/login.raml --output collection-myportal/src -y


_**Nota:** en el modelo si se importa los key del mock o data es necesario los mismos nombre de las variables._

###Configuraciones extras:

 * **Localizar en el archivo:**

> Ruta del archivo: collection-myportal\src\data-bb-login-http-ng\scriptsindex.js

```javascript
.provider(backBaseDemoLoginDataKey, [() => {
    const config = {
    baseUri: '/',
    };
```

* **y reeemplazar por**

```javascript
const portal = window.b$ && window.b$.portal;
//const serverRoot = "http://192.168.10.223:7777";//si el servidor de las API se encuentra en otro servidor.
const serverRoot = (portal.config) ? portal.config.serverRoot : '';
const config = {
    baseUri: `${serverRoot}/services/rest`,
    headers: '',
};
```

* **Despues en el:Backbase\cxp-demo\backbase\backbase.properties add las siguientes lineas: al principio del archivo**

        demologin-host=192.168.10.223 ### localhost
        demologin-port=3000 ### puerto del raml run
        demologin-context=

_**Nota:** el localhost y el puerto deven ser el mismo para el .ddconfig de los widgets para que se pueda importar y funcionen sincronizados._


### Test de los servicios del war

* Instalacion de raml-mockup

        npm install -g raml-1-mockup

_**Nota:** en la carpeta del raml de la api ejecutar en consola la siguientes instruccion para simular las peticiones GET, POST..._

        raml-1-mockup login.raml -p 3000

### Comandos primordiales para el repositorio de GIT

* **Agregar un repositorio existente:**

        git init
        git remote add origin https://github.com/sflores12/widget-demo.git

* **Ver el estatus:**

        git status


* **Agregar todo. antes de add configurar el archivo _.gitignore_**

        git add .

**Nota:** Url del archivo para copiar un** _.gitignore:_** [Node.gitignore](https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore) y generar el archivo en raíz del proyecto

**Comentario:** para agregar un emmotion al mensaje del commit copiarlos de la siguiente url:[gitmoji](https://gitmoji.carloscuesta.me/) y unicamente copiar por ejemplo _**:sparkles:**_

* **realizar el commit**

        git commit

        git push -u origin master
        git status

> ¡¡¡Listo ya tenemos repositorio!!!


* **Actualizar la carpeta local con el repositorio**

        git pull origin develop

* **clonar repositorio accitrade-android**

        git clone -b develop https://github.com/anzen/accitrade-android.git

* **clonar repositorio accitrade-widgets**

    git clone -b https://github.com/anzen/accitrade-widgets.git

* **Para importar los widgets a proyect de androin y despues al telefono**

* **Acceder a a carpeta:**

        C:\Users\AGSNASOFT\Desktop\Backbase\Widget\AcciTrade\accitrade-widgets

> **Correr que asu vez tiene varias tareas: **

        npm run android-build

* **cambiarse de brach:**

        git checkout develop

* **actualizar branch**

    git pull

* **si existe cambios sin commit agregarlos a la pila.**

    * **ver listado de la pila**

            git stash list

    * **agregar a la pila el cambio antes de realizar un pull**

            git stash

    * **sacar de la pila el cambio**

            git stash pop

            git status


* **actualizar el branch con lo ultimo**

        git rebase develop

* **todo se puede hacer desde la misma linea:**

        git pull --rebase develop

* **crear un branch y acceder a el**

        git checkout -b <name-branch>

* **delete branch**

        git branch -d <name-branch>

* **forzar delete branch**

        git brach -D <name-branch>

* **Agregar template al proyecto para el commit:**

        https://gist.github.com/adeekshith/cd4c95a064977cdc6c50###file-git-commit-template-txt

        Para aplicar la plantilla,
        Guarde el archivo anterior en su máquina local y use

                git config --global commit.template <.git-commit-template.txt file path>

        Por ejemplo, si lo guardó en su carpeta de inicio, intente:

                git config --global commit.template ~/.git-commit-template.txt

### Dependencias extras que podrian agregar

* **Delte folder**

	 npm install -g rimraf

         rimraf <directorio>

* **add folder**

	npm install -g mkdirp

        rmkdirp <folder>

_**Nota:** Estas dependencias se agregaron porque si intentan borrar algunas carpetas no se borran porque tienen un nombre muy largo._


