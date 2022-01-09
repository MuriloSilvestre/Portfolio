import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { TableComponent } from './components/table/table.component';
import { MenuComponent } from './components/menu/menu.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { MessageComponent } from './components/message/message.component';
import { LayoutComponent } from './layout/layout.component';
import { InputComponent } from './components/input/input.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { TitleComponent } from './components/title/title.component';
import { TextComponent } from './components/text/text.component';
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/card/card.component';
import { InputcurrencyComponent } from './components/inputcurrency/inputcurrency.component';
import { InputnumberComponent } from './components/inputnumber/inputnumber.component';
import { TextcurrencyComponent } from './components/textcurrency/textcurrency.component';
import { LinkComponent } from './components/link/link.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    InputComponent,
    ListComponent,
    TableComponent,
    MenuComponent,
    CheckboxComponent,
    MessageComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    TitleComponent,
    TextComponent,
    SubtitleComponent,
    CarouselComponent,
    CardComponent,
    InputcurrencyComponent,
    InputnumberComponent,
    TextcurrencyComponent,
    LinkComponent,
    FooterComponent,
    HomeComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
