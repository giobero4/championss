import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomosComponent } from './pages/somos/somos.component';
import { EditorialComponent } from './pages/editorial/editorial.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { HomeComponent } from './pages/home/home.component';
import { RevistaComponent } from './pages/revista/revista.component';
import { ParticipantesComponent } from './pages/participantes/participantes.component';
import { FixtureComponent } from './pages/fixture/fixture.component';
import { CampeonatosComponent } from './pages/campeonatos/campeonatos.component';
import { PublicidadComponent } from './pages/publicidad/publicidad.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EntrevistasComponent } from './pages/entrevistas/entrevistas.component';
import { EntrevistaDetailComponent } from './pages/entrevista-detail/entrevista-detail.component';
import { EntrevistaVideoComponent } from './pages/entrevista-video/entrevista-video.component';
import { ParticipacionComponent } from './pages/participacion/participacion.component';
import { DetalleParticipacionComponent } from './pages/detalle-participacion/detalle-participacion.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LogoBarComponent } from './shared/logo-bar/logo-bar.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { InicioComponent } from './pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    SomosComponent,
    EditorialComponent,
    HistoriaComponent,
    HomeComponent,
    RevistaComponent,
    ParticipantesComponent,
    FixtureComponent,
    CampeonatosComponent,
    PublicidadComponent,
    FooterComponent,
    EntrevistasComponent,
    EntrevistaDetailComponent,
    EntrevistaVideoComponent,
    ParticipacionComponent,
    DetalleParticipacionComponent,
    SidebarComponent,
    LogoBarComponent,
    ScrollSpyDirective,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
     FormsModule 
  ],
  exports: [FooterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
