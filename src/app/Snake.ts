import * as _ from 'lodash';
import { INITAL_DIRECTION, SIZE_PROPERTIES } from '../constants';
import Helpers from '../helpers/index';
import { Directions } from '../types/Directions';
import { Position } from './Position';
import { XYPosition } from '../types/XYPosition';

/**
 * This Class is used to manage the Snake Properties
 */
export class Snake {

    private direction: Directions;
    private snakeElements: Position[];
    private growthSize: number = 0;

    constructor() {
        this.snakeElements = [];
        const initialPosition: Position = new Position();
        this.snakeElements.push(initialPosition);
        this.direction = INITAL_DIRECTION;
    }

    public move(): void {
        const snakeHead: Position = _.last(this.snakeElements) as Position;

        if (this.growthSize) {
            this.growthSize--;
        } else {
            // Remove the tail of the snake
            this.snakeElements = _.drop(this.snakeElements);
        }

        let newHead = null;
        switch (this.direction) {
            case Directions.Up:
                newHead = new Position(snakeHead.x - 1, snakeHead.y);
                break;
            case Directions.Down:
                newHead = new Position(snakeHead.x + 1, snakeHead.y);
                break;
            case Directions.Left:
                newHead = new Position(snakeHead.x, snakeHead.y - 1);
                break;
            case Directions.Right:
                newHead = new Position(snakeHead.x, snakeHead.y + 1);
                break;
            default:
                throw new Error('Unknown direction ' + this.direction);
        }

        /**
         * The SnakeHead is getting teleported to a new location.
         */
        if (newHead.x < 0) {
            newHead.x += SIZE_PROPERTIES.width;
        } else if (newHead.x >= SIZE_PROPERTIES.width) {
            newHead.x = 0;
        } else if (newHead.y < 0) {
            newHead.y += SIZE_PROPERTIES.height;
        } else if (newHead.y >= SIZE_PROPERTIES.height) {
            newHead.y = 0;
        }

        this.snakeElements.push(newHead);
    }

    public growUp(): void {
        this.growthSize = 1;
    }

    /**
     * This function is used to check the validity of the last move made
     * @returns {boolean}
     */
    public isLastMoveValid(): boolean {
        const currentElementPos: XYPosition = (_.last(this.snakeElements) as Position).getPosition();
        const snakeBodyElem: Position[] = _.drop(this.snakeElements);
        const positions: XYPosition[] = _.map(snakeBodyElem, (snakeElem: Position) => snakeElem.getPosition());
        console.log(_.find(positions, currentElementPos));
        return !_.find(positions, currentElementPos);
    }

    /**
     * This function is used to set the direction
     * @param direction
     */
    public setDirection(direction: Directions): void {
        /**
         * Logic:
         * Here we are checking whether the direction to be changed is in the opposite direction of the movement of
         * the snake.
         * This is checked because, a Snake cannot move backwards and the snake cannot move its head backwards to its
         * body
         */
        if (!Helpers.isOppositeDirection(this.direction, direction)) {
            this.direction = direction;
        }
    }

    /**
     * This function retrieves the snakeParts
     */
    public getSnakeParts(): Position[] {
        return this.snakeElements;
    }

    /**
     * This function is used to retrieve the direction
     */
    public getDirection(): Directions {
        return this.direction;
    }
}
