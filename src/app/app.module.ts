import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FirebaseConfig } from '../environments/firebase.config'
import { AngularFireModule } from 'angularfire2/index';
import { AngularFireDatabase } from 'angularfire2/database-deprecated'
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule, NgForm} from '@angular/forms'

import { UnidadeComponent } from './unidade/unidade.component';
import { UnidadeService } from './unidade/unidade.service';

@NgModule({
  declarations: [
    AppComponent,
    UnidadeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    FormsModule
  ],
  providers: [AngularFireDatabase, UnidadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
