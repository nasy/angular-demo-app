import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { Profile } from '../../model/Profile';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  public profiles : Profile[] = [];
  public pageIndex = 0;
  public loading = false;
  public displayedColumns: string[] = [
    "firstName",
    "lastName",
    "notes",
    "csvUrl",
  ];
  public sessionId: string;
  public error = false;
  constructor(
    public router: Router,
    public profileService: ProfileService,
    public sessionService: SessionService
    ) {
      this.sessionId = this.sessionService.getOrCreateSession();
    }

  ngOnInit(): void {
    this.getProfiles();
  }
  goBack(): void {
    this.router.navigate(["/"]);
  }
  viewPdf(url: string): void {
    window.open(url, '_blank');
  }
  getProfiles(): void {
    this.loading = true;
    this.error = false;
    this.profileService.getAll(this.sessionId)
    .subscribe((profiles: Profile[]) => {
      this.profiles = profiles;
      this.loading = false;
    }, (e) => {
      this.error = true;
    });
  }
}
