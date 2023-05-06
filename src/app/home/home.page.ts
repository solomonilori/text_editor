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
				if(exist){
					this.readMyFile();
				}else{
					alert('File does not xiste');
				}
				
			}).catch(err=>{
				alert(err);
			})
	}

	async createAndWriteFile() {
		this.file.createFile(this.file.dataDirectory, 'sample.txt', true)
		.then(fEntry =>{
			console.log('fEntry', fEntry);
			const myBlob = new Blob([this.stringValue], { type: 'text/plain' });
			this.file.writeExistingFile(this.file.dataDirectory,'sample.txt', myBlob)
			.then(()=>{
				console.log('New file is written');
			})
			.catch(err =>{
				console.log('An error encountered while writting to file. ' + err);
			});
		}).catch(err =>{
			console.log('An error occur while create file' + err)
		});
		
	}

	async readMyFile(){
		this.file.readAsText(this.file.dataDirectory,'sample.txt')
		.then(myContent =>{
			console.log('myContent', myContent);
			alert(myContent);
		}).catch(err =>{
			console.log('An error encountered while trying to read from file. ' + err);
		});
		
	}

	async writeToFile(){
		const myBlob = new Blob([this.stringValue], { type: 'text/plain' });
		this.file.writeExistingFile(this.file.dataDirectory,'sample.txt', myBlob)
		.then(()=>{
			console.log('File written successfully');
		})
		.catch(err =>{
			console.log('An error encountered while writting to file. ' + err);
		});
	}

}
