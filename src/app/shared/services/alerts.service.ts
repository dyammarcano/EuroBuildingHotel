import { ToastrService } from 'toastr-ng2';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';


class Toast {

    constructor(private _storage: StorageService) { }
}

export { Toast as AlertsService};
