# Frontend - Plataforma de aprendizaje en linea

## Contenido

### Configuración del proyecto

Para instalar este proyecto, clona el repositorio.

Luego en tu terminal:

`cd ruta/a/su/clon`

`npm install`


### Convenciones

#### Javascript

Se debe utilizar el idioma ingles para nombrar a las clases, variables y constantes, nombre de funciones, etc.
Los nombres de las clases (javascript)

Javascript
Se utilizara el estilo camelCase para los nombres de las variables y funciones.

Ejemplos:

``` javascript

/* Recommended */
firstName = 'Alejandro'
schoolName = 'Belgran'

title = 'PHP - Nivel principiante'

function isStudent() { ... }
```

Se utilizara el estilo UPPERCASE para los nombres de las variables globales

Es deseable el uso del estilo PascalCase para los nombres de las clases en Typescript.

Para más detalles, consulte esta [guía](https://google.github.io/styleguide/jsguide.html)

#### CSS

Separe las palabras de los nombres de ID y Clases con un guion (-)

No concatenar palabras y abreviaturas en los selectores con ningún carácter que no sean guiones, para mejorar la comprensión y la capacidad de escaneo.

``` css 
/* Not recommended: does not separate the words “demo” and “image” */
.demoimage {}

/* Not recommended: uses underscore instead of hyphen */
.error_status {}

```

``` css
/* Recommended */
#video-id {}
.ads-sample {}

```

Para más detalles, consulte esta [guía](https://google.github.io/styleguide/htmlcssguide.html)
