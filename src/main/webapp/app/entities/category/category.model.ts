import { BaseEntity } from './../../shared';

export const enum CategoryStatus {
    'AVAILABLE',
    'RESTRICTED',
    'DISABLED'
}

export class Category implements BaseEntity {
    constructor(
        public id?: number,
        public description?: string,
        public sortOrder?: number,
        public dateAdded?: any,
        public dateModified?: any,
        public status?: CategoryStatus,
        public parent?: BaseEntity,
        public products?: BaseEntity[],
    ) {
    }
}
