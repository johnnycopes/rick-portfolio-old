export class Project {
  constructor(
    public id: number,
    public headline: string,
    public title: string,
    public path: string,
    public clips: { name: string, url: string }[]
  ) { }
}
