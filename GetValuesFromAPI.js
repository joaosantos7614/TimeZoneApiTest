document.getElementById('button1').onclick = function() {
    var timezone = document.getElementById("input_box1").value;
    if(timezone == "") timezone=0;
    var UrlAPI = `https://personal-0kioaskk.outsystemscloud.com/ZZtestPage/rest/SimpleTime_API/TimeZone_API?TimeZone=${timezone}`;
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()
    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', UrlAPI, true)
    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        API_TimeZone=data.TimeZone;
        API_Time=data.Time;
        API_Date=data.Date;
        document.getElementById("output_p").innerHTML=`For the GMT${API_TimeZone} timezone, the time is ${API_Time} and the date is ${API_Date}`
    }
    // Send request
    request.send()
    //alert(API_TimeZone+" "+API_Time+" "+API_Date);
    //document.getElementById("output_p").innerHTML=`For the GMT${API_TimeZone} timezone, the time is ${API_Time} and the date is ${API_Date}`
}

