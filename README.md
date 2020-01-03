# Instrucciones
## Angular stack MEAN
* Navegador usar Firefox plugin Redux Dev Tools
* En carpeta schema ejecutar npm run dev---->'nodemon [src/app.js]'(script)
***
* MongoDB
  
  * Instalar LUEGO EJECUTAR mongod.exe
  * En Windows mongod.exe --journal --storageEngine=mmapv1
  *  [mongodb://localhost:27017/pruebaDB]
*Servivor
  * En Carpeta schema ejecutar npm run dev
  * Ruta Protegida [http://localhost:3000/api/customer/add]
  * mongoose su uso con metodo Statics y manejo de la BD
  * Acceso a ruta propegida CREAR EN BASE DE DATOSAL PRIMER USUARIO CON E-MAIL Y PASSWORD
  * Todo Customer creado por el Administrator es un nuevo Administrador 
  * Ruta [http://localhost:3000/api/priv] disponoble con middleware para nuevas rutas 
*  Angular
  * npm start
***
## Angular ruta protegida con Guards customer/add
* Interceptores configuran la cabecera de la peticion guardan en localhost el Token
* Manejan los errores 
## ngrx 8  Estado centralizado de la aplicacion Angular 
**store**: Es el módulo principal con el administrador del estado *centralizado y reactivo.
**store-devtools**: Instrumentación para depurar desde el 
*store, tratando cada evento como una acción Redux.
**effects**: Los reductores son funciones puras sin efectos 
**schematics, entity, ngrx-data**: Son otros módulos opcionales *con ayudas y plantillas de NgRX.
