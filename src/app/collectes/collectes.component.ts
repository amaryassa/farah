import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-collectes',
  templateUrl: './collectes.component.html',
  styleUrls: ['./collectes.component.css'],
})
export class CollectesComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

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
