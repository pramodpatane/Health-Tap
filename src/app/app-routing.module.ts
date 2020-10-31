import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { HealthMetricsComponent } from './health-metrics/health-metrics.component'
import { ConditionsAndSymptomsComponent } from './conditions-and-symptoms/conditions-and-symptoms.component'
import { MedicationComponent } from './medication/medication.component';
import { AllergiesComponent } from './allergies/allergies.component'
import { TreatmentOrProceduresComponent } from './treatment-or-procedures/treatment-or-procedures.component';
import { VaccinationComponent } from './vaccination/vaccination.component'
import { LabTestsComponent } from './lab-tests/lab-tests.component'
import { LifestyleComponent } from './lifestyle/lifestyle.component'
import { PrefferedPharmacyComponent } from './preffered-pharmacy/preffered-pharmacy.component';
import { InsuranceComponent } from './insurance/insurance.component'

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact-information', component: ContactInformationComponent},
  { path: 'health-metrics', component: HealthMetricsComponent },
  { path: 'conditions-and-symptoms', component: ConditionsAndSymptomsComponent },
  { path: 'medication', component: MedicationComponent },
  { path: 'allergies', component: AllergiesComponent },
  { path: 'treatment-or-procedures', component: TreatmentOrProceduresComponent },
  { path: 'vaccination', component: VaccinationComponent },
  { path: 'lab-tests', component: LabTestsComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'preffered-pharmacy', component: PrefferedPharmacyComponent },
  { path: 'insurance', component: InsuranceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
