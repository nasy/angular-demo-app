
export class Profile  {
  private id: number|null;
  private firstName: string;
  private lastName: string;
  private jobTitle: string;
  private notes: string;
  private cvPath: string;
  private sessionId: string|null;
  constructor(
    id: number|null,
    firstName: string,
    lastName: string,
    jobTitle: string,
    notes: string,
    cvPath: string,
    sessionId: string|null = null,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.notes = notes;
    this.cvPath = cvPath;
    this.sessionId = sessionId;
  }
  public getId() : number|null {
    return this.id
  }
  public getFirstName() : string{
    return this.firstName
  }
  public getLastName() : string{
    return this.lastName
  }
  public getNotes() : string{
    return this.notes
  }
  public getJobTitle() : string{
    return this.jobTitle
  }
  public getcvPath() : string {
    return this.cvPath
  }
}
