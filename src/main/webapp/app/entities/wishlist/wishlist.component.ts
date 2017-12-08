import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { Wishlist } from './wishlist.model';
import { WishlistService } from './wishlist.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-wishlist',
    templateUrl: './wishlist.component.html'
})
export class WishlistComponent implements OnInit, OnDestroy {
wishlists: Wishlist[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private wishlistService: WishlistService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.wishlistService.query().subscribe(
            (res: ResponseWrapper) => {
                this.wishlists = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInWishlists();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Wishlist) {
        return item.id;
    }
    registerChangeInWishlists() {
        this.eventSubscriber = this.eventManager.subscribe('wishlistListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
