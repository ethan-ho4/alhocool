import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main/main-page/main-page.component'; //imports main page component
import { LoginSignupPageComponent } from './login/login-signup-page/login-signup-page.component'; //imports login page component
import { AboutPageComponent } from './about/about-page/about-page.component';
import { BeerPageComponent } from './beer/beer-page/beer-page.component';
import { WinePageComponent } from './wine/wine-page/wine-page.component';
import { SpiritPageComponent } from './spirit/spirit-page/spirit-page.component';
import { LiqueurPageComponent } from './liqueur/liqueur-page/liqueur-page.component';
import { RiceAlcoholPageComponent } from './rice-alcohol/rice-alcohol-page/rice-alcohol-page.component';
import { SearchPageComponent } from './search/search-page/search-page.component';
import { AccountPageComponent } from './account/account-page/account-page.component';
import { BlankPageComponent } from './blank/blank-page/blank-page.component';


const routes: Routes = [
  { path: '', component: MainPageComponent, pathMatch: 'full' },//When there is no link it becomes the main page
  { path: 'main', component: MainPageComponent },
  { path: 'login-signup', component: LoginSignupPageComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'beer', component: BeerPageComponent},
  {path: 'wine', component: WinePageComponent},
  {path: 'spirit', component: SpiritPageComponent},
  {path: 'liqueurs-cordial', component: LiqueurPageComponent},
  {path: 'rice-based-alcohol', component: RiceAlcoholPageComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'account', component: AccountPageComponent},
  {path: 'blank-page', component: BlankPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
