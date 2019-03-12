

export class UserModel {

  constructor(public firstName: string,
              public lastName: string,
              public email: string,
              public birthDate: Date,
              public hobbies?: string[]) {}

}
