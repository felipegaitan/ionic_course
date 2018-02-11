import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HiWorldComponent } from './hi-world/hi-world.component';
import { HelloComponent } from './hello/hello.component';
import { NewTestComponent } from './new-test/new-test.component';
import { GreetingDiegoComponent } from './greeting-diego/greeting-diego.component';

@NgModule({
  declarations: [
    AppComponent,
    HiWorldComponent,
    HelloComponent,
    NewTestComponent,
    GreetingDiegoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
