import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
/**
 * autor: Daniel Males
 * since: 25-11-2025
 * version: 1.0
 * Servicio para transferencias bancarias
 */
export class BankTransfersService {

    private _is_first_branch = new BehaviorSubject<boolean>(false);
    public is_first_branch$ = this._is_first_branch.asObservable();

    constructor(private http: HttpClient) { }

    getBankTransfers() {
        return this.http.get(`${environment.apiUrl}/transferencias-bancarias`)
    }

    changeBranch(flag: boolean) {
        this._is_first_branch.next(flag);
    }
}