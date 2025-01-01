import MapGenerator from './src/map_generator';
import { Vector2 } from './src/map_generator/utils/types';
import { drawMap } from './utils/helpers';

const HEIGHT = 11;
const WIDTH = 31;

const map = new MapGenerator({ height: HEIGHT, width: WIDTH }).gameMap;
const startPoint: Vector2 = { x: 1, y: 1 };
const finishPoint: Vector2 = { x: WIDTH - 2, y: HEIGHT - 2 };

drawMap(map, startPoint, finishPoint);