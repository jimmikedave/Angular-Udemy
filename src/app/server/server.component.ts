import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    test = 'String Interpolation in ServerComponent'

    getServerStatus() {
        return this.test + 'with a method'
    }
}