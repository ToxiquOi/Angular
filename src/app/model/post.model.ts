export class PostModel{

  constructor(public id: number,
              public title: string,
              public content: string,
              public like: number,
              public date: Date){}
}
