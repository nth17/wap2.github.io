$(function(){
   // $("#submit").on("click", validate);
   $("#submit").submit(validate);
});

function validate(){
    console.log("checking if it works");
    const seats = $("[name = Seats]");
    const noofseats = parseInt(seats.text());
    console.log(typeof  noofseats);
    if(noofseats> 0 && noofseats<200)
        console.log("succeeded");
        // console.log($(seats).text());
}
