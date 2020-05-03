import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";
  constructor() {}
  ngOnInit() {}
  toggle() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar__links") {
      x.className += " responsive";
    } else {
      x.className = "navbar__links";
    }
  }
}
