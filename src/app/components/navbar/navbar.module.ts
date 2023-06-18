import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { ButtonModule } from '../button/button.module';
import { ModeToggleModule } from '../circle-button/circle-button.module';



@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        ModeToggleModule
    ],
    declarations: [
        NavbarComponent
    ],
    exports: [
        NavbarComponent
    ]
})
export class NavbarModule { }
