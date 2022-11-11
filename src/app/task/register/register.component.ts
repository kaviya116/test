import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  currentIndex: any;
  arr: any = [
    {
      name: 'Kavi',
      age: 21,
      dprt: 'CSE',
      mail: 'kavi@gmail.com',
      pswrd: 'kavi113',
    },
    {
      name: 'Priya',
      age: 20,
      dprt: 'EEE',
      mail: 'priya@gmail.com',
      pswrd: 'priya11',
    },
    {
      name: 'Magesh',
      age: 22,
      dprt: 'ECE',
      mail: 'msgi@gmail.com',
      pswrd: 'mage88',
    },
    {
      name: 'Deepi',
      age: 23,
      dprt: 'CSE',
      mail: 'depi@gmail.com',
      pswrd: 'deppi66',
    },
    {
      name: 'Stell',
      age: 20,
      dprt: 'Mech',
      mail: 'stell@gmail.com',
      pswrd: 'stell55',
    },
    {
      name: 'Resh',
      age: 22,
      dprt: 'EEE',
      mail: 'resh@gmail.com',
      pswrd: 'resh22',
    },
  ];
  newform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(18),
      Validators.max(36),
    ]),
    dprt: new FormControl(''),
    mail: new FormControl('', [Validators.required]),
    pswrd: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });
  get name() {
    return this.newform.get('name');
  }
  get age() {
    return this.newform.get('age');
  }
  get mail() {
    return this.newform.get('mail');
  }
  get pswrd() {
    return this.newform.get('pswrd');
  }
  add() {
    let data = this.newform.value;
    this.arr.push(data);
  }
  delete(i: any) {
    this.arr.splice(i, 1);
  }
  update() {
    this.arr[this.currentIndex] = this.newform.value;
  }
  edit(i) {
    this.currentIndex = i;
    this.newform.patchValue({
      name: this.arr[i].name,
      age: this.arr[i].age,
      dprt: this.arr[i].dprt,
      mail: this.arr[i].mail,
      pswrd: this.arr[i].pswrd,
    });
  }
}
