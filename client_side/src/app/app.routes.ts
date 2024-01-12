import {RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AppointmentComponent} from './components/dashboard/sidebar/appointment/appointment.component';
import { MedicalhistoryComponent } from './components/dashboard/sidebar/medicalhistory/medicalhistory.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
export const routes: Routes = [
    { path: '', component: DashboardComponent },
    {path:'sidebar',component:SidebarComponent},
    {path:'Appointment',component:AppointmentComponent},
    {path:'MedicalHistory',component:MedicalhistoryComponent},
    


];
// Add Angular routing configuration
