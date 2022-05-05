const getSleepHours = (day) => {
    let hours = 0;
    switch (day) {
        case 'Monday':
            hours += 8;
            break;
        case 'Tuesday':
            hours += 8;
            break;
        case 'Wednesday':
            hours += 8;
            break;
        case 'Thurday':
            hours += 8;
            break;
        case 'Friday':
            hours += 8;
            break;
        case 'Saturday':
            hours += 8;
            break;
        default:
            hours += 8;
    }
    return hours;
}

const getActualSleepHours = () => {
    6 + 7 + 8 + 9 + 10 + 11;
};

const getIdealSleepHours = (idealHours) => {
    idealHours * 7;
};

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
    actualSleepHours === idealSleepHours 
    ? console.log(`You got the perfect amount of sleep!`) 
    : actualSleepHours > idealSleepHours 
    ? console.log(`You got more sleep than needed!`)
    : console.log(`You should get some rest!`)
}

calculateSleepDebt();