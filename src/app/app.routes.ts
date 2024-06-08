import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ModoComponent } from './components/modo/modo.component';
import { CoverComponent } from './components/cover/cover.component';
import { ClientMgmtComponent } from './components/ventas/client-mgmt/client-mgmt.component';
import { ClientComponent } from './components/ventas/client/client.component';
import { GestionmaterialesComponent } from './components/gestionmateriales/gestionmateriales.component';
import { GestionprodComponent } from './components/gestionprod/gestionprod.component';
import { GestionproveComponent } from './components/gestionprove/gestionprove.component';
import { OrderComponent } from './components/ventas/order/order.component';
import { SolmatprimaComponent } from './components/produccion/solmatprima/solmatprima.component';
import { GestprodComponent } from './components/produccion/solmatprima/gestprod/gestprod.component';
import { SegproducComponent } from './components/produccion/solmatprima/segproduc/segproduc.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: CoverComponent},
    { path: 'login', component: LoginComponent},
    { path: 'modo',  component: ModoComponent},
    { path: 'client-mgmt',  component: ClientMgmtComponent },
    { path: 'client/:orderId',  component: ClientComponent },
    { path: 'gest-mat',  component: GestionmaterialesComponent },
    { path: 'gest-prod',  component: GestionprodComponent },
    { path: 'gest-prove',  component: GestionproveComponent },
    { path: 'sol-mat',  component: SolmatprimaComponent },
    { path: 'order',  component: OrderComponent },
    {path: 'gest-produccion', component: GestprodComponent},
    {path: 'seg-prod', component: SegproducComponent}
];
