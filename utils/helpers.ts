import { Vector2 } from '../src/map_generator/utils/types';
import { MapMatrixType } from './types';

export const drawMap = (map: MapMatrixType, startPoint: Vector2, endPoint: Vector2) => {
  map.forEach((row, y) => console.log(row.map((el, x) => {
    if (y === startPoint.y && x === startPoint.x) {
      return 'x';
    }
    if (y === endPoint.y && x === endPoint.x) {
      return 'O';
    }
    if (el === 1) {
      return '|';
    }
    return ' ';
  }).join('')));
};