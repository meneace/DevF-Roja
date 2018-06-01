// Objetos JS
let person = {
    name: "Juan",
    last_name: "Mendez",
    phone: 333333333,
    married: false,
    address: {
        street: "lopez",
        number: "10101",
        cp: 45045
    },
    cards: [{
            numero: 293846583082,
            cvv: 111,
            mm: 03,
            yy: 21
        },
        {
            numero: 40920184058298,
            cvv: 222,
            mm: 09,
            yy: 28
        }
    ]
}
console.log(person.last_name)
console.log(person.address.street)
console.log(person.cards[1].numero)