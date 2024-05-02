import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    }
];
