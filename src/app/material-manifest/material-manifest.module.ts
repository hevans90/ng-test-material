import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material';

const modules = [MatToolbarModule];

@NgModule({
  imports: [CommonModule, ...modules],
  exports: [...modules],
})
export class MaterialManifestModule {}
