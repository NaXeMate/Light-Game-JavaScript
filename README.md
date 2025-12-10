# Light Game

## Overview
Light Game is a browser-based puzzle where the goal is to turn on all the lights in a grid of tiles. Each click toggles the selected tile and its neighbours, creating a simple but surprisingly challenging logic game inspired by classic “lights out” mechanics. 

The project is built with vanilla HTML, CSS and JavaScript, without external frameworks. It focuses on clean DOM manipulation, dynamic grid generation and responsive layout.

## Gameplay

- The game board is a grid of tiles that can be either **on** (yellow) or **off** (dark).   
- At the start of each game, a configurable number of tiles are randomly turned on while the rest remain off.   
- When you click a tile, that tile and its direct neighbours (up, down, left and right, if they exist) toggle their state.   
- The objective is to reach a state where **all tiles are on**. 

When all tiles are lit:

- The game detects the win condition.
- A victory message is displayed.
- The board is locked so no more moves can be made.
- The time counter stops. 

## Features

- **Dynamic board generation**  
  - Grid created completely from JavaScript based on the selected configuration (rows, columns, lights on).   

- **Difficulty levels**  
  - Easy, Medium and Hard presets with predefined rows, columns and initial lights on.  
  - Custom mode where you choose rows, columns and number of lights, with validation to ensure values are positive and coherent with the board size.   

- **Game statistics**  
  - Live counter of the number of attempts (clicks on tiles).  
  - Time elapsed since the start of the current game.   

- **Win handling and blocking**  
  - Automatic detection when all lights are on.  
  - Blocking of further interactions with the board.  
  - Display of a congratulation message in the side panel.   

- **Responsive layout**  
  - Title at the top, central board and side column with stats and settings.  
  - Layout adapts to different viewport sizes so the game remains playable on laptops and larger screens. 

## Technologies

- **HTML5**: semantic structure for title, board, stats and settings.  
- **CSS3**: flexbox layout, responsive design and custom styling for the light tiles.  
- **JavaScript (ES6+)**:  
  - DOM manipulation to build and update the grid.  
  - Game logic for toggling tiles and neighbours.  
  - Difficulty management, validation and timers. 

## How to Run

1. Clone or download the repository.
2. Open `index.html` in a modern browser (Chrome, Firefox, Edge, Safari).
3. Select a difficulty, generate the grid and start playing.

No build step or backend is required; everything runs client-side.

---

## Descripción general
Juego de Luces es un puzle para navegador cuyo objetivo es encender todas las luces de una cuadrícula de casillas. Cada clic alterna el estado de la casilla seleccionada y de sus vecinas, dando lugar a un juego de lógica sencillo pero sorprendentemente retador, inspirado en los clásicos de tipo “lights out”. 

El proyecto está desarrollado con HTML, CSS y JavaScript puros, sin frameworks externos, y se centra en una manipulación clara del DOM, generación dinámica del tablero y un diseño adaptable.

## Mecánica de juego

- El tablero es una cuadrícula de casillas que pueden estar **encendidas** (amarillas) o **apagadas** (oscuras).   
- Al inicio de cada partida, un número configurable de casillas se enciende de forma aleatoria y el resto permanece apagada.   
- Al hacer clic en una casilla, esa casilla y sus vecinas directas (arriba, abajo, izquierda y derecha, si existen) cambian de estado.   
- El objetivo es alcanzar un estado en el que **todas las casillas estén encendidas**. 

Cuando todas las luces están encendidas:

- El juego detecta la condición de victoria.
- Se muestra un mensaje de enhorabuena.
- El tablero se bloquea para impedir más movimientos.
- El contador de tiempo se detiene. 

## Funcionalidades

- **Generación dinámica del tablero**  
  - El tablero se crea completamente desde JavaScript según la configuración seleccionada (filas, columnas, luces encendidas).   

- **Niveles de dificultad**  
  - Modos Fácil, Medio y Difícil con filas, columnas y luces iniciales predefinidas.  
  - Modo Personalizado en el que se pueden elegir filas, columnas y número de luces, con validaciones para asegurar valores positivos y coherentes con el tamaño del tablero.   

- **Estadísticas de partida**  
  - Contador en tiempo real del número de intentos (clics sobre casillas).  
  - Tiempo transcurrido desde el inicio de la partida actual.   

- **Gestión de victoria y bloqueo**  
  - Detección automática cuando todas las luces están encendidas.  
  - Bloqueo de nuevas interacciones sobre el tablero.  
  - Mensaje de felicitación en el panel lateral.   

- **Diseño adaptable**  
  - Título en la parte superior, tablero central y columna lateral con estadísticas y ajustes.  
  - Distribución que se adapta a distintos tamaños de pantalla para mantener el juego jugable en portátiles y pantallas grandes. 

## Tecnologías

- **HTML5**: estructura semántica para título, tablero, estadísticas y ajustes.  
- **CSS3**: maquetación con flexbox, diseño responsive y estilos personalizados para las casillas de luz.  
- **JavaScript (ES6+)**:  
  - Manipulación del DOM para construir y actualizar la cuadrícula.  
  - Lógica de juego para alternar casillas y vecinas.  
  - Gestión de dificultades, validaciones y temporizadores. 

## Cómo ejecutar

1. Clona o descarga el repositorio.
2. Abre `index.html` en un navegador moderno (Chrome, Firefox, Edge, Safari).
3. Elige un nivel de dificultad, genera el tablero y empieza a jugar.

No se necesita ningún paso de compilación ni backend; todo se ejecuta en el lado del cliente.
