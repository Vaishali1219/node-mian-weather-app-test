const messageOne = document.querySelector('#message-1');
messageOne.textContent = 'Form Javascript'

$("#search").click(function (e) {
    e.preventDefault()
    $("#message-1").val('Loading...')
    $("#message-2").val('')

    const location = $("#loc").val()
    fetch('/weather?location=' + location).then((response) => {
        response.json().then((data) => {
            console.log(data[0])
            if (data.error) {
                console.log(data.error)
            } else {
                $("#message-1").text(data[0].location)
                $("#temp").text(data[0].forecast.temp)
                $("#feels").text(data[0].forecast.feels_like)
                $("#min").text(data[0].forecast.temp_min)
                $("#max").text(data[0].forecast.temp_max)
                $("#pressure").text(data[0].forecast.pressure)
                $("#humidity").text(data[0].forecast.humidity)
                console.log(data[0].forecast.temp + " in " + data[0].location)
            }
        })
    })
    console.log(location)
})

//const weatherForm = document.querySelector('form')
//const search = document.querySelector('input')

//weatherForm.addEventListener('submit', (e) => {
//    e.preventDefault()

//    const location = search.value
//    console.log(location)
//})

