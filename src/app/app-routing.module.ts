import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../views/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'error',
    loadChildren: () => import('../views/error/error.module').then(m => m.ErrorModule),
  },
  {path: '**', redirectTo: '/error/404'}
];

@NgModule({
  exports: [RouterModule],
  /** Debug routes command */
  imports: [
    RouterModule.forRoot(routes, {
    enableTracing: !environment.production && environment.enableTracing,
    paramsInheritanceStrategy: 'always',
    initialNavigation: 'enabled'
}),
  ],
})
export class AppRoutingModule {}
