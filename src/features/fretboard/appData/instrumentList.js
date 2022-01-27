 const instruments = {
        'Guitar': {
            openStrings: ['E4', 'B3', 'G3', 'D3', 'A2', 'E2'],
            numStrings: 6,
        },
        'Ukulele': {
            openStrings: ['A4','E4','C3','G3'],
            numStrings: 4
        },
        'Violin': {
            openStrings: ['E3','A3','D2','G2'],
            numStrings: 4
        }
        
}

let instrumentsList = []
    for (const prop in instruments) {
        instrumentsList.push(prop)
    }
    
export {instruments, instrumentsList} 