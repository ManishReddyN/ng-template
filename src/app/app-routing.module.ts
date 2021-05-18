import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component01Component } from './components/component01/component01.component';
import { Component02Component } from './components/component02/component02.component';

const routes: Routes = [
  {
    path: '',
    component: Component01Component,
  },
  {
    path: '2',
    component: Component02Component,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
