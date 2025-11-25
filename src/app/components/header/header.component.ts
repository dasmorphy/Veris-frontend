import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BankTransfersService } from 'src/app/services/bank-transfers.service';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.css'],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  is_first_branch: boolean = false;
  sub!: Subscription;

  constructor(private bankTransfersService: BankTransfersService, private router: Router) {}

  ngOnInit() {
    this.sub = this.bankTransfersService.is_first_branch$.subscribe(valor => {
      this.is_first_branch = valor;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  toGo() {
    this.router.navigate(['inicio/transferencias-bancarias']);
  }


}
