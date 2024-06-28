# Prueba Karate Roddy Zamora
Pasos para la ejecuccion del escenario de prueba (El detalle lo encuentras en el pdf adjunto Roddy-Zamora-PruebaKarate)


1. Prerequisitos

   
   Descargar, instalar K6



2. Ejecuccion del escenario de prueba en local y generamos el summary

   
   Por medio de la consola ejecutamos el comando:

   k6 run --summary-export=summary.json test.js

   

4. Ejecuccion del escenario de prueba en nube

   
   Iniciamos sesion en el servicio cloud de K6 https://grafana.com/products/cloud/k6/

   Y ejecutamos el siguiente comando, el cual nos devolvera un enlace con el reporte

   k6 cloud test.js


