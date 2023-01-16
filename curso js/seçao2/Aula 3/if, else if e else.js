const hora = 50

if (hora < 12) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if( hora >= 18 && hora <= 23) {
    console.log('boa noite');
} else {
    console.log('invalid')
}