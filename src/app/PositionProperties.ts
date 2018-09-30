import { XYPosition } from '../types/XYPosition';
import { Position } from './Position';

export abstract class PositionProperties {

    public abstract position: Position;

    public getPosition(): XYPosition {
        return this.position.getPosition();
    }

    get x(): number {
        return this.position.x;
    }

    get y(): number {
        return this.position.y;
    }
}
