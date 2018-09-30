import { Game } from './app/Game';
document.addEventListener('DOMContentLoaded', (event) => {
    const game: Game = new Game();
    game.start();
});

export = Game;
