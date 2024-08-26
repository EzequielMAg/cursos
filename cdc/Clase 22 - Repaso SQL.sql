CREATE TABLE `cdc-com_23649`;
USE `cdc-com_23649`;

SELECT * FROM `cdc-com_23649`.usuarios;

# --------------------------------------------------------

# Primero creamos la DB en la que vamos a trabajar
# CREATE DATABASE/SCHEMA
CREATE DATABASE `cdc-academia`;
USE `cdc-academia`;

# Tambien podemos usar la siguiente query para verificar primero si existe la BD, si no existe RECIEN AHI la crea, y
-- si ya existe no hace nada.  
CREATE DATABASE IF NOT EXISTS academia;

# o borarla si existe
DROP DATABASE IF EXISTS academia;

# Creamos las tablas necesarias (Alumnos, Profesores y Materias)
CREATE TABLE alumnos (
# <nombreVariable> <tipoDeDato> <restricciones> 
	n_legajo INT PRIMARY KEY AUTO_INCREMENT, # "PRIMARY KEY" nos indica la PK de la tabla, atributo identificador de la tabla
											 # que no va a ser NULL y va a ser UNIQUE, es decir que no se va a poder repetir.
	nombre VARCHAR(50) NOT NULL,
	email VARCHAR(100) NOT NULL,
	direccion VARCHAR(110) NOT NULL
);

CREATE TABLE profesores (
	n_legajo_prof INT PRIMARY KEY AUTO_INCREMENT, 
	nombre VARCHAR(50) NOT NULL,
	fecha_ingreso DATE NOT NULL,
	direccion VARCHAR(110) NOT NULL
);

CREATE TABLE materias (
	cod_materia INT PRIMARY KEY AUTO_INCREMENT, 
	nombre VARCHAR(50) NOT NULL,
	horas TINYINT NOT NULL
);

# Insertamos datos en las tablas
INSERT INTO alumnos (nombre, email, direccion) 
VALUES ("Ezequiel Mamani", "eze@gmail.com", "calle falsa 123"),
	   ("Florencia", "flor@gmail.com", "calle 456"),
	   ("Adrian", "adri@gmail.com", "calle 789"),
	   ("Cristian", "cris@gmail.com", "calle 101112");

INSERT INTO profesores (nombre, fecha_ingreso, direccion) 
VALUES ("Agustin B.", "2023-03-16", "calle falsa 123"),
	   ("Matias P.", "2021-03-16", "calle 456"),
	   ("Priscila T.", "2021-03-16", "calle 789"),
	   ("Federico G.", "2015-03-16", "calle 101112");

INSERT INTO materias (nombre, horas) 
VALUES ("Laboratorio IV", 150),
	   ("Legislación", 55),  
	   ("Metodología de Sistemas", 200),
	   ("Diseño y Administracion de BD", 80);

ALTER TABLE materias MODIFY COLUMN horas TINYINT UNSIGNED NOT NULL;

CREATE TABLE materia_alumno (
	id INT PRIMARY KEY AUTO_INCREMENT,
	cod_materia INT NOT NULL,
	nro_legajo INT NOT NULL,
	nota TINYINT UNSIGNED NOT NULL,
	CONSTRAINT fk_codMateria FOREIGN KEY (cod_materia) REFERENCES materias(cod_materia),
	CONSTRAINT fk_nroLegajoAlumno FOREIGN KEY (nro_legajo) REFERENCES alumnos(n_legajo)
);

# INSERTAMOS DATOS EN LA TABLA INTERMEDIA QUE RELACIONA ALUMNOS CON MATERIAS
INSERT INTO materia_alumno (cod_materia, nro_legajo, nota)
values(1, 1, 10),
	  (2, 1, 9),
	  (3, 1, 9),
	  (4, 1, 9),
	  (1, 2, 10),
	  (2, 2, 9),
	  (3, 2, 9),
	  (4, 2, 9),
	  (1, 3, 10),
	  (2, 3, 10),
	  (3, 3, 10),
	  (4, 3, 10),
	  (1, 4, 10),
	  (2, 4, 7),
	  (3, 4, 10),
	  (4, 4, 10);


# CONSULTAS A LAS TABLAS	  
SELECT * FROM alumnos;	  
SELECT * FROM profesores;	  
SELECT * FROM materias;	  

SELECT * FROM materia_alumno;	  
	  

SELECT nota FROM materia_alumno
WHERE cod_materia = 2;

SELECT nro_legajo, nota FROM materia_alumno
WHERE cod_materia = 2;



# -------------------------------------------------------------------------------------
# -------------------------------  PRACTICA EXTRA PROPIA  -------------------------------

SELECT ma.nro_legajo, 
	   a.nombre,
	   m.cod_materia,
	   m.nombre,
	   ma.nota 
FROM materia_alumno ma
JOIN alumnos a ON a.n_legajo = ma.nro_legajo 
JOIN materias m ON m.cod_materia = ma.cod_materia 
WHERE ma.cod_materia = 1;
# Despues mirando la clase veo que el profe hizo esta misma query pero con algunas diferencias de los datos q muestra
# pero al fin y al cabo era igual porque tenia dos joins


# Esta query hizo el profe:
-- SELECT *
SELECT ma.nro_legajo, a.nombre AS nombre_alumno, m.nombre AS nombre_materia, ma.nota 
FROM materia_alumno ma
JOIN alumnos a 
ON a.n_legajo = ma.nro_legajo 
JOIN materias m 
ON m.cod_materia = ma.cod_materia 
WHERE ma.cod_materia = 2
#ORDER BY ma.nota;



