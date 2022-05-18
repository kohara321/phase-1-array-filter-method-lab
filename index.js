function findMatching(drivers, sought) {
    return drivers.filter(
        match => match.toUpperCase() === sought.toUpperCase()
    )
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(
        match => match.toUpperCase().indexOf(string.toUpperCase()) === 0
    )
}

function matchName(drivers, name) {
    return drivers.filter(record => record.name === name)
}