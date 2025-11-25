import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/authGuard.guard';
import { SucursalComponent } from './pages/sucursal/sucursal.component';
import { NoAuthGuard } from './guards/noAuthGuard.guard';
import { BankTransferComponent } from './pages/bank-transfer/bank-transfer.component';


const routes: Routes = [
  { path: '', component:  LoginComponent, canActivate: [NoAuthGuard]},
  { 
    path: 'inicio', 
    component: LayoutComponent,
    children: [
      { 
        path: "", canActivate: [AuthGuard], 
        component: SucursalComponent,
      },
      { 
        path: "transferencias-bancarias", canActivate: [AuthGuard], 
        component: BankTransferComponent,
      },
    ],
    canActivate: [AuthGuard] 
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
