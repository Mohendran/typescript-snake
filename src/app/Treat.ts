import * as _ from 'lodash';
import { Position } from './Position';
import { PositionProperties } from './PositionProperties';

/**
 * This class is used to manage Treat, its position and size/points
 */
export class Treat extends PositionProperties {
    public position: Position;
    public size: number;

    constructor() {
        super();
        this.position = new Position();
        console.log(this.getPosition());
        this.size = _.random(1, 5);
    }
}
