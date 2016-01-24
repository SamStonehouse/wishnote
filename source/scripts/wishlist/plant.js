import { Model } from 'backbone';

class Plant extends Model {
    defaults() {
        return {
            name: 'Not specified',
            height: 0
        }
    }
}

export default Plant;