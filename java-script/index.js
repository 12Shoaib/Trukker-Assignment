const navigate = () => {
    location.href = "driver-onboarding.html"
}

const getDataFromLocal = () => {
    const data = JSON.parse(localStorage.getItem("DriverDetails"))
    const appendingDiv = document.getElementById('myDiv');
    let emitingData = ""
    for (let i = 0; i < data.length; i++) {
        emitingData += `<table class="table">
        <tr>
            <td> ${data[i].status}</td>
            <td> ${data[i].moxeyId}</td>
            <td>${data[i].transporter}</td>
            <td> ${data[i].firstName}</td>
            <td> ${data[i].fNameArabic}</td>
            <td> ${data[i].mobileNumber}</td>
            <td> ${data[i].customerId}</td>
            <td> ${data[i].cardNo}</td>
            <td> ${data[i].eye}</td>
        </tr>
        </table>`
    }
    appendingDiv.innerHTML = emitingData
    inProcess()
}
setTimeout(getDataFromLocal, 1000)

const inProcess = () => {
    const data = JSON.parse(localStorage.getItem("DriverDetails"))
    const tag = document.getElementById("c-i-p")
    tag.innerHTML = data.length
}

