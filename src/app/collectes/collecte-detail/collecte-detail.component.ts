import { Collecte } from './../../models/collecte.model';
import { CollecteService } from './../../services/collecte.service';
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
  collecte: Collecte;
  constructor(
    private collecteService: CollecteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('params', this.route.params);
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.collecteService.getCollecte(this.id).subscribe((data) => {
        this.collecte = data;
      });
    });
  }
}
