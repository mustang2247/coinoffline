import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CoinofflineCategoryModule } from './category/category.module';
import { CoinofflineProductModule } from './product/product.module';
import { CoinofflineCustomerModule } from './customer/customer.module';
import { CoinofflineAddressModule } from './address/address.module';
import { CoinofflineWishlistModule } from './wishlist/wishlist.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        CoinofflineCategoryModule,
        CoinofflineProductModule,
        CoinofflineCustomerModule,
        CoinofflineAddressModule,
        CoinofflineWishlistModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoinofflineEntityModule {}
