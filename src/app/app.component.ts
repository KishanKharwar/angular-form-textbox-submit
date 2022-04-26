import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  userSelect ={};
  selectedData= [];
  // constructor(private user: UserServiceService) {
  //   console.warn("user service");
  // }

  ngOnInit() {
    this.dropdownList = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" },
      { "id": 5, "itemName": "South Korea" },
      { "id": 6, "itemName": "Germany" },
      { "id": 7, "itemName": "France" },
      { "id": 8, "itemName": "Russia" },
      { "id": 9, "itemName": "Italy" },
      { "id": 10, "itemName": "Sweden" }
    ];
    this.selectedItems = [
      
    ];
    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }
  onItemSelect(item: any) {
    console.log(item);
    this.selectedData.concat(item,",");
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }

  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }

  constructor(private userService: UserServiceService){
    // userService.findAll().subscribe((data) => {
    //   console.warn('data',data);
    //   this.users=data;
    // });
  }


  onSelectedUser(user: any) {
    //console.log(user);
    console.log(this.userSelect);
  }

  getUserFormData(data: any) {
    console.warn('data', data);
    console.warn('selected items',this.selectedItems)
    console.warn('user select',this.userSelect);
    var object =  Object.assign(data,this.selectedItems, this.userSelect);
    console.warn("obj",object);
    this.userService.save(object).subscribe((result)=>{
      console.warn(result);
    });

  }
}
