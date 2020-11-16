(function () {
    // definition in time
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    // set timer
    let deadline = "Nov 18, 2020 00:00:00",
        countDown = new Date(deadline).getTime(),
        x = setInterval(function () {


            let now = new Date().getTime(),
                distance = countDown - now;

            let hours = Math.floor((distance % (day)) / (hour)),
                minutes = Math.floor((distance % (hour)) / (minute)),
                seconds = Math.floor((distance % (minute)) / second);

            // output
            document.getElementById("countdown").innerHTML = hours + " : " + minutes + " : " + seconds;

            // if expired
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "EXPIRED";
              }
        }, 0)
}());