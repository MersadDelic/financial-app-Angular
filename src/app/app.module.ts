import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {BudgetComponent} from './budget components/budget/budget.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from './auth/auth.module';
import {HomeComponent} from './home/home.component';
import {JwtModule} from '@auth0/angular-jwt';
import {BudgetlistComponent} from './budget components/budgetlist/budgetlist.component';
import {BudgetdetailsComponent} from './budget components/budgetdetails/budgetdetails.component';
import {TransactionComponent} from './transaction components/transaction/transaction.component';
import {TransactionlistComponent} from './transaction components/transactionlist/transactionlist.component';
import {TransactiondetailsComponent} from './transaction components/transactiondetails/transactiondetails.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from './auth/auth.guard';

export function tokenGetter() {
  return localStorage.getItem('token');  // Dobavljanje tokena iz localStorage //
}

@NgModule({
  declarations: [
    AppComponent,
    BudgetComponent,
    HomeComponent,
    BudgetlistComponent,
    BudgetdetailsComponent,
    TransactionComponent,
    TransactionlistComponent,
    TransactiondetailsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,

    /**
     * Konfiguracija za JWT autentikaciju !
     */
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['http://ebit-front-test.herokuapp.com']
      }
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
