const wcc = require('world-countries-capitals')

const students = [
    'Nate', 'Izzy', 'Kash', 'Imy', 'Nick', 'Sobia', 'Toby', 'Maria'
]

function scrumVolunteerPicker(students) {
    let num = Math.floor(Math.random() * students.length)
    return students[num]
}

function shuffleArray(students) {
    let unShuffledStudents = students.length, indexToShuffle, temp
    while (unShuffledStudents) {
        indexToShuffle = Math.floor(Math.random() * unShuffledStudents--)
        temp = students[unShuffledStudents]
        students[unShuffledStudents] = students[indexToShuffle]
        students[indexToShuffle] = temp
    }
    return students
}

function splitArrayIntoPairs(array) {
    let result = []
    for (;array.length / 2;) {
        result.push(students.splice(0, 2))
    }
    return result
}

function studentPairPicker(array) {
    let shuffled = shuffleArray(array)
    return splitArrayIntoPairs(shuffled)
}

function getBreakoutNames(num = 8) {
    let result = [], rand

    for (let i = num;i; i--) {
        let name = wcc.getRandomCountry()
        name = name[0].toUpperCase() + name.slice(1)
        result.push(name)
    }
    rand = Math.floor(Math.random() * num)
    console.log(rand)
    if (rand > Math.round(num / 10)) {
        result[rand] = (rand % 2) ? "Nuneaton" : "Melksham"
    }
    return result
}

// console.log(scrumVolunteerPicker(students))
console.log(getBreakoutNames(14))