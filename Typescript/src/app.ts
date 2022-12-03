/** *
const a = "firstname"
const n = 3
const b = true
const d = null
const arr = ['aze','aze', 'aze']
const user = {firstname:"Alexandre", lastname:"Abbes"}
const date = new Date();
const cb: (e: MouseEvent) => void = (e:MouseEvent): number => {
    return 3
}
const compteur = document.querySelector('#compteur') as HTMLButtonElement
function printId(id: number | string): void{
    console.log(id.toString());
}
*/

const compteur = document.querySelector('#compteur')

let i = 0;

const increment = (e: Event) => {
    i++;
    const span = compteur?.querySelector('span')
    if (span){
        span.innerText = i.toString();
    }
}
function printId(id: number | string){
    if (typeof id == "number" ){
        console.log((id * 3).toString());
    }else{
        console.log(id.toUpperCase())
    }
}

compteur?.addEventListener('click', increment)