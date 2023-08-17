console.log('\nSeção 6 - namespaces\n')

// namespace Geometria {
//     export namespace Area {

//         const PI: number = 3.14

//         export function areaCircunferencia(raio: number): number {

//             return PI * Math.pow(raio, 2)
//         }

//         export function areaRetangulo(base: number, altura: number): number {

//             return base * altura
//         }

//     }
// }

///<reference path='geometriaCirc.ts'/>
///<reference path='geometriaRect.ts'/>

// const PI = 2.99
// console.log(PI)
console.log(Geometria.Area.areaCircunferencia(10))
console.log(Geometria.Area.areaRetangulo(10, 5))


console.log('\nFim da seção 6 - namespaces\n')