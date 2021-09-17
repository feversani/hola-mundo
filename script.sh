#!/bin/bash

echo Creando imagen del proyecto
docker-compose build

echo Levantando el contenedor
docker-compose up -d

