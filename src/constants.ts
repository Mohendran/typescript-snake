/**
 * This file is used to maintain the common constants irrespective of environment and levels
 */

import { Directions, RendererProperties, SizeProperties } from './types/index';

export const RENDERER_PROPERTIES: RendererProperties = {
    cellW: 20,
    cellH: 20,
    gameId: 'snake'
};

export const SIZE_PROPERTIES: SizeProperties = {
    width: 26,
    height: 26
};

export const INITAL_DIRECTION: Directions = Directions.Down;
