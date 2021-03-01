import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collecte-edit',
  templateUrl: './collecte-edit.component.html',
  styleUrls: ['./collecte-edit.component.css'],
})
export class CollecteEditComponent implements OnInit {
  id = null;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('params', this.route.params);
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
  }
}
