import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private file: any | undefined;
  private path = "good";  //경로

  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
    
  }

  uploadFile(event : any) {
    this.file = event.target.files[0];
  }

  send(){
    const ref = this.storage.upload(this.path + this.file?.name, this.file);
    console.log(ref);
  }

}
