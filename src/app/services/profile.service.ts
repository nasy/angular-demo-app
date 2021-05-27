import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Profile } from '../model/Profile';

@Injectable()
export class ProfileService {
  public httpOptions: any;
  constructor(
    private http: HttpClient,
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({})
    };
  }
  getAll(sessionId: string) : Observable<Profile[]> {
    return new Observable((observer) => {
      let profiles : Profile[] = [];
      return this.http.get(
        environment.api_endpoint + 'profiles/' + sessionId,
        this.httpOptions
      ).subscribe((data: any) => {
        data.forEach((element: any) => {
          profiles.push(new Profile(
            element.id,
            element.firstName,
            element.lastName,
            element.notes,
            element.cvUrl,
          ))
        });
        observer.next(profiles);
      });
    });
  }
  create(profile: Profile) {
    return this.http.post(environment.api_endpoint + 'profiles',  JSON.stringify(profile), this.httpOptions);
  }
  postFile(sessionId: string, fileToUpload: File): Observable<string|null> {
    return new Observable((observer) => {
    const endpoint = environment.api_endpoint + 'profiles/' + sessionId + '/file';
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.http
      .post(endpoint, formData, {})
      .subscribe((data: any) => {
        observer.next(data.url);
      }, () => {
        observer.next(null);
      });
    });
  }
}
