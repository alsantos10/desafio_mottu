import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { catchError, of } from "rxjs";

import { RickAndMortyService } from "./rick-and-morty.service";

@Injectable({
    providedIn: 'root'
})
export class RickAndMortyResolverService implements Resolve<any> {

    constructor(private service: RickAndMortyService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.service.getList().pipe(
            catchError(error => of('Sem dados de Retorno', error))
        );
    }
}