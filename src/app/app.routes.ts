import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
import { FunctionComponent } from './components/pages/function/function.component';
import { LayoutComponent } from './components/pages/page-layout/layout.component';
import { LinenComponent } from './components/pages/linen/linen.component';
import { authGuard } from './guards/auth.guard';
import { ModuleComponent } from './components/pages/module/module.component';
import { AddnewModuleComponent } from './components/pages/module/addnew-module/addnew-module.component';
import { ModuleDetailsComponent } from './components/pages/module/module-details/module-details.component';
import { FunctionEditComponent } from './components/pages/function/function-edit/function-edit.component';

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
        canActivate: [authGuard],
        data: { role: 'superadmin' },
        children:[

            {
                path: '',
                component: DashboardComponent,
                canActivate: [authGuard],
                data: { role: 'superadmin' } 
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [authGuard]
            },
            {
                path: 'function',
                component: FunctionComponent,
                canActivate: [authGuard],
                data: { role: 'superadmin' } 
            },
            {
                path: 'edit-function',
                component: FunctionEditComponent,
                canActivate: [authGuard],
                data: { role: 'superadmin' } 
            },
            {
                path: 'module',
                component: ModuleComponent,
                canActivate: [authGuard],
                data: { role: 'superadmin' } 
            },
            {
                path: 'add-module',
                component: AddnewModuleComponent,
                canActivate: [authGuard],
                data: { role: 'superadmin' } 
            },
            {
                path: 'details-module/:id',
                component: ModuleDetailsComponent,
                canActivate: [authGuard],
                data: { role: 'superadmin' } 
            },
            {
                path: 'linen',
                component: LinenComponent,
                canActivate: [authGuard]
            }
        ]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
    },
];