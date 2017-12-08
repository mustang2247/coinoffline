import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Wishlist } from './wishlist.model';
import { WishlistService } from './wishlist.service';

@Component({
    selector: 'jhi-wishlist-detail',
    templateUrl: './wishlist-detail.component.html'
})
export class WishlistDetailComponent implements OnInit, OnDestroy {

    wishlist: Wishlist;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private wishlistService: WishlistService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInWishlists();
    }

    load(id) {
        this.wishlistService.find(id).subscribe((wishlist) => {
            this.wishlist = wishlist;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInWishlists() {
        this.eventSubscriber = this.eventManager.subscribe(
            'wishlistListModification',
            (response) => this.load(this.wishlist.id)
        );
    }
}
