
    // Major Scale: R, W, W, H, W, W, W, H
    // Natural Minor Scale: R, W, H, W, W, H, W, W
    // Harmonic Minor Scale: R, W, H, W, W, H, 1 1/2, H   (notice the step and a half)
    // Melodic Minor Scale: going up is: R, W, H, W, W, W, W, H
    // going down is: R, W, W, H, W, W, H, W
    // Dorian Mode is: R, W, H, W, W, W, H, W
    // Mixolydian Mode is: R, W, W, H, W, W, H, W
    // Ahava Raba Mode is: R, H, 1 1/2, H, W, H, W, W
    // A minor pentatonic blues scale (no sharped 5) is: R, 1 1/2, W, W, 1 1/2, W
    // A A# B C C# D D# E F F# G G# A


const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#','E','F','F#','G','G#']

const scalesInSteps = [
        {
            name: 'Major',
            steps: ['R', 'W', 'W', 'H', 'W', 'W', 'W']    
    
        },
        {
            name: 'Harmonic Minor',
            steps: ['R', 'W', 'H', 'W', 'W', 'H', '1.5']
        },
        {
            name: 'Minor Pentatonic',
            steps: ['R', '1.5', 'W', 'W', '1.5']
        },
        {
            name: 'Ahava Raba',
            steps: ['R', 'H', '1.5', 'H', 'W', 'H', 'W']
        }
        
]

const scaleNames = []
for (const prop in scalesInSteps) {
    scaleNames.push(scalesInSteps[prop].name)
}

const getNote = (startIndex, index) => {
        if (startIndex + index >= notes.length) {
            startIndex = Math.abs(((notes.length) - startIndex - index))
            return notes[startIndex]
        }

        return notes[startIndex + index]
    }

const intStepsToNotes = (scale, root) => {
    let convertedScale = []
    let startIndex = notes.indexOf(root)
    let newNote = root
    for (let item of scale) {
        newNote = getNote(startIndex, parseInt(item))
        convertedScale.push(getNote(startIndex, parseInt(item)))
        startIndex = notes.indexOf(newNote)
    }

    return convertedScale
}
    

const stepsToInt = (scale) => {
    let scaleInInts = []
    for (let item of scale) {
        switch (item) {
            case 'R':
                scaleInInts.push('0')
                break
            case 'W':
                scaleInInts.push('2')
                break
            case 'H':
                scaleInInts.push('1')
                break
            case '1.5':
                scaleInInts.push('3')
                break
        }
    }
    return scaleInInts
}

const getScalesNotes = (root, scaleName) => {
    if (root.length === 0 || scaleName.length === 0) return []
    let scale = scalesInSteps.filter(obj => obj.name === scaleName)
    console.log('scale: ', scale)
    const convSteps = stepsToInt(scale[0].steps)
    return intStepsToNotes(convSteps, root)
}

export { scaleNames, getScalesNotes }