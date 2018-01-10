export class Project {
  constructor(
    public id: number,
    public headline: string,
    public title: string,
    public path: string,
    public tabs: object[]
  ) { }
}