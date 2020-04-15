import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:Contact = new Contact();
  constructor(
    private contactService:ContactService,
    private router:Router) { }

  ngOnInit(): void {
  }
  //TODO BELAID 
  //sawb form 
  // t3mert this.contact s value n input li dark
  // 3ad execute lfonctionad
  onSubmit(){
    console.log("submiting contact Contact ", JSON.stringify(this.contact));
    this.contactService.addContact(this.contact).subscribe(res => {
      console.log("submiting contact Contact ", JSON.stringify(res));
      this.router.navigate(['home']);
    })
  }
}
