import { BaseEntity } from './../../shared';

export class Customer implements BaseEntity {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public telephone?: string,
        public addresses?: BaseEntity[],
        public whislists?: BaseEntity[],
    ) {
    }
}
