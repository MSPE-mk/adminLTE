import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $("li").click(function () {
        // If this isn't already active
        if (!$(this).hasClass("active")) {
          // Remove the class from anything that is active
          $("li.active").removeClass("active");
          // And make this active
          $(this).addClass("active");
        }
      });
    })
  }

  changeClass(){
    
  }

}
