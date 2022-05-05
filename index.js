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
    return (
        getSleepHours("Monday") +
        getSleepHours("Tuesday") +
        getSleepHours("Wednesday") +
        getSleepHours("Thursday") +
        getSleepHours("Friday") +
        getSleepHours("Saturday") +
        getSleepHours("Sunday")
    );
};

const getIdealSleepHours = () => {
    idealHours = 6;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    actualSleepHours === idealSleepHours 
    ? console.log(`You got the perfect amount of sleep!`) 
    : actualSleepHours > idealSleepHours 
    ? console.log(`You got more sleep than needed!`)
    : console.log(`You should get some rest!`)
}

calculateSleepDebt();