var sum = 0

function sumDurations(node) {
    var duration = node.firstChild.textContent
    sum += toMinutes(duration)
}

function toMinutes(value) {
    var m = 0
    var hours = value.match(/^(\d+) hours?$/)
    if(hours) {
        m = parseInt(hours[1]) * 60 
    }
    var minutes = value.match(/^(\d+) minutes?$/)
    if(minutes) {
        m = parseInt(minutes[1])
    }
    var hoursminutes = value.match(/^(\d+) hours?, (\d+) minutes?$/)
    if(hoursminutes) {
        m = parseInt(hoursminutes[1]) * 60 + parseInt(hoursminutes[2])
    }
//    console.log(value, m)
    return m
}

[].forEach.call(document.querySelectorAll('.worklog-duration'), sumDurations)

console.log('SUM: %d minutes', sum)
console.log('SUM: %d hours, %d minutes', Math.floor(sum / 60), sum % 60) 
console.log('SUM: %d days, %d hours, %d minutes', Math.floor(Math.floor(sum / 60) / 8), Math.floor(sum / 60) % 8, sum % 60) 
