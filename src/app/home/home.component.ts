import { Component } from '@angular/core';
import { ComunicationService } from '../shared/services/comunication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private comunicationService: ComunicationService,  private router: Router) {}

  searchClick(){
    this.comunicationService.setSearchText("Vincent van Gogh");
    this.router.navigate(['artist']);
  }

}
