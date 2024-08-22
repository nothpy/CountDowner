const endDate = "21 october 2024 06:18:00 AM" 
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
    // const clock = () => {

// }

function clock() {
    const end = new Date(endDate)
    console.log(end);
    const now = new Date()
    console.log(now)
    const diff = (end - now) /1000;
    console.log(diff)

    if (diff < 0)
    {
        document.getElementById("t").style.backgroundColor="red";   
        return;
    } 

    // convert into days;
    inputs[0].value = Math.floor((diff / 3600 )/ 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

// initial call
// clock();

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

// setInterval(
//     () => {
//         clock()
//     },
//     1000
// )
setInterval(clock,1000)
setTimeout(clock,3000)