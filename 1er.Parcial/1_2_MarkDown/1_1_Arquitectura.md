# Arquitectura de una Aplicación Web

La **arquitectura de una aplicación web** se refiere a la forma en que se estructuran, organizan y comunican los diferentes componentes que conforman la aplicación.  
Incluye tanto la manera en que los clientes y servidores interactúan, como la forma en que el código y los servicios están organizados para lograr escalabilidad, mantenibilidad y eficiencia.

---

## Tipos de Arquitectura

### 1. De acuerdo a cómo se comunican las partes que componen la app

#### Cliente-Servidor
- Modelo más utilizado en aplicaciones web.
- El **cliente** (navegador, app móvil) realiza solicitudes al **servidor**, que procesa la información y responde.
- Ventajas: centralización de datos, seguridad y control.  
- Ejemplo: una tienda en línea donde el navegador solicita productos al servidor.

#### Punto a Punto (P2P)
- Los dispositivos (nodos) actúan tanto como clientes y como servidores.
- Cada parte puede enviar y recibir información sin necesidad de un servidor central.
- Ventajas: mayor descentralización y tolerancia a fallos.  
- Ejemplo: aplicaciones de intercambio de archivos como BitTorrent.

---

### 2. De acuerdo a cómo se organiza el código de la app

#### Monolito
- Toda la aplicación está integrada en un solo bloque de código.
- Ventajas: simplicidad en el desarrollo inicial.  
- Desventajas: difícil de mantener y escalar cuando crece.

#### En Capas
- La aplicación se divide en capas con responsabilidades específicas, por ejemplo:  
  - **Presentación** (interfaz de usuario)  
  - **Lógica de negocio**  
  - **Acceso a datos**  
- Ventajas: separación de responsabilidades, mayor organización.  
- Desventajas: puede ser rígido si se necesita escalar de forma independiente.

#### Microservicios
- La aplicación se divide en servicios pequeños e independientes, cada uno cumple una función específica.
- Los servicios se comunican entre sí mediante APIs.  
- Ventajas: escalabilidad, despliegue independiente, mayor tolerancia a fallos.  
- Desventajas: complejidad en la gestión y comunicación.

#### Serverless
- La lógica de la aplicación se ejecuta en funciones hospedadas en la nube, sin necesidad de gestionar servidores.
- Solo se paga por el tiempo de ejecución.  
- Ventajas: reducción de costos, escalabilidad automática.  
- Desventajas: dependencia del proveedor, limitaciones en el tiempo de ejecución.

---
