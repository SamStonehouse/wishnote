import { Collection } from 'backbone';

import Plant from './plant.js';

class Greenhouse extends Collection {
    constructor(options) {
        super(options);
        this.model = Plant;
    }
}

export default Greenhouse;