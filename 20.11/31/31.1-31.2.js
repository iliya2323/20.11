class User {
	setName(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}

class Employe extends User {
	setSalary(salary) {
		this.salary = salary;
	}
	getSalary() {
		return this.salary;
	}
	setYear(year) {
		if(year > 18 && year < 65){
		  this.year = year;
		}else{
		  throw new Error('employe year error');
		}
	}
	getYear() {
		return this.year;
	}
}

let employe = new Employe;

employe.setName('john');
employe.setSalary(3400);
employe.setYear(19);

let name = employe.getName();
let salary = employe.getSalary();
let year = employe.getYear();

console.log(name);
console.log(salary);
console.log(year);