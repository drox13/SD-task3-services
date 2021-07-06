# SD-task3-services
app con tres servicios. Crud de una lista nombres. Cada servicio me quede en un archivo aparte.  POST, GET, DELETE

ejemplo para metodo POST
URL:  localhost:5000/
ejmplo: {"name": "Samuel"}
respuesta: devuelve toda la lista con el nuevo nombre agregado en ella

Ejemplo del metodo get funcional
http://localhost:5000/get/Maria

Ejemplo del metodo get no funcional
http://localhost:5000/get/Mariaa

Metodo Delete
Se escribe el nombre de la persona que se quiere borrar de la lista. Este ultimo precedido de 'users/'
Si ese nombre está, le llegará una respueta al cliente que dicho nombre fue borrado y se borrará de la lista.
Si este no se encuentra, llegara un mensaje de error notificando la ausencia de este

ejemplo :
http://localhost:5000/users/Mireya


