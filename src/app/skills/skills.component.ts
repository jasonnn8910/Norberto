import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  img3= "../../assets/website-design-slider-background-stockton.jpg";
  htl ="../../assets/html.png";
  cs3 ="../../assets/css.png";
  jst ="../../assets/js.jpg";
  btp ="../../assets/bootstrap.png";
  ang ="../../assets/angular.png";


  constructor() { }

  ngOnInit(): void {
  }

}
