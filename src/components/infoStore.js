import { computed, observable } from "mobx"


export class InfoStore {

	@observable infos 

	infosValue(){
		return this.infos
	}

	addInfo(value){
	   	this.infos = value
	}

}

export default new InfoStore