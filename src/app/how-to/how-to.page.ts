import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.page.html',
  styleUrls: ['./how-to.page.scss'],
})
export class HowToPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
