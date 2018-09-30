import { LEVEL_DATA } from '../levels/Level1';
import { Board } from './Board';
import { Controller } from './Controller';
import { Position } from './Position';
import { Renderer } from './Renderer';
import { Snake } from './Snake';

export class Game {

    private board: Board;
    private snake: Snake;
    private renderer: Renderer;
    private controller: Controller;

    constructor() {
        this.init();
    }

    public start() {
        // start the game loop
        this.renderer.paint();
        this.gameLoop();
    }

    private init(): void {
        this.board = new Board();
        this.snake = new Snake();
        this.renderer = new Renderer(this.snake, this.board);
        this.controller = new Controller(this.snake);
        this.board.placeTreat();
    }

    private gameLoop() {
        // that.board.placeTreat();
        this.dealWithTreat();
        this.snake.move();
        this.renderer.paint();
        if (this.snake.isLastMoveValid()) {
            window.setTimeout(() => {
                this.gameLoop();
            }, LEVEL_DATA.speed);
        } else {
            alert('You lost mate');
            this.init();
            this.start();
        }
    }

    private dealWithTreat() {
        const treat = this.board.getTreat();
        this.snake.getSnakeParts().forEach((element: Position) => {
            if (element.x === treat.x && element.y === treat.y) {
                this.snake.growUp();
                this.board.placeTreat();
                this.dealWithTreat();
            }
        });
    }
}
