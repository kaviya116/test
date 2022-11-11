import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  currentIndex: any;
  @Input( ) msg:any=[];
  @Output() go=new EventEmitter();
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
newform: any;
  constructor() { }

  ngOnInit() {
  }
  edit(){
    this.go.emit(this.arr)
    
  }
  delete(){
    this.go.emit(this.arr)
  }
  update() {
    this.arr[this.currentIndex] = this.newform.value;
  }
}