Paso a paso para subirlo a GITHUB

IMPORTANTE ESTO SIEMPRE 
No lo mandamos directamente a Master, si no al Main para revisar los cambios que se hicieron 
 $ git branch -M main

Versiond de git
git --version


Para configuar el nombre de usuario 
git config --global user.name "Santiago"
git config --global user.email "sog@gmail.com"

para crear un repositorio dentro de una carpeta con contenido
git init 

para añadir tus proyectos para subirlo o las lineas de codigo que modificaste y vas a subir 
1. $ git status = para ver los cambios que generaste en el proyecto

2. $ git add "" o el git . = las dobles comillas sirven para indicarle el nombre  del archivo y con el punto sirve para subirlo todo los cambios 

3. $ git commit -m "mi primer commit" = git commit sirve para confirmar una instantánea del directorio del entorno de ensayo en el historial de confirmaciones de los repositorios.

4. $ git log = Es igual a ver el historial 

5. $ git branch = para mirar la rama en la que estamos 

6. $ git switch master = para acceder a la rama que queramos o cambiar de rama 

7. $ git checkout = Sirve para navegar por las ramas existentes

8. $ git switch -c "Nombre de la rama" = para crear otra rama 

9. $ git remote add origin (se pega el link de nuestro repositorio en gitlab) =  indicar la ubicacion para subir nuestro proyecto o cambios de este en el repositorio de git lab

10. $ git push origin (seleciona la rama donde lo queiras subir) = comando para ya subir nuestro proyecto 