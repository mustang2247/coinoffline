import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Wishlist } from './wishlist.model';
import { WishlistPopupService } from './wishlist-popup.service';
import { WishlistService } from './wishlist.service';
import { Customer, CustomerService } from '../customer';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-wishlist-dialog',
    templateUrl: './wishlist-dialog.component.html'
})
export class WishlistDialogComponent implements OnInit {

    wishlist: Wishlist;
    isSaving: boolean;

    customers: Customer[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private wishlistService: WishlistService,
        private customerService: CustomerService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.customerService.query()
            .subscribe((res: ResponseWrapper) => { this.customers = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.wishlist.id !== undefined) {
            this.subscribeToSaveResponse(
                this.wishlistService.update(this.wishlist));
        } else {
            this.subscribeToSaveResponse(
                this.wishlistService.create(this.wishlist));
        }
    }

    private subscribeToSaveResponse(result: Observable<Wishlist>) {
        result.subscribe((res: Wishlist) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Wishlist) {
        this.eventManager.broadcast({ name: 'wishlistListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackCustomerById(index: number, item: Customer) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-wishlist-popup',
    template: ''
})
export class WishlistPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private wishlistPopupService: WishlistPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.wishlistPopupService
                    .open(WishlistDialogComponent as Component, params['id']);
            } else {
                this.wishlistPopupService
                    .open(WishlistDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
