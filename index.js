// write your code below!
//Happy Coding Day
var hh = "Happy holidays"
const special = ("Easter" , "New Year" , "Labor Day") 
var md  = "Mother\'s Day";

function happyHolidays ()  {
  return ("Happy holidays!");
}

function happyHolidaysTo (namen) {
  console.log("Second Function!")
  return( 'Happy holidays, ' + namen + '!' ) ;
}

function happyHolidayTo (theDay , namen) {
  return  ("Happy " + theDay + "\, "  + namen + "!" ) 
}

function holidayCountdown (theDay ,  daysTill) {
  return  ("It\'s " +  daysTill + " days until " + theDay +"!" ) 
}


/*for (i = 0; i < special.length; i++) { */
  console.log( happyHolidays()) ;
  console.log(happyHolidaysTo( "James"));
  console.log(happyHolidayTo("James" , special[2]));
  console.log(holidayCountdown(md , 25));
  
  console.log( happyHolidays()) ;
  console.log( happyHolidaysTo( "James"));
  console.log( happyHolidayTo(md ,"James"));
  console.log( holidayCountdown(md , 25));
  
   happyHolidays() ;
   happyHolidaysTo( "James");
  happyHolidaysTo(md ,"James");
  holidayCountdown(md , 25);
  