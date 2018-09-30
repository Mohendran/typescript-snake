import { Directions } from '../types/index';
import { Snake } from './Snake';

export class Controller {

    constructor(private snake: Snake) {
        this.initiateGame();
    }

    private getDirectionFromKey(key: number): Directions {
        switch (key)  {
            case 38:
                return Directions.Up;
            case 39:
                return Directions.Right;
            case 40:
                return Directions.Down;
            case 37:
                return Directions.Left;
            default:
                return null as any;
        }
    }

    private initiateGame() {
        document.onkeydown = ((keyEvent: KeyboardEvent) => {
            const charCode: number = (typeof keyEvent.which === 'number') ? keyEvent.which : keyEvent.keyCode;
            const direction: Directions = this.getDirectionFromKey(charCode);
            if (charCode && direction) {
                this.snake.setDirection(direction);
            }
        });
    }
}
