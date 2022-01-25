import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morse-converter',
  templateUrl: './morse-converter.component.html',
  styleUrls: ['./morse-converter.component.css']
})
export class MorseConverterComponent implements OnInit {

inputText: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
