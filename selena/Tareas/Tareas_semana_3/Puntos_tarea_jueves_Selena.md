/** gatos color negro */
let response = cats.filter(cat => {
    return cat.color == 'Black-White'
})
console.log (response)
/** gatos mayores a 5 años */

let response = cats.filter(cat => {
    return cat.age > 5
})
console.log (response )

/** gatos menores a 5 años**/ 

let response = cats.filter(cat => {
    return cat.age < 5
})
console.log (response )