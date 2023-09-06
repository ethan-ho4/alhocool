import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//components
import { HeaderComponent } from './global/header/header.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { LoginSignupPageComponent } from './login/login-signup-page/login-signup-page.component';
import { ChihiroCarouselComponent } from './main/chihiro-carousel/chihiro-carousel.component';
import { AboutPageComponent } from './about/about-page/about-page.component';
import { LoginSignupComponent } from './login/login-signup/login-signup.component';
import { BeerPageComponent } from './beer/beer-page/beer-page.component';
import { WinePageComponent } from './wine/wine-page/wine-page.component';
import { RiceAlcoholPageComponent } from './rice-alcohol/rice-alcohol-page/rice-alcohol-page.component';
import { SearchPageComponent } from './search/search-page/search-page.component';
import { FooterComponent } from './global/footer/footer.component';
import { SampleComponent } from './search/sample/sample.component';
import { SearchBarComponent } from './search/search-bar/search-bar.component';
import { AboutMainComponent } from './main/about-main/about-main.component';
import { RecommendedComponent } from './main/recommended/recommended.component';
import { AboutTitleComponent } from './about/about-title/about-title.component';
import { AboutContentComponent } from './about/about-content/about-content.component';
import { BeerTitleComponent } from './beer/beer-title/beer-title.component';
import { WineTitleComponent } from './wine/wine-title/wine-title.component';
import { LiqueurTitleComponent } from './liqueur/liqueur-title/liqueur-title.component';
import { LiqueurPageComponent } from './liqueur/liqueur-page/liqueur-page.component';
import { RiceAlcoholTitleComponent } from './rice-alcohol/rice-alcohol-title/rice-alcohol-title.component';
import { SpiritPageComponent } from './spirit/spirit-page/spirit-page.component';
import { SpiritTitleComponent } from './spirit/spirit-title/spirit-title.component';
import { BeerOverviewComponent } from './beer/beer-overview/beer-overview.component';
import { BeerHeaderComponent } from './beer/beer-header/beer-header.component';
import { BeerTypesComponent } from './beer/beer-types/beer-types.component';
import { BeerFoodComponent } from './beer/beer-food/beer-food.component';
import { BeerHistoryComponent } from './beer/beer-history/beer-history.component';
import { BeerProcessComponent } from './beer/beer-process/beer-process.component';
import { BeerBrandsComponent } from './beer/beer-brands/beer-brands.component';
import { WineBrandsComponent } from './wine/wine-brands/wine-brands.component';
import { WineFoodComponent } from './wine/wine-food/wine-food.component';
import { WineHeaderComponent } from './wine/wine-header/wine-header.component';
import { WineHistoryComponent } from './wine/wine-history/wine-history.component';
import { WineOverviewComponent } from './wine/wine-overview/wine-overview.component';
import { WineProcessComponent } from './wine/wine-process/wine-process.component';
import { WineTypesComponent } from './wine/wine-types/wine-types.component';
import { SpiritBrandsComponent } from './spirit/spirit-brands/spirit-brands.component';
import { SpiritFoodComponent } from './spirit/spirit-food/spirit-food.component';
import { SpiritHeaderComponent } from './spirit/spirit-header/spirit-header.component';
import { SpiritHistoryComponent } from './spirit/spirit-history/spirit-history.component';
import { SpiritOverviewComponent } from './spirit/spirit-overview/spirit-overview.component';
import { SpiritProcessComponent } from './spirit/spirit-process/spirit-process.component';
import { SpiritTypesComponent } from './spirit/spirit-types/spirit-types.component';
import { LiqueurBrandsComponent } from './liqueur/liqueur-brands/liqueur-brands.component';
import { LiqueurFoodComponent } from './liqueur/liqueur-food/liqueur-food.component';
import { LiqueurHeaderComponent } from './liqueur/liqueur-header/liqueur-header.component';
import { LiqueurHistoryComponent } from './liqueur/liqueur-history/liqueur-history.component';
import { LiqueurOverviewComponent } from './liqueur/liqueur-overview/liqueur-overview.component';
import { LiqueurProcessComponent } from './liqueur/liqueur-process/liqueur-process.component';
import { LiqueurTypesComponent } from './liqueur/liqueur-types/liqueur-types.component';
import { RiceAlcoholBrandsComponent } from './rice-alcohol/rice-alcohol-brands/rice-alcohol-brands.component';
import { RiceAlcoholFoodComponent } from './rice-alcohol/rice-alcohol-food/rice-alcohol-food.component';
import { RiceAlcoholHeaderComponent } from './rice-alcohol/rice-alcohol-header/rice-alcohol-header.component';
import { RiceAlcoholHistoryComponent } from './rice-alcohol/rice-alcohol-history/rice-alcohol-history.component';
import { RiceAlcoholOverviewComponent } from './rice-alcohol/rice-alcohol-overview/rice-alcohol-overview.component';
import { RiceAlcoholProcessComponent } from './rice-alcohol/rice-alcohol-process/rice-alcohol-process.component';
import { RiceAlcoholTypesComponent } from './rice-alcohol/rice-alcohol-types/rice-alcohol-types.component';
import { AccountPageComponent } from './account/account-page/account-page.component';
import { AccountInfoComponent } from './account/account-info/account-info.component';
import { AccountLogoutComponent } from './account/account-logout/account-logout.component';
import { BlankPageComponent } from './blank/blank-page/blank-page.component';
import { BlankPageContentComponent } from './blank/blank-page-content/blank-page-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    LoginSignupPageComponent,
    ChihiroCarouselComponent,
    AboutPageComponent,
    LoginSignupComponent,
    BeerPageComponent,
    WinePageComponent,
    RiceAlcoholPageComponent,
    SearchPageComponent,
    FooterComponent,
    SampleComponent,
    SearchBarComponent,
    AboutMainComponent,
    RecommendedComponent,
    AboutTitleComponent,
    AboutContentComponent,
    BeerTitleComponent,
    WineTitleComponent,
    LiqueurTitleComponent,
    LiqueurPageComponent,
    RiceAlcoholTitleComponent,
    SpiritPageComponent,
    SpiritTitleComponent,
    BeerOverviewComponent,
    BeerHeaderComponent,
    BeerTypesComponent,
    BeerFoodComponent,
    BeerHistoryComponent,
    BeerProcessComponent,
    BeerBrandsComponent,
    WineBrandsComponent,
    WineFoodComponent,
    WineHeaderComponent,
    WineHistoryComponent,
    WineOverviewComponent,
    WineProcessComponent,
    WineTypesComponent,
    SpiritBrandsComponent,
    SpiritFoodComponent,
    SpiritHeaderComponent,
    SpiritHistoryComponent,
    SpiritOverviewComponent,
    SpiritProcessComponent,
    SpiritTypesComponent,
    LiqueurBrandsComponent,
    LiqueurFoodComponent,
    LiqueurHeaderComponent,
    LiqueurHistoryComponent,
    LiqueurOverviewComponent,
    LiqueurProcessComponent,
    LiqueurTypesComponent,
    RiceAlcoholBrandsComponent,
    RiceAlcoholFoodComponent,
    RiceAlcoholHeaderComponent,
    RiceAlcoholHistoryComponent,
    RiceAlcoholOverviewComponent,
    RiceAlcoholProcessComponent,
    RiceAlcoholTypesComponent,
    AccountPageComponent,
    AccountInfoComponent,
    AccountLogoutComponent,
    BlankPageComponent,
    BlankPageContentComponent,
  ],

  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
