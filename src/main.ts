const a = '1';
console.log('AA', a)

const hello: string = 'world'

// Typescript function
const getFullname = (firstName:string, lastName:string): string => {
    return firstName + ' ' + lastName
}
console.log(getFullname('Rony', 'Barua'))

// Typescript object 
const user1: {name: string, age:number} ={
    name: 'rony',
    age: 13
}
// interface in Typescript
interface User{
    name:string,
    age: number,
    color?: string, 
    getFullName():string
}

const user3:User ={
    name: 'rony',
    age:30,
    getFullName(){
        return 'Hello' + name
    }
}
console.log(user3.getFullName)

// Union in Typescript
let student: string | number = '1'
let profession: string | null = null

// type in Typescript
type PopularTags = string

const popularTags: PopularTags[] = ['JS', 'Node']

// type and union 
type Technologies = string
type PopularTech = Technologies | null

const tech: PopularTech = ''

// void in Typescript 
const doSomething = ():void => {
    console.log("don't return anything")
}
let foo:void = undefined
let foos:void = null

// any in Typescript 
let checking: any = 'string'
checking = []

// never in Typescript
const something = ():never =>{
    throw new Error('Error')
}

// unknown in Typescript
const vAny: any = 10
const vUnknown:unknown = 10

let s1:string = vAny
// let s2:string = vUnknown

console.log(vAny.foo())
// console.log(vUnknown.foo())

// type assertion in Typescript
let s2:string = vUnknown as string

let pageNumber:string = '1'
let numericPageNumber = (pageNumber as unknown) as number  

// working with dom 
const someElement = document.getElementById('element') as HTMLInputElement
console.log('some elements', someElement.value)

// adding EventListner 
const someElements = document.querySelector('.element') as HTMLInputElement
someElements.addEventListener('blur', (event) =>{
    const target = event.target as HTMLInputElement
    console.log('event', target.value)
})

// classes in Typescript with public / private and protected and also readonly
class Student{
    readonly firstName:string 
    private lastName:string
    constructor(firstName: string, lastName:string){
        this.firstName = firstName
        this.lastName = lastName
    }
    changeableName(){
        // this.firstName = 'Jack'
    }
    getFullName(){
        return this.firstName + ' ' + this.lastName
    }
}

const newStudent = new Student('Rony', 'Barua')

// implements with interfaces 
interface TeacherInterface {
    getFullName():string
}

class Teacher implements TeacherInterface{
    name:string
    static readonly age:string
    constructor(name:string){
        this.name = name
    }
    getFullName(){
        return this.name
    } 
}
console.log(Teacher)

// inheritance in Typescript
class Admin extends Teacher {
    editor:string
    setEditor(editor:string):void {
        this.editor = editor
    }
}
const newAdmin = new Admin('Rony')
console.log(newAdmin)

// generic in Typescript 
const addId = <T extends object>(obj: T) =>{
    const id = Math.random().toString(15)
    return{
        ...obj,
        id
    }
}
interface Users{
    name:string
}
const user: Users = {
    name: 'Rony'
}
const result = addId(user)
console.log('result', user)

// generic with interface

interface TeachingInterface <T, V>{
    name:string
    data:T,
    meta: V
}
const users:TeachingInterface<{meta: string}, string> = {
    name: 'Jack',
    data:{
        meta: 'foo'
    },
    meta: 'bar'
}

const latestUser:TeachingInterface<string[], number> = {
    name: 'kalam',
    data: ['rony', 'jeebon', 'jewell'],
    meta: 45
}
const newTeaching = addId(users)

// Ramda in Typescript
// const searchStr = 'foo'
// const hasSearchedString = any<string>((el:string) => el.includes(searchStr), [
//     'foooo',
//     'bar',
//     'baz'
// ])

// enums with Typescript 
enum StatusEnum{
    NotStarted = 'notStarted',
    InProgress = 'InProgress',
    Done = 'done'
}

// enums with interface 
interface enumsWithInterface{
    name: string,
    data: StatusEnum
}