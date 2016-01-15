# Cómo testear una aplicación Angular2

## Instalar algunas dependencias

Crear un fichero `package.json` como el siguente y ejecutar `npm install` (puede que aparezcan algunos errores):

```
{
  "name": "MyFirstAngular2Test",
  "version": "1.0.0",
  "scripts": {
    "tsc": "tsc",
    "tsc:w": "tsc -w",
    "lite": "lite-server",
    "start": "concurrent \"npm run tsc:w\" \"npm run lite\" "
  },
  "dependencies": {
    "angular2": "2.0.0-beta.0",
    "systemjs": "0.19.6",
    "es6-promise": "^3.0.2",
    "es6-shim": "^0.33.3",
    "reflect-metadata": "0.1.2",
    "rxjs": "5.0.0-beta.0",
    "zone.js": "0.5.10"
  },
  "devDependencies": {
    "concurrently": "^1.0.0",
    "lite-server": "^1.3.1",
    "typescript": "^1.7.3"
  }
}
```

Esto instalará unos cuantos módulos Node.js.

## Configurar TypeScript

Crear el fichero `tsconfig.json` en la raiz del proyecto con este contenido:

```
{
  "compilerOptions": {
    "target": "ES5",
    "module": "system",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  },
  "exclude": [
    "node_modules"
  ]
}
```


## Configurar TypeScript

Crear el fichero `tsconfig.json` en la raiz del proyecto con este contenido:

```
{
  "compilerOptions": {
    "target": "ES5",
    "module": "system",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  },
  "exclude": [
    "node_modules"
  ]
}
```

## Instalar Jasmine (core)

`npm install jasmine-core --save-dev --save-exact`

Crear un fichero HTML en `src/unit-tests.html`:

```
<html>
<head>
  <title>1st Jasmine Tests</title>
  <link rel="stylesheet" href="../node_modules/jasmine-core/lib/jasmine-core/jasmine.css">
  <script src="../node_modules/jasmine-core/lib/jasmine-core/jasmine.js"></script>
  <script src="../node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js"></script>
  <script src="../node_modules/jasmine-core/lib/jasmine-core/boot.js"></script>
</head>
<body>
</body>
</html>
```

Crear un primer fichero de tests `src/first.spec.ts` (TypeScript):

```
it('true is true', () => expect(true).toEqual(true));
```

Y añadir la línea a `unit-tests.html` (incluimos un JavaScript, no un TypeScript):

```
<script src="first.spec.js"></script>
```

## Preparar TypeScript

Crear un nuevo fichero de configuración de TypeScript en `src/tsconfig.json`:

```
{
  "compilerOptions": {
    "target": "ES5",
    "module": "commonjs",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true
  }
}
```

Compilar con el comando `npm run tsc`. Refrescar el navegador, y veremos que se han ejecutado los tests escritos en el fichero `.ts`.

Lanza un *live server* con `npm start` desde otra consola. Se abrirá un navegador. Debes ir a la URL `http://localhost:3000/src/unit-tests.html`.

Modifica `first.spec.ts` con un nuevo bloque `describe`:

```
describe('1st tests', () => {
  it('true is true', () => expect(true).toEqual(true));
});
```

##########################################################################

              ¿¿¿¿QUÉ VIENE AHORA????

##########################################################################

      Creo que va a ser necesario que siga primero los tutoriales
  [Quick start](https://angular.io/docs/ts/latest/quickstart.html)
  y [Tour of Heroes](https://angular.io/docs/ts/latest/tutorial/)
  para poder seguir con el
  [Paso #3 de los tests](https://angular.io/docs/ts/latest/testing/first-app-tests.html)

##########################################################################


