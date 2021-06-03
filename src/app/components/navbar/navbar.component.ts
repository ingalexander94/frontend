import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  title: String;
  subscription: Subscription = new Subscription();

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('ui')
      .subscribe(({ titleNavbar }) => (this.title = titleNavbar));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logout() {
    this.router.navigate(['/iniciar-sesion']);
  }
}
