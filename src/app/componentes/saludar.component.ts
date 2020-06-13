import{Component, Input, Output, EventEmitter} from '@angular/core'


@Component(
    {
        selector:'saludar-app',
        templateUrl:'./saludar.component.html',
        styleUrls:['./saludar.component.css']
    }
)

export class SaludarComponent{
    @Input() nombre:string;
    @Output() saludar: EventEmitter<string> =new EventEmitter<string>();


    @Output() Lista:EventEmitter<string>=new EventEmitter<string>();

    public nombres: Array<string>=[];
    public nombreLista:string="Efren";
    

    
    
    constructor(){
    }

    onClick(){
        this.saludar.emit('Hola desde el componente hijo!')
    }

    onButtonClick(){
        this.nombres.push(this.nombreLista);
        this.nombreLista;
        this.Lista.emit(this.nombreLista);
        console.log(this.nombres);
    }
    
}