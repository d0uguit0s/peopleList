/* 
Deixa a primeira letra de uma string em maiúsculo
Ex: exemplo -> Exemplo
*/

const capitalizeFirstLetter = string => string[0].toUpperCase() + string.slice(1)

export default capitalizeFirstLetter;