import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharemessageService } from 'src/app/services/sharemessage.service';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss'],
})
export class PagenotfoundComponent implements OnInit {
  constructor(private router: Router, private _toast: SharemessageService

  ) { }

  ngOnInit(): void {
    this._toast.showNotificationUpdate("No page found. Redirecting to Chat page")
    setTimeout(() => {
      this.router.navigate(['/chat']);
    }, 3000);
  }
}
