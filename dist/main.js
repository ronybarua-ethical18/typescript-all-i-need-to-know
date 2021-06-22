var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var a = '1';
console.log('AA', a);
var hello = 'world';
// Typescript function
var getFullname = function (firstName, lastName) {
    return firstName + ' ' + lastName;
};
console.log(getFullname('Rony', 'Barua'));
// Typescript object 
var user1 = {
    name: 'rony',
    age: 13
};
var user3 = {
    name: 'rony',
    age: 30,
    getFullName: function () {
        return 'Hello' + name;
    }
};
console.log(user3.getFullName);
// Union in Typescript
var student = '1';
var profession = null;
var popularTags = ['JS', 'Node'];
var tech = '';
// void in Typescript 
var doSomething = function () {
    console.log("don't return anything");
};
var foo = undefined;
var foos = null;
// any in Typescript 
var checking = 'string';
checking = [];
// never in Typescript
var something = function () {
    throw new Error('Error');
};
// unknown in Typescript
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
// let s2:string = vUnknown
console.log(vAny.foo());
// console.log(vUnknown.foo())
// type assertion in Typescript
var s2 = vUnknown;
var pageNumber = '1';
var numericPageNumber = pageNumber;
// working with dom 
var someElement = document.getElementById('element');
console.log('some elements', someElement.value);
// adding EventListner 
var someElements = document.querySelector('.element');
someElements.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
// classes in Typescript with public / private and protected and also readonly
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.changeableName = function () {
        // this.firstName = 'Jack'
    };
    Student.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Student;
}());
var newStudent = new Student('Rony', 'Barua');
var Teacher = /** @class */ (function () {
    function Teacher(name) {
        this.name = name;
    }
    Teacher.prototype.getFullName = function () {
        return this.name;
    };
    return Teacher;
}());
console.log(Teacher);
// inheritance in Typescript
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    return Admin;
}(Teacher));
var newAdmin = new Admin('Rony');
console.log(newAdmin);
// generic in Typescript 
var addId = function (obj) {
    var id = Math.random().toString(15);
    return __assign(__assign({}, obj), { id: id });
};
var user = {
    name: 'Rony'
};
var result = addId(user);
console.log('result', user);
