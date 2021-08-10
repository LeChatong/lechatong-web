import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = {
    full_name: null,
    email: null,
    phone: null,
    subject: null,
    message: null
  };

  constructor(public http: HttpClient,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.init()
  }

  init(){
    this.contact = {
      full_name: null,
      email: null,
      phone: null,
      subject: null,
      message: null
    };
  }

  onSubmit(){
    this.http.post('https://lechatong-web-api.herokuapp.com/api/v1/contact', this.contact).subscribe(
      (resp) => {
        this.init();
        this.toastr.success('You\'re message is sending. Thanks you', 'Success');
        console.log('Connexion OK');
      },
      (error) => {
        console.log('Connexion NOK');
        this.toastr.error('Error encored. Please retry later', 'Error');
      });
  }

}
