# Lab 05 — Dodger

A simple browser game created with JavaScript and Phaser for CSCI 4208.

The player moves across the screen while avoiding enemies that spawn and travel through the game area.

## Screenshot

A gameplay screenshot will be added here.

<!-- After adding a screenshot.png file, replace the line above with:
![Dodger gameplay screenshot](screenshot.png)
-->

## Features

* Player movement
* Enemy spawning
* Arcade Physics
* World-boundary collision
* Player and enemy collision detection
* Phaser scene management
* Image and sprite loading

## Controls

| Key         | Action     |
| ----------- | ---------- |
| A           | Move left  |
| D           | Move right |
| W           | Move up    |
| S           | Move down |

## Technologies Used

* HTML5
* JavaScript
* Phaser 3
* Git
* GitHub

## Project Structure

```text
lab05-dodger/
├── assets/
│   ├── background.png
│   └── enemy.png
├── src/
│   ├── Enemy.js
│   ├── Player.js
│   ├── PlayScene.js
│   ├── game.js
│   └── phaser.js
├── index.html
└── README.md
```

## Running the Project

This project must be served through a local web server rather than opened directly as a file.

From the project folder, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## What I Learned

Through this lab, I practiced:

* Creating and configuring a Phaser game
* Loading image assets in a Phaser scene
* Creating custom player and enemy classes
* Adding objects to Arcade Physics
* Using timed events to spawn enemies
* Debugging JavaScript errors in the browser console
* Saving project checkpoints with Git
* Pushing a local repository to GitHub using SSH

## Planned Enhancements

* Add a scoring system
* Add a game-over screen
* Increase difficulty over time
* Add sound effects
* Add additional enemy behavior

## Course

Created for **CSCI 4208**.
