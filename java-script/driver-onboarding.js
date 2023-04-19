let driversDetails = []  //Seeding data

function submitDetails(event){
    event.preventDefault()
    let firstName = document.getElementById("f-name")
    let middleName = document.getElementById("m-name")
    let lastName = document.getElementById("l-name")
    let gender = document.getElementById("gender")
    let fNameArabic = document.getElementById("arabic-f-name")
    let mNameArabic = document.getElementById("arabic-m-name")
    let lNameArabic = document.getElementById("arabic-l-name")
    let dateOfBirth = document.getElementById("dob")
    let mobileNumber = document.getElementById("m-number")
    let nationality = document.getElementById("nationality")
    let countryBirth = document.getElementById("country-o-b")
    let cityBirth = document.getElementById("city-o-b")
    let nameCard = document.getElementById("card-name")
    let streetName = document.getElementById("street")
    let country = document.getElementById("country")
    let city = document.getElementById("city-town")
    let zipCode = document.getElementById("z-code")

    const newDriverData = {
       firstName: firstName.value,
       middleName: middleName.value ,
       lastName : lastName.value,
       gender: gender.value,
       fNameArabic: fNameArabic.value,
       mNameArabic: mNameArabic.value,
       lNameArabic: lNameArabic.value,
       dateOfBirth: dateOfBirth.value,
       mobileNumber: mobileNumber.value,
       nationality: nationality.value,
       countryBirth: countryBirth.value,
       cityBirth: cityBirth.value,
       nameCard: nameCard.value,
       streetName: streetName.value,
       country: country.value,
       city : city.value , 
       zipCode : zipCode.value,
       moxeyId : "MXUAE-DR"+Math.floor(Math.random()*10000000),
       transporter : 'Trukker',
       customerId : "ARB"+ Math.floor(Math.random()*10000000),
       cardNo : "**** **** **** "+Math.floor(Math.random()*10000)
    }
    console.log(newDriverData)
    driversDetails = [ newDriverData  , ...driversDetails ]
    localStorage.setItem("DriverDetails", JSON.stringify(driversDetails))
}

