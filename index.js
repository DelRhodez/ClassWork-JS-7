// Практическое задание 1:

//    class writeable {
//     constructor(color) {
//         this.color = color
//     }
//     write() {
//         console.log(`Я умею писать, мой цвет ${this.color}`)
//     }
//    }
//    let pen = new writeable("blue");
//    pen.write()

// class Rectangle {
// constructor (topleft, bottomright) {
//     if (topleft instanceof Array && bottomright instanceof Array) {
//             this.topleft = topleft;
//             this.bottomright = bottomright;
//         } else {
//             throw new Error ("Неверный формат")
//         }
//     }    
//     showInfo() {
//         console.log(
//             `
//             Левая верхняя точка: [${this.topleft.join(' ')}]
//             Правая верхняя точка: [${this.bottomright[0]} ${this.topleft[1]}]
//             Левая нижняя точка: [${this.topleft[0]} ${this.bottomright[1]}]
//             Правая нижняя точка: [${this.bottomright.join(' ')}]
//             `
//         )
//     }
// }
// let rect = new Rectangle([2,3], [8,9])
// console.log(rect.showInfo())

// Практическое задание 2:
class Rectangle {
constructor (topleft, bottomright) {
    if (topleft instanceof Array && bottomright instanceof Array) {
            this.topleft = topleft;
            this.bottomright = bottomright;
        } else {
            throw new Error ("Неверный формат")
        }
    }    
    showInfo() {
        console.log(
            `
            Левая верхняя точка: [${this.topleft.join(' ')}]
            Правая верхняя точка: [${this.bottomright[0]} ${this.topleft[1]}]
            Левая нижняя точка: [${this.topleft[0]} ${this.bottomright[1]}]
            Правая нижняя точка: [${this.bottomright.join(' ')}]
            `
        )
    }
    getWidth() {
        return this.bottomright[0] - this.topleft[0]    
    }
    getHeight() {
        return this.bottomright[1] - this.topleft[1]
    }
    get square() {
        return this.width * this.height
    }
    get perimeter() {
        return (this.width + this.height) * 2
    }
    changeWight(n) {
        this.bottomright = [this.bottomright[0] + n, this.bottomright[1]]
    }
}
let rect = new Rectangle([2,3], [8,9])
console.log(rect.showInfo())
