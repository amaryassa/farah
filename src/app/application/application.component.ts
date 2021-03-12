import { Router, ActivatedRoute } from '@angular/router';
import { Application } from './../models/application.model';
import { ApplicationService } from './../services/application.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
})
export class ApplicationComponent implements OnInit {
  applications: Application[] = null;
  constructor(
    private applicationService: ApplicationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onEditApplication(id) {
    this.router.navigate([id, 'edit'], { relativeTo: this.route });
  }

  onNewApplication() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  onGoDetails(id) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
