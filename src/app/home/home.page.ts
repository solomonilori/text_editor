import { Component, OnInit } from '@angular/core';
import { File } from '@awesome-cordova-plugins/file/ngx';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

	stringValue = 'Initial Text';

	constructor(private file: File) { }

	ngOnInit(){
		this.file.checkFile(this.file.dataDirectory, 'sample.txt')
			.then(exist=>{
				this.readMyFile();
			}).catch(err=>{
				alert(err);
			})
	}

	async createAndWriteFile() {
		this.file.createFile(this.file.dataDirectory, 'sample.txt', true);
		const myBlob = new Blob([this.stringValue], { type: 'text/plain' });
		this.file.writeExistingFile(this.file.dataDirectory,'sample.txt', myBlob);
	}

	async readMyFile(){
		this.stringValue = await this.file.readAsText(this.file.dataDirectory,'sample.txt');
	}

}
