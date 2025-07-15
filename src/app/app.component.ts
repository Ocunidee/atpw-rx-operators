import { Component, OnInit, signal } from '@angular/core'
import { fromEvent, map } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  eventMessage = signal('')

  ngOnInit(): void {
    fromEvent<MouseEvent>(document, 'click')
      .pipe(
        map(event => `x: ${event.clientX}, y: ${event.clientY}`)
      )
      .subscribe({ next: data => this.eventMessage.set(data) })
  }
}
