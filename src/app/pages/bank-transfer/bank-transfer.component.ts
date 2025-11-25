import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankTransferModel } from 'src/app/models/banckTransfer.model';
import { BankTransfersService } from 'src/app/services/bank-transfers.service';
import * as _ from 'lodash';
import * as moment from 'moment';
import flatpickr from 'flatpickr';
import * as $ from 'jquery';


@Component({
    selector: 'app-bank-transfer',
    styleUrls: ['./bank-transfer.component.css'],
    templateUrl: './bank-transfer.component.html',
})
export class BankTransferComponent implements OnInit, AfterViewInit {
    constructor(private router: ActivatedRoute, private bankTransferService: BankTransfersService, private routerA: Router,) { }
    branch_selected: string | null = null
    bankTransferData: BankTransferModel[] = [];
    showModal: boolean = false;
    messageModal: any = { title: 'Aviso', message: 'Complete todos los campos' };
    paginatedData: any[] = [];

    page = 1;
    pageSize = 10;
    totalPages = 1;
    totalPagesArray = [];

    ngOnInit() {
        this.bankTransferService.getBankTransfers().subscribe({
            next: (data: any) => {
                this.bankTransferData = data.data;
                console.log(this.bankTransferData)
                this.loadData()
            },
            error: (error: any) => {
                console.log(error)
                this.messageModal = {
                    title: 'Error',
                    message: error?.error?.message
                        ?? 'Error al obtener las transferencias bancarias'
                }
                this.showModal = true;
            }
        })
    }

    ngAfterViewInit() {
        // this.setupSelect2();
        this.setupFlatpickr();
    }

    // setupSelect2() {
    //     ($('.select2') as any).select2();
    // }

    setupFlatpickr() {
        flatpickr('.datepicker', { dateFormat: 'Y-m-d' });
    }

    loadData() {
        const sortedData = _.orderBy(this.bankTransferData, ['date'], ['desc']);

        const start = (this.page - 1) * this.pageSize;
        this.paginatedData = sortedData.slice(start, start + this.pageSize);

        this.totalPages = Math.ceil(sortedData.length / this.pageSize);
        this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    changePage(p: number) {
        this.page = p;
        this.loadData();
    }

    onBranch(branch: string | null) {
        console.log(branch)
        this.branch_selected = branch
    }

    goBack() {
        this.routerA.navigate(['/inicio']);
    }

}
