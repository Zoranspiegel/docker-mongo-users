# CREAR CONTENEDORES EN DOCKER

En este ejercicio he creado dos contenedores de docker entrelazados por una red. Uno con base en una imagen a su vez con base en Node usando la librería Express y base de datos MongoDB, y otro con base en una imagen de MongoDB.

Para ello he seguido los siguientes pasos:

### 1. Crear una red

Creé, desde la terminal, una red para entrelazar ambos contenedores:

```bash
# bash
docker network create schreck-net
```

### 2. Descargar una imagen de MongoDB

Descargué una imagen de MongoDB con la etiqueta 'latest':

```bash
# bash
docker pull mongo:latest
```

### 3. Crear container con base en la imagen de MongoDB

Creé, desde la terminal, un container con base en la imagen descargada, le asigné un nombre, mapeé los puertos al 27017, le conecté a la red creada y le pasé las variables de entorno de usuario y contraseña:

```bash
# bash
docker create --name schreck-mongo -p27017:27017 --network schreck-net -e MONGO_INITDB_ROOT_USERNAME=<username> -e MONGO_INITDB_ROOT_PASSWORD=<password> mongo:latest
```

### 4. Desarrollar un servidor de Node y MongoDB

Desarrollé un servidor básico usando la librería express y para conectar la base de datos de MongoDB y, empleando la ORM mongoose, pasé en el método 'connect' una uri con username, password, dominio y puerto según los parámetros del container previamente creado:

```js
// javascript
mongoose.connect(
  "mongodb://<username>:<password>@schreck-mongo:27017/schreck-users?authSource=admin"
);
```

### 5. Agregar archivo Dockerfile y crear imagen

Creé dentro del directorio del proyecto un archivo Dockerfil con las directrices para crear una imagen y dejar como expuesto el puerto 3000:

```docker
FROM node:22

RUN mkdir -p /home/app

COPY . /home/app

EXPOSE 3000

CMD ["node", "/home/app/index.js"]
```

Y finalmente, desde la terminal, creé la imagen con nombre y tag desde el directorio de la aplicación:

```bash
# bash
docker build -t schreck-express:node22 .
```


### 6. Crear container con base en la imagen

Creé, desde la terminal, un container con base en la imagen del servidor desarrollado asignándole un nombre, mapeando los puertos en 3000, conectándolo a la misma red del contenedor de mongo y pasándole el nombre del archivo .env:

```bash
# bash
docker create --name schreck-server -p3000:3000 --network schreck-net --env-file .env schreck-express:node22
```

## 7. Levantar ambos containers

Levanté, desde la terminal, ambos containers y verifiqué que puedo usar el servidor desde localhost:3000 e interactua correctamente con la base de datos de MongoDB:

```bash
# bash
docker start schreck-mongo
```

```bash
# bash
docker start schreck-server
```

URL:
```url
http://localhost:3000/api/users
```
