let stacks = parseInt(prompt('pick a number 1-8'))
    if (stacks >= 1 && stacks <= 8) {
        console.log ('#')
        if (stacks > 1) {console.log ('##')};
        if (stacks > 2) {console.log ('###')};
        if (stacks > 3) {console.log ('####')};
        if (stacks > 4) {console.log ('#####')};
        if (stacks > 5) {console.log ('######')};
        if (stacks > 6) {console.log ('#######')};
        if (stacks > 7) {console.log ('########')};
    } else {
        alert('number is out of range')
    }