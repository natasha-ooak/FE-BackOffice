import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
import { FunctionComponent } from './components/pages/function/function.component';
import { LayoutComponent } from './components/pages/page-layout/layout.component';
import { LinenComponent } from './components/pages/linen/linen.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    
    {
        path: 'login',
        component: LoginComponent,
      
    },
    {
        path: 'home',
        component: LayoutComponent,
        children:[

            {
                path: '',
                component: DashboardComponent 
            },
            {
                path: 'dashboard',
                component: DashboardComponent 
            },
            {
                path: 'function',
                component: FunctionComponent 
            },
            {
                path: 'linen',
                component: LinenComponent 
            }
        ]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
    },
    


];
