
export class Profile  {
  private id: number|null;
  private firstName: string;
  private lastName: string;
  private notes: string;
  private cvUrl: string;
  constructor(
    id: number|null,
    firstName: string,
    lastName: string,
    notes: string,
    cvUrl: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.notes = notes;
    this.cvUrl = cvUrl;
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
  public getCVUrl() : string {
    return this.cvUrl
  }
}
