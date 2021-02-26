import { Pipe } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'bypass' })

export class Bypass {

    constructor(
        private _sanitizer: DomSanitizer
    ) {
    }

    transform(value: string = ''): SafeHtml {
        return this._sanitizer.bypassSecurityTrustHtml(value);
    }
}
