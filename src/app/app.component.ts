import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { LoaderService } from './core/services/loader.service';
import { LoaderComponent } from './core/layout/loader/loader.component';
import { Subscription } from 'rxjs';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnDestroy {
  isLoading!: boolean;
  subscriptions = new Subscription();

  constructor(private loaderService: LoaderService) {
    this.subscriptions.add(
      this.loaderService.loaderState$.subscribe((loading: boolean) => {
        this.isLoading = loading;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}