# Clase 1
1. Abrir la consola e imprimir la ubicación actual.
pwd
2. Crear una carpeta llamada `ejercicios` desde la consola.
mkdir ejercicios
3. Cambiar la ubicación a la nueva carpeta que crearon.
cd ejercicios
4. Abrir la carpeta con VSCode.
code .
5. En VSCode crear una carpeta `ejercicio1`.
mkdir ejercicio1
6. Crear un archivo llamado `README.md` (vacío) dentro de la carpeta `ejercicio1`.
touch README.md
7. Configurar nombre e email globalmente en git.
git config --global user.name Sofia Rios
git config --global user.email sofiatroche@gmail.com
8. Inicializar el repositorio de git desde la línea de comandos desde la carpeta `ejercicios`.
git init
9. Crear un primer commit con el mensaje “Versión Inicial”.
git add .
git commit -m "Versión inicial"
10. Agregar al `README.md` los comandos que ejecutaron en cada paso.
11. Crear un nuevo commit con el mensaje “Agrega solución primer ejercicio”
12. Publicar a Github en un repositorio llamado `nivelacion-mir`.
git remote add origin https://github.com/sofiatroche/nivelacion-mir.git
git branch -M main
git push -u origin main
13. Enviar el link al repositorio en Github a su mentor(a).