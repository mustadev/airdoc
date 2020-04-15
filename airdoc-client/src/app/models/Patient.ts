export class Patient {
  id:string;
  firstname:string;
  lastname: string;
  age : number;
  tel : string;
  email:string;

  constructor(firstname: string, lastname: string, age: number, tel: string, email: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.tel = tel;
    this.email = email;
  }
}
