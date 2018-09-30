export class SnakePart {
    private xPos: number;
    private yPos: number;

    constructor(x: number, y: number) {
        this.xPos = x;
        this.yPos = y;
    }

    get x(): number {
        return this.xPos;
    }

    get y(): number {
        return this.yPos;
    }

}
