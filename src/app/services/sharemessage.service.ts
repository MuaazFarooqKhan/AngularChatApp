import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SharemessageService {

  constructor(private toastr: ToastrService
    ) { }
  showNotificationUpdate(msg: string) {
    this.toastr.error(msg, '', {
      timeOut: 3000,
      closeButton: true,
      enableHtml: true,
      toastClass: 'alert alert-error alert-with-icon',
      positionClass: 'toast-center-center',
    });
  }
  titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();     
  }
}
