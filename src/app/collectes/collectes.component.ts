import { CollecteService } from './../services/collecte.service';
import { Collecte } from './../models/collecte.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-collectes',
  templateUrl: './collectes.component.html',
  styleUrls: ['./collectes.component.css'],
})
export class CollectesComponent implements OnInit {
  collectes: Collecte[] = null;
  constructor(
    private collecteService: CollecteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.collecteService.getCollectes().subscribe((data) => {
      console.log(data);
      this.collectes = data;
    });
  }

  onEditCollecte(id) {
    this.router.navigate([id, 'edit'], { relativeTo: this.route });
  }

  onNewCollecte() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  onGoDetails(id) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
