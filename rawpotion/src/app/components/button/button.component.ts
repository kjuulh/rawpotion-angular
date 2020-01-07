import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent implements OnInit {
  @Input() filled = false;
  @Input() link: string;
  @Input() text: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  click() {
    this.router.navigate([this.link]);
  }
}
