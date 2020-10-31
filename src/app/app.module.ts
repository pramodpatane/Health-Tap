import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { MedicationComponent } from './medication/medication.component';
import { AllergiesComponent } from './allergies/allergies.component';
import { TreatmentOrProceduresComponent } from './treatment-or-procedures/treatment-or-procedures.component';
import { VaccinationComponent } from './vaccination/vaccination.component';
import { LabTestsComponent } from './lab-tests/lab-tests.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { PrefferedPharmacyComponent } from './preffered-pharmacy/preffered-pharmacy.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { HealthMetricsComponent } from './health-metrics/health-metrics.component';
import { ConditionsAndSymptomsComponent } from './conditions-and-symptoms/conditions-and-symptoms.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactInformationComponent,
    MedicationComponent,
    AllergiesComponent,
    TreatmentOrProceduresComponent,
    VaccinationComponent,
    LabTestsComponent,
    LifestyleComponent,
    PrefferedPharmacyComponent,
    InsuranceComponent,
    HealthMetricsComponent,
    ConditionsAndSymptomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
