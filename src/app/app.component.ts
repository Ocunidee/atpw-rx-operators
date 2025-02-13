import { Component, OnInit } from '@angular/core'
import { filter, fromEvent, map } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  eventMessage = ''

  ngOnInit(): void {
    fromEvent<MouseEvent>(document, 'click')
      .pipe(
        filter(event => event.clientX <= 100 && event.clientY <= 100),
        map(event => `x: ${event.clientX}, y: ${event.clientY}`)
      )
      .subscribe({ next: data => this.eventMessage = data })
  }
}
