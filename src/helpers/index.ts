import * as _ from 'lodash';
import { SIZE_PROPERTIES } from '../constants';
import { Directions, SizeProperties } from '../types/index';
import { XYPosition } from '../types/XYPosition';

export default class Helpers {

    /**
     * When we pass 2 directions, It returns whether the one direction is the opposite of another.
     * @param direction1
     * @param direction2
     * @returns {boolean}
     */
    public static isOppositeDirection(direction1: Directions, direction2: Directions): boolean {
        return direction1 === Directions.Up && direction2 === Directions.Down
            || direction1 === Directions.Down && direction2 === Directions.Up
            || direction1 === Directions.Left && direction2 === Directions.Right
            || direction1 === Directions.Right && direction2 === Directions.Left;
    }

    /**
     * This function gives a random Position
     * @returns {{x: number, y: number}}
     */
    public static getRandomPosition(): XYPosition {
        const arenaSize: SizeProperties = SIZE_PROPERTIES;
        return {
            x: _.random(2, arenaSize.width - 2),
            y: _.random(2, arenaSize.height - 2)
        };
    }
}
