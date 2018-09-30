import { Treat } from './Treat';

/**
 * This Class is used to manage the whole Game Arena, Currently it is used to manage the Treat Position
 */
export class Board {

    /**
     * This variable is used to manage the Treat
     */
    private treat: Treat;

    constructor() {
        this.placeTreat();
    }

    /**
     * This function is used to place the treat at a particular place
     */
    public placeTreat() {
        /**
         * Logic:
         * When a new treat is created,
         * It is created at a random position making it seem that the treat is placed at a position
         */
        this.treat = new Treat();
    }

    /**
     * This function is used to get the Treat
     * @returns {Treat}
     */
    public getTreat(): Treat {
        return this.treat;
    }
}
