import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoinofflineSharedModule } from '../../shared';
import {
    WishlistService,
    WishlistPopupService,
    WishlistComponent,
    WishlistDetailComponent,
    WishlistDialogComponent,
    WishlistPopupComponent,
    WishlistDeletePopupComponent,
    WishlistDeleteDialogComponent,
    wishlistRoute,
    wishlistPopupRoute,
} from './';

const ENTITY_STATES = [
    ...wishlistRoute,
    ...wishlistPopupRoute,
];

@NgModule({
    imports: [
        CoinofflineSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        WishlistComponent,
        WishlistDetailComponent,
        WishlistDialogComponent,
        WishlistDeleteDialogComponent,
        WishlistPopupComponent,
        WishlistDeletePopupComponent,
    ],
    entryComponents: [
        WishlistComponent,
        WishlistDialogComponent,
        WishlistPopupComponent,
        WishlistDeleteDialogComponent,
        WishlistDeletePopupComponent,
    ],
    providers: [
        WishlistService,
        WishlistPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoinofflineWishlistModule {}
