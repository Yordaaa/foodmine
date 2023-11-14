import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {


  constructor(){}
  @Input()
  title!:string;
  @Input()
  margin? = '1rem 0 1 rem 0.2rem';
  @Input()
  fontsize? = '1.7rem';
  ngOnInit(): void{

  }
}
