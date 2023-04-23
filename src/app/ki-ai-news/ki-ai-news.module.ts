import { KiAiNewsComponent } from './ki-ai-news.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DynamicNewsService } from '../services/dynamic-news.service';

const routes: Routes = [
  { path: '', component: KiAiNewsComponent },
];

@NgModule({
  declarations: [KiAiNewsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [DynamicNewsService]
})
export class KiAiNewsModule { }