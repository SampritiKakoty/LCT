class Employee{
    NewId: string;

    static id:string;
    name:string;
    constructor(id:string,name:string){
        this.NewId=id;
        this.name=name;
        
    
    
    }

    displayEmp():void{
       // console.log("emp id"+this.id);
        console.log("emp name::"+this.name);
    }

}

var myEmp:Employee=new Employee("Id123","Sampriti");
myEmp.displayEmp();

class ASE extends Employee{

    constructor(private supervisorid:string,id:string,name:string){
        super(id,name);      
        this.supervisorid=supervisorid;
    }

    displaySupervisor():void{
        console.log("Supervisot emp id"+this.supervisorid); 
    }


}

var aseDetail=new ASE("Vijay","333","Ase123");
aseDetail.displaySupervisor();
aseDetail.displayEmp();
ASE.id="444";
console.log("ASE ID:::::",ASE.id)

ASE.id="555";

console.log("ASE nkdkd");
console.log("ASE ID:::::",ASE.id)
