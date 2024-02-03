import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollWatcherComponent } from './scroll-watcher/scroll-watcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScrollWatcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sCSS';
}
