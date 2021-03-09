import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component'; 
import { CampeonatosComponent } from './pages/campeonatos/campeonatos.component';
import { EditorialComponent } from './pages/editorial/editorial.component';
import { FixtureComponent } from './pages/fixture/fixture.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { ParticipantesComponent } from './pages/participantes/participantes.component';
import { PublicidadComponent } from './pages/publicidad/publicidad.component';
import { RevistaComponent } from './pages/revista/revista.component';
import { SomosComponent } from './pages/somos/somos.component';
import { EntrevistasComponent } from './pages/entrevistas/entrevistas.component';
import { EntrevistaDetailComponent } from './pages/entrevista-detail/entrevista-detail.component';
import { EntrevistaVideoComponent } from './pages/entrevista-video/entrevista-video.component';
import { ParticipacionComponent } from './pages/participacion/participacion.component';
import { DetalleParticipacionComponent } from './pages/detalle-participacion/detalle-participacion.component';


const routes: Routes = [

  {path:'home', component: HomeComponent},
  {path:'campeonatos', component:  CampeonatosComponent},
  {path:'editorial', component: EditorialComponent},
  {path:'fixture', component: FixtureComponent},
  {path:'historia', component: HistoriaComponent},
  {path:'participantes', component:  ParticipantesComponent},
  {path:'torneo', component: PublicidadComponent},
  {path:'revista', component:  RevistaComponent},
  {path:'somos', component:  SomosComponent},
  {path:'entrevistas', component: EntrevistasComponent},
  {path:'detalle', component: EntrevistaDetailComponent},
  {path:'video', component: EntrevistaVideoComponent},
  {path:'participacion', component: ParticipacionComponent},
  {path:'trayectoria', component:  DetalleParticipacionComponent},
  {path:'**', redirectTo:'home', pathMatch: 'full'}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
