import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  img2= "../../assets/asdw.jpg"
  imgg= "../../assets/graylaptop.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
