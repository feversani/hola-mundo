#!/bin/bash
#echo Instalado las dependencia del proyecto
#npm i

#echo Contruyendo el build del proyecto
#npm run build

echo Creando imagen del proyecto
docker-compose build

echo Levantando el contenedor
docker-compose up -d

