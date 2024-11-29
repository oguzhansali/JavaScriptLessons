//let const var
/*
var personName = "Oğuzhan"

personName = "Mete"

console.log(personName)
*/


//                                        BLOCK SCOPE
//let ve const blok içinde tanımlanarak kullanılabilir.
//Blok içinde const ile tanımlanmış değişkenler o blok içinde kullanılabilir ama içten
// dışa aynı değişkenler varsa o değişkeni bulana kadar üst blokları okuyabilir. 
/*
{
    const personName3 = "Ahmet"
        {
            const personName2 ="Oguz"

            {
                const personName1 =  "Mete"       
                console.log(personName3)//Ahmet
            }

        }

}
        */

// Block Scope da var kullanımı ile üst scopetaki değişkenleri ezebiliyor.
/*
{
    var personName = "Ahmet"
    {
        var personName="Oguz"
        console.log(personName)
        {

        }
    }
    console.log(personName)//Oguz Oguz Çıktısı
}
    */

//Eğer değişken fonksiyon dışındaysa sadece fonksiyon içindeki değişkenler çağrılabilri.
/*
var personName ="Mehmet";
function main(){
    var personName = "Ahmet";
    {
        var personName = "Hakan";
        console.log(personName)
        {

        }

    }
    console.log(personName)
}
main();// Hakan Hakan çıktısı gelir blok için var diğerlerini ezdiği için.
console.log(personName);//fonksiyon dılından çağırcağı için
fonksiyon dışındaki personName'Yi çğırır. Mehmet.
*/


/*
const $ = (function jQuery(){
    var size = 800;
    function ajax(){
        console.log("ajax")
    }

    return{
        size:size,
        ajax:ajax
    }
})()

$.ajax();
*/

//                                     Veri Tipi
/*
const personName = "Oguz";
const personAge=25;
const isOverAge = true;

console.log(typeof personName);
console.log(typeof personAge);
console.log( typeof isOverAge);
*/


/*
const person = {
    name:"oguz",
    age:24,
    isOverAge:true,
    notes: ["notes1","notes2"],
    notesObj :{
        0:"note1",
        1:"note2",
        length:2,
    },
};

//const person2=person;

//perso2.name ="Hakan";

console.log(Array.isArray(person.notes));
console.log(Array.isArray(person.notesObj));
*/

//                            FONCTIONS
// Bunların üçüde fonksiyon tanımıdır.

/*
function f1(arg1,arg2){
    console.log('f1',arg1,arg2);

}

const f2 = function(arg1, arg2){
    console.log('f2',arg1,arg2);
}

const f3 = (arg1,arg2) => {
    console.log('f3',arg1,arg2);
}
*/

/*
f1(1,2);
f2(3,4);
f3(5,6);
*/

//JavaScriptte setleme işlemi yapılırken set edilen kuyruga atılır ve
//diğer işlemleri yapmak üzere diğere satırlara geçer.
//------------------------------------------------------------------------------//


/*
console.log("İlk siradaki işlem");
setTimeout(()=> {
    console.log("İkinci siradaki işlem");
},3000);
console.log("Uçüncü siradaki islem");
*/

//Bu işlem yapılırken 1. console log yazdırılır setTimeout sıraya sokulur ve diğer console loga atlaryarak
//onu yazdırdıktan sonra set işlemi yaptırılır.

//                         async functions
//Burada bir önceki fonksiyondaki gibi setleme işlemini beklemesinin sebebi
//bir önceki set gibi belirsizliğin olmamamısıdır. Bu durumda Promise ile set işleminin verilen süre
//içinde çalışacağı garanti edilmiş. 
/*
async function main() {
    console.log("ilk siradaki islem");
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("İkinci siradaki islem");
            resolve();
        },2000);
    })
    console.log("Ucüncü siradaki islem");
};

main();
*/

//Buradaki islemde setleme işlemi ayrı bir fonksiyonda verildi ve main fonksiyonda çağrıldı.
/*
const wait =(ms)=>{
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve();
        },ms);
    });
};

async function main() {
    console.log("ilk siradaki islem");
    await wait(2000);
    console.log("İkinci siradaki islem");
    await wait(2000);
    console.log("Ucüncü siradaki islem")    
}
main();
*/

//--------------------------------------------//
// İf Döngüsü
/*
const isOverAge = (person) => {
    return person.age > 18;
}

const person = {
    name : "Oguzhan Sali",
    age : 25,
    location: "TR",
};


if(isOverAge(person)){
    console.log("Hello World");
}
*/

//-------------------------------------------------------//
//While Döngüsü
/*
const wait = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve();
        },ms);
    });
};

async function main() {
    let i = 0;
    while (i<10){
        console.log("Oğuzhan");
        i = i + 1;
        await wait(2000);
    }
    
}

main();
*/

//-----------------------------------------------------------------//
//For Döngüsü
/*
const wait = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve();
        },ms);
    });
};

async function main() {
    for(let i = 0; i<5; i++){
        console.log("Oğuzhan",i);
        await wait(500);
    }
    
}

main();

*/

//-----------------------------------------------------------------//
// assign operation
/*
const a = 5;
const b = 10;
let j = 0;
let i = 0;
let k =(i = a + b);
console.log(k);
*/

// less than
// greater than 
//less than or equal to
// greater than or equal to

/*
let j = 10;
let k = 15;
console.log(j<k);
*/

/*
//increase by 1
//decrease by 1

let i = 0;
console.log(i);
console.log(++i);
console.log(i++);
console.log(i);
*/

// concat + 
// concat da 2 farklı türde veriyi birbirine type dönüştürür.
/*
console.log("hakan" + 5);

console.log("5" + 5);

console.log("5" - 5); // difference işlemi yapıyor

console.log(null - 5);// null değerini 0 alıyor.

console.log(undefined - 5);
console.log(!(false === Boolean(null)));
*/

const person = {
    name:"Oguz",
    age : 25,
    isMarried : false,
    children : ["Anna",  "Peter"],
    job: {
        title:"Frontend",
        company: {
            name:"Google",
            ceo:{
                name:"Sundar",
                ager:50,
                isMarried: true,
            },
        },
    },
};

//spread ile artık person özellklerinde yeni personlar yaratabiliyoruz.
const person2 = {...person,job: {...person.job,company:{...person.job.company,ceo:{...person.job.company.ceo}}}};//Artık oluşturulan yeni bir person bu özelliklere sahip.
/*const person2= {
    name : person.name,
    age: person.age,
    isMarried: person.isMarried,
    children: person.children,
    job:{
        title.person.job.title,,
        company:{
            name: person.job.company.name,
            ceo: person.job.company.ceo,
        },
    },
}*/

//StructuredClone birşeylerin yapısını kopyalamış oluyoruz.
const perso2 = structuredClone(person);


person2.name = "Bob",
person2.job = "Backend",
//person2.job.company.name = "Facebook",



console.log(person);

