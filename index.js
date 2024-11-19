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
};

const person2=person;
perso2.name ="Hakan";

console.log(person);

*/