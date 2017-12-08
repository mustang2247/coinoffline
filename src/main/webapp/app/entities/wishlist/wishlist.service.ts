import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { Wishlist } from './wishlist.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class WishlistService {

    private resourceUrl = SERVER_API_URL + 'api/wishlists';

    constructor(private http: Http) { }

    create(wishlist: Wishlist): Observable<Wishlist> {
        const copy = this.convert(wishlist);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(wishlist: Wishlist): Observable<Wishlist> {
        const copy = this.convert(wishlist);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<Wishlist> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        const result = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new ResponseWrapper(res.headers, result, res.status);
    }

    /**
     * Convert a returned JSON object to Wishlist.
     */
    private convertItemFromServer(json: any): Wishlist {
        const entity: Wishlist = Object.assign(new Wishlist(), json);
        return entity;
    }

    /**
     * Convert a Wishlist to a JSON which can be sent to the server.
     */
    private convert(wishlist: Wishlist): Wishlist {
        const copy: Wishlist = Object.assign({}, wishlist);
        return copy;
    }
}
