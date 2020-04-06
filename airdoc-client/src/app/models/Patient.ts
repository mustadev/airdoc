export class Patient {
  firstName:string;
  lastName: string;
  age : number;
  tel : string;
  mail:string;

  constructor(firstName: string, lastName: string, age: number, tel: string, mail: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.tel = tel;
    this.mail = mail;
  }
}
