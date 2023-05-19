export function getDateFormat(date) {
    const tempDay = new Date(date).getDate();
    const day = tempDay < 10 ? tempDay.toString().padStart(2,0) : tempDay;
    const tempMonth = new Date(date).getMonth() + 1;
    const month = tempMonth < 10 ? tempMonth.toString().padStart(2,0) : tempMonth;
    const year = new Date(date).getFullYear();
    return `${day}.${month}.${year}`
}

export function getDifference(date) {
    let age = '';
    const msInOneDay = 1000 * 60 * 60 * 24;
    const dateNow = new Date().getTime();
    const birthDate = new Date(date).getTime()
    const diffInTime = dateNow - birthDate;
    const diffInDays = diffInTime / msInOneDay;
    const inYears = diffInDays / 365;
    if(inYears < 1 || inYears > -1) {
        const months = Math.floor(diffInDays / 30.5);
        age = months > 1 ? `${months} months` : `${months} month`;
    }
    if(inYears >= 1 || inYears <= -1 || inYears === 0) {
        age = inYears > 1 ? `${Math.floor(inYears)} years` : `${Math.floor(inYears)} year`;

    }
        return age;
}