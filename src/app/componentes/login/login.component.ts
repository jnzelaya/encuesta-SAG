import  {Component} from '@angular/core';

@Component({
	selector : 'login',
	templateUrl:'./login.component.html' 
})

export class LoginComponent {

	 title = 'Sisteme de encuestas SAG';

	public correo:string;
	public pass: string;

	constructor(){
		console.log('este es el componente de login')
	}	

	getDatos(){
		alert(this.correo + this.pass);
	}

}
