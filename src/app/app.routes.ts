import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutentificationComponent } from './autentification/autentification.component';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [  // Asegúrate de exportar la constante
  { path: 'autentification', component: AutentificationComponent },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/autentification', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
