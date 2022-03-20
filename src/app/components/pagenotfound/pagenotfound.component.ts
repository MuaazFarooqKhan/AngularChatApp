import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss'],
})
export class PagenotfoundComponent implements OnInit {
  constructor(private router: Router,    private toastr: ToastrService
    ) {}

  ngOnInit(): void {
    this.toastr.error('<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">No page found. Redirecting to Chat page</span>',
    "",{
      timeOut: 5000,
      closeButton: true,
      enableHtml: true,
      toastClass: 'alert alert-error alert-with-icon',
      positionClass: 'toast-center-center',
    });
    setTimeout(() => {
      this.router.navigate(['/chat']);
    }, 5000);
  }
}
