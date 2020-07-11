import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
  
  imgLink= "../../assets/website-design-slider-background-stockton.jpg"
  

  constructor() { }

  ngOnInit(): void {
  }

}
