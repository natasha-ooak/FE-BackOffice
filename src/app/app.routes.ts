import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LCComponent } from './entities/LC/lc-home.component';
import { LPComponent } from './entities/LP/lp-home.component';
import { CPComponent } from './entities/CP/cp-home.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    
    {
        path: 'login',
        component: LoginComponent,
        children: [

        ]
    },
    {
        path: 'lc-home',
        component: LCComponent
    },
    {
        path: 'lp-home',
        component: LPComponent
    },
    {
        path: 'cp-home',
        component: CPComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children:[

        ]
        
    },
    


];
