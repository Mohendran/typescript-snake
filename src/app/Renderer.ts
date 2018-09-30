import * as _ from 'lodash';
import { RENDERER_PROPERTIES, SIZE_PROPERTIES } from '../constants';
import { Board } from './Board';
import { Position } from './Position';
import { Snake } from './Snake';
import { Treat } from './Treat';

export class Renderer {

    private gameElement: HTMLElement;
    private cells: HTMLElement[][];

    constructor(private snake: Snake, private board: Board) {
        this.gameElement = document.getElementById(RENDERER_PROPERTIES.gameId) as HTMLElement;
        this.init();
    }

    public paint(): void {
        this.paintSnakeBody();
        this.paintSnakeHead();
        this.paintTreat();
    }

    private resetSpace(): void {
        this.gameElement.innerHTML = '';
        this.gameElement.style.height = RENDERER_PROPERTIES.cellW * SIZE_PROPERTIES.height + 'px';
        this.gameElement.style.width = RENDERER_PROPERTIES.cellH * SIZE_PROPERTIES.width + 'px';
    }

    private init() {
        this.resetSpace();
        this.cells = [];
        _.forEach(_.range(0, SIZE_PROPERTIES.height), (rowNo: number) => {
            this.cells[rowNo] = [];
            _.forEach(_.range(0, SIZE_PROPERTIES.width), (colNo: number) => {
                this.cells[rowNo][colNo] = document.createElement('div');
                this.gameElement.appendChild(this.cells[rowNo][colNo]);
            });
        });
    }

    private paintSnakeBody(): void {
        // TODO: Need to analyze the code.
        const snakeBody: Position[] = _.slice(this.snake.getSnakeParts(), 1);
        const snakeFastLookUp: any = {};
        snakeBody.forEach(((element: Position) => {
            snakeFastLookUp[element.x + '-' + element.y] = true;
        }));
        for (let i = 0; i < SIZE_PROPERTIES.height; i++) {
            for (let j = 0; j < SIZE_PROPERTIES.width; j++) {
                const newClass: string = snakeFastLookUp[i + '-' + j] ? 'cell snake' : 'cell empty';
                if (this.cells[i][j].className !== newClass) {
                    this.cells[i][j].className = newClass;
                }
            }
        }
    }

    private paintTreat(): void {
        const treat: Treat = this.board.getTreat();
        this.cells[treat.x][treat.y].className = 'cell treat-' + treat.size;
    }

    private paintSnakeHead(): void {
        const snakeHead: Position = _.first(this.snake.getSnakeParts()) as Position;
        this.cells[snakeHead.x][snakeHead.y].className = 'cell snake-head snake-head-' + this.snake.getDirection();
    }
}
