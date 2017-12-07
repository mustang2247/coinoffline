import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CoinofflineRegionMySuffixModule } from './region/region-my-suffix.module';
import { CoinofflineCountryMySuffixModule } from './country/country-my-suffix.module';
import { CoinofflineLocationMySuffixModule } from './location/location-my-suffix.module';
import { CoinofflineDepartmentMySuffixModule } from './department/department-my-suffix.module';
import { CoinofflineTaskMySuffixModule } from './task/task-my-suffix.module';
import { CoinofflineEmployeeMySuffixModule } from './employee/employee-my-suffix.module';
import { CoinofflineJobMySuffixModule } from './job/job-my-suffix.module';
import { CoinofflineJobHistoryMySuffixModule } from './job-history/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        CoinofflineRegionMySuffixModule,
        CoinofflineCountryMySuffixModule,
        CoinofflineLocationMySuffixModule,
        CoinofflineDepartmentMySuffixModule,
        CoinofflineTaskMySuffixModule,
        CoinofflineEmployeeMySuffixModule,
        CoinofflineJobMySuffixModule,
        CoinofflineJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoinofflineEntityModule {}
