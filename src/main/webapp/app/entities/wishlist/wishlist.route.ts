import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { WishlistComponent } from './wishlist.component';
import { WishlistDetailComponent } from './wishlist-detail.component';
import { WishlistPopupComponent } from './wishlist-dialog.component';
import { WishlistDeletePopupComponent } from './wishlist-delete-dialog.component';

export const wishlistRoute: Routes = [
    {
        path: 'wishlist',
        component: WishlistComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'coinofflineApp.wishlist.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'wishlist/:id',
        component: WishlistDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'coinofflineApp.wishlist.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const wishlistPopupRoute: Routes = [
    {
        path: 'wishlist-new',
        component: WishlistPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'coinofflineApp.wishlist.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'wishlist/:id/edit',
        component: WishlistPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'coinofflineApp.wishlist.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'wishlist/:id/delete',
        component: WishlistDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'coinofflineApp.wishlist.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
