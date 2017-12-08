/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { CoinofflineTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { WishlistDetailComponent } from '../../../../../../main/webapp/app/entities/wishlist/wishlist-detail.component';
import { WishlistService } from '../../../../../../main/webapp/app/entities/wishlist/wishlist.service';
import { Wishlist } from '../../../../../../main/webapp/app/entities/wishlist/wishlist.model';

describe('Component Tests', () => {

    describe('Wishlist Management Detail Component', () => {
        let comp: WishlistDetailComponent;
        let fixture: ComponentFixture<WishlistDetailComponent>;
        let service: WishlistService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [CoinofflineTestModule],
                declarations: [WishlistDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    WishlistService,
                    JhiEventManager
                ]
            }).overrideTemplate(WishlistDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(WishlistDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(WishlistService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Wishlist(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.wishlist).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
