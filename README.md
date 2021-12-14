# N0torius

Mhw - wiki es una wiki local del juego Monster Hunter World. Esta guía nos permite ver las estadisticas de los monstruos ( resistencias a los elementos ) y un listado de los items de los monstruos introducidos asi como su probabilidad de obtenerlos

![img.png](capturas/inicio)
![img.png](capturas/monstruos-inicio)

Los items salen listados y pueden ser filtrado por el nombre del monstruo

![img.png](capturas/items-inicio)
![img.png](capturas/items-filtrado)


Una vez seleccionado a el monstruo que queremos ver nos saldrá por pantalla : 
1. Una imagen del monstruo
2. Una descripción detallada del mismo

	![img.png](capturas/monstruos-descripcion)
	
3. Gráfia con las estadísticas del monstruo ( resistencias a los elementos )
4. Gráfica con los ratios de drops de los items del monstruo

![img.png](capturas/monstruos-grafica)

Funcionamiento de la aplicación:

```mermaid
graph LR
A[N0torius] --> B(Cursos)
A --> C((Crear curso))
B --> D(Asignatura)
B --> E(Examenes del curso)
D --> F(Examen)
D --> G(Crear asignaturas y examenes)
D --> H(Listar asignaturas)
F --> I(Listar, editar y borrar)
```
