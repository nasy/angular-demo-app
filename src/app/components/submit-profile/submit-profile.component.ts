import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { Profile } from '../../model/Profile';
import { ProfileService } from '../../services/profile.service';

interface ProfileModel {
  firstName: string,
  lastName: string,
  notes: string
}

@Component({
  selector: 'app-submit-profile',
  templateUrl: './submit-profile.component.html',
  styleUrls: ['./submit-profile.component.scss']
})
export class SubmitProfileComponent implements OnInit {
  public profileModel: ProfileModel = {
    firstName: '',
    lastName: '',
    notes: ''
  };
  public saving = false;
  public sessionId: string;
  public success = false;
  public error = false;
  public selectedFile: File|null = null;
  public showStepTwo = false;
  public formErrors = false;
  public fileErrors = false;
  public uploadedFileUrl: string|null = null;
  constructor(
    public router: Router,
    public profileService: ProfileService,
    public sessionService: SessionService
  ) {
    this.sessionId = this.sessionService.getOrCreateSession();
  }
  ngOnInit(): void {}
  goBack(): void {
    this.router.navigate(["/"]);
  }
  goToProfiles(): void {
    this.router.navigate(["/profiles"]);
  }
  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
        return;
    }
    this.selectedFile = input.files[0];
    this.uploadFile();
  }
  nextStep(): void {
    this.showStepTwo = true;
    if(this.selectedFile) {
      this.uploadFile();
    }
  }
  uploadFile() : void {
    this.profileService.postFile(
      this.sessionId,
      this.selectedFile as File
    ).subscribe((url: string|null) => {
      if(url) {
        this.uploadedFileUrl = url;
      }
    }, (error) => {
      this.error = true;
    });
  }
  send(): void {
    this.fileErrors = false;
    this.formErrors = false;
    if(!this.uploadedFileUrl) {
      this.fileErrors = true;
      return;
    }
    // We could use reactive forms here. I've skipped it for simplicity
    if(!this.profileModel.firstName || !this.profileModel.lastName) {
      this.formErrors = true;
      return;
    }
    this.saving = true;
    this.error = false;
    this.profileService.create(
      new Profile(
        null,
        this.profileModel.firstName,
        this.profileModel.firstName,
        this.profileModel.notes,
        this.uploadedFileUrl as string
      )
    )
    .subscribe((r) => {
      this.saving = false;
      this.success = true;
    }, (e) => {
      this.error = true;
    });
  }
}
