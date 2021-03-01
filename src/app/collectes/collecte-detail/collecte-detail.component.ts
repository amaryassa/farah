import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-collecte-detail',
  templateUrl: './collecte-detail.component.html',
  styleUrls: ['./collecte-detail.component.css'],
})
export class CollecteDetailComponent implements OnInit {
  id: number;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('params', this.route.params);
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
  }
}
