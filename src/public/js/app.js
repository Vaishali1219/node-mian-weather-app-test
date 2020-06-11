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
                $("#message-2").text(data[0].forecast)
                console.log(data[0].forecast + " in " + data[0].location)
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

