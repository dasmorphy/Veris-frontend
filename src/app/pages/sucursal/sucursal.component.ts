import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankTransfersService } from 'src/app/services/bank-transfers.service';

@Component({
  selector: 'app-sucursal',
  styleUrls: ['./sucursal.component.css'],
  templateUrl: './sucursal.component.html',
})
export class SucursalComponent {
  constructor(private router: ActivatedRoute, private bankTransfersService: BankTransfersService) {}
  branch_selected: string | null = null

  arrayButton = [
    { name: 'Sucursal 1' },
    { name: 'Sucursal 2' },
    { name: 'Sucursal 3' },
    { name: 'Sucursal 4' }
  ];


  ngOnInit() {
    const access_direct = this.router.snapshot.paramMap.get('option');
    console.log(access_direct)
  }

  onBranch(branch: string | null) {
    console.log(branch)
    this.branch_selected = branch
    this.bankTransfersService.changeBranch(branch === 'Sucursal 1' ? true : false);
  }

}
