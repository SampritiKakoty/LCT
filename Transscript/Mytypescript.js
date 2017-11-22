var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.NewId = id;
        this.name = name;
    }
    Employee.prototype.displayEmp = function () {
        // console.log("emp id"+this.id);
        console.log("emp name::" + this.name);
    };
    return Employee;
}());
var myEmp = new Employee("Id123", "Sampriti");
myEmp.displayEmp();
var ASE = /** @class */ (function (_super) {
    __extends(ASE, _super);
    function ASE(supervisorid, id, name) {
        var _this = _super.call(this, id, name) || this;
        _this.supervisorid = supervisorid;
        _this.supervisorid = supervisorid;
        return _this;
    }
    ASE.prototype.displaySupervisor = function () {
        console.log("Supervisot emp id" + this.supervisorid);
    };
    return ASE;
}(Employee));
var aseDetail = new ASE("Vijay", "333", "Ase123");
aseDetail.displaySupervisor();
aseDetail.displayEmp();
ASE.id = "444";
console.log("ASE ID:::::", ASE.id);
ASE.id = "555";
console.log("ASE nkdkd");
console.log("ASE ID:::::", ASE.id);
