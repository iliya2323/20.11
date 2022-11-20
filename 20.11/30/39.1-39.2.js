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
}

let employe = new Employe;

employe.setName('john');
employe.setSalary(3400);

let name = employe.getName();
let salary = employe.getSalary();

console.log(name);
console.log(salary);