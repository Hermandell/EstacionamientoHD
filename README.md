# README

## Requisitos
Para poder correr este proyecto, es necesario tener los siguientes programas instalados en su sistema:
- [Node.js LTS](https://nodejs.org/en/download/) - La última versión estable de Node.js
- [Yarn](https://yarnpkg.com/getting-started/install) - Gestor de paquetes para Node.js
- [Expo](https://docs.expo.io/versions/latest/get-started/installation/) - Framework para desarrollar aplicaciones React Native
- [Android Studio](https://developer.android.com/studio) - Para desarrollar y probar la aplicación en dispositivos Android
- Xcode (solo para usuarios de Mac) - Para desarrollar y probar la aplicación en dispositivos iOS

## Pasos para correr el proyecto
1. Descargue e instale Node.js LTS desde el siguiente enlace: https://nodejs.org/en/download/
2. Clone el proyecto desde GitHub utilizando el siguiente comando en su terminal: 
`git clone` https://github.com/[username]/[repository].git

3. Una vez clonado el proyecto, abrirlo en su editor de texto favorito.
4. Descargue e instale Yarn desde el siguiente enlace: https://yarnpkg.com/getting-started/install
5. En la raíz del proyecto, ejecute el siguiente comando en su terminal, cmd, PowerShell o bash: 
yarn install
6. Ejecute el comando `yarn start` en la raíz del proyecto, seleccione `a` para abrir la aplicación en un dispositivo Android y conecte su dispositivo mediante USB o use el emulador de Android Studio. Si quieres ejecutar en iOS, simplemente selecciona `i` y tendrás que abrir el proyecto en Xcode y seleccionar el dispositivo simulado.
7. Para abrirla en Android Studio sigue estos pasos adicionales :
  * Asegúrate de tener Android Studio instalado en tu equipo y configurado correctamente.
  * En la línea de comandos, navega hasta la raíz del proyecto y ejecuta el comando `yarn start`. Esto iniciará un servidor de desarrollo local y te mostrará un QR code en la consola.
  * En tu dispositivo Android, descarga la aplicación "Expo" desde la tienda de aplicaciones (Google Play Store).
  * Abre Android Studio, y selecciona "Abrir un proyecto existente", navega hasta tu proyecto y elige la carpeta con tu proyecto.
  * Una vez abierto el proyecto, elige el dispositivo de emulación que desees utilizar, puedes configurar uno si no tienes ninguno disponible.
  * Una vez configurado el dispositivo de emulación, ejecuta el comando `yarn android` en tu línea de comandos, esto hará que tu aplicación se ejecute en el emulador.
  * Si tienes algún problema con el emulador, asegúrate de tener instaladas las versiones de las herramientas de desarrollo de Android correspondientes y de tener configurado el entorno de desarrollo de Android correctamente.

Ahora, debería tener el proyecto corriendo en su dispositivo o emulador.

