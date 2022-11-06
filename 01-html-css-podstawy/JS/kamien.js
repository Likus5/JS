console.log('Hello World');
const choice1 = prompt('Kamien, Nozyce czy Papier?');
const choice2 = prompt('Kamien, Nozyce czy Papier?');


if(choice1 === 'Kamien' && choice2 === 'Nozyce' || choice1 === 'Nozyce' && choice2 === 'Papier' || choice1 === 'Papier' && choice2 ==='Kamien' ) {
    console.log('Wygral gracz1')
} 
if(choice1 === 'Nozyce' && choice2 === 'Kamien' || choice1 === 'Papier' && choice2 === 'Nozyce' || choice1 === 'Kamien' && choice2 === 'Papier') {
    console.log('Wygral gracz2')
} 
if(choice1 === choice2) {
    console.log('remis')
}