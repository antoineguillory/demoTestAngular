import { Component, OnInit } from '@angular/core';
import { TotoService } from 'src/app/services/TotoService';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  totoService: TotoService;

  constructor(totoService: TotoService) { }

  ngOnInit() {
  }

  toto() {
    return 'Toto';
  }

  vrai() {
    return true;
  }

  faux() {
    return false;
  }

  bidon() {
    return true;
  }

  callTotoService() {
    return this.totoService.toto();
  }

}
