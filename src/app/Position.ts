import Helpers from '../helpers/index';
import { XYPosition } from '../types/index';

export class Position {
    private xPos: number;
    private yPos: number;

    constructor(x?: number, y?: number) {
        if (x || y) {
            this.xPos = x as number;
            this.yPos = y as number;
        } else {
            const xyPosition = Helpers.getRandomPosition();
            this.xPos = xyPosition.x;
            this.yPos = xyPosition.y;
        }
    }

    get x(): number {
        return this.xPos;
    }

    set x(xPos: number) {
        this.xPos = xPos;
    }

    get y(): number {
        return this.yPos;
    }

    set y(yPos: number) {
        this.yPos = yPos;
    }

    public getPosition(): XYPosition {
        return {
            x: this.xPos,
            y: this.yPos
        };
    }
}
