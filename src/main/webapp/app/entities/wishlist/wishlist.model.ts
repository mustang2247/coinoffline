import { BaseEntity } from './../../shared';

export class Wishlist implements BaseEntity {
    constructor(
        public id?: number,
        public title?: string,
        public restricted?: boolean,
        public products?: BaseEntity[],
        public customer?: BaseEntity,
    ) {
        this.restricted = false;
    }
}
