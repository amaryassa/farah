import { Collecte } from './../../models/collecte.model';
import { CollecteService } from './../../services/collecte.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collecte-edit',
  templateUrl: './collecte-edit.component.html',
  styleUrls: ['./collecte-edit.component.css'],
})
export class CollecteEditComponent implements OnInit {
  id: number = null;
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
