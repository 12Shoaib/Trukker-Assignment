let driversDetails = []  //Seeding data

const mandatoryField = ["f-name","m-name","l-name","m-number","nationality",
"country-o-b","city-o-b","card-name","street","country","city-town","z-code"]

//"select-country" , "gender"

function submitDetails(event){
    event.preventDefault()
    validateAge()
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
       fNameArabic: "قبول کرنے وال",
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
       cardNo : "**** **** **** "+Math.floor(Math.random()*10000),
       status : "IN-PROCESS",
       eye: "eye"
    }

    if(validateInputFields()){
        const data = JSON.parse(localStorage.getItem("DriverDetails"))
        driversDetails = [ newDriverData  , ...driversDetails , ] 
        localStorage.setItem("DriverDetails", JSON.stringify(driversDetails))
        alert("Congratulations you have been added")
    }
    else{
        for(let i=0 ; i<mandatoryField.length; i++){
            const currentInputField = document.getElementById(mandatoryField[i])
            const inputCapture = currentInputField.value    
    
            if(inputCapture === ""){
                currentInputField.classList.add('alert')
                emptyFields = true
            }else{
                currentInputField.classList.remove('alert')
            }   
        }
    }
}   
const validateInputFields = () => {
     
     for(let i=0 ; i<mandatoryField.length; i++){
        const currentInputField = document.getElementById(mandatoryField[i])
        const inputCapture = currentInputField.value    
        if(inputCapture === ""){
            return false
        }else{
            return true
        }
     }

}

const validateAge = () => {
    let dateOfBirth = new Date(document.getElementById("dob").value)
    let presentDate = new Date

    let presentAge =   presentDate.getFullYear() - dateOfBirth.getFullYear()

    if(presentAge <= 18 ){
        alert("Your age is less than 18")
    }

}
let globalCountry = document.getElementById("myDropdown")
let countryOfBirth = document.getElementById("country-o-b")
let cityOfBirth = document.getElementById("city-o-b")
let presentCountry = document.getElementById("Present-country")
let presentCountryCity = document.getElementById("town")
let api = 'https://api.countrystatecity.in/v1/countries'
let key = 'RGhzemVIZFQ2VWZWRGdUb2UwMUlBeW9MUEZyejd0dUwzaUhsYWExbQ=='


fetch(api, {headers: {'X-CSCAPI-KEY': key}})
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
        let getOption = document.createElement('option')
        getOption.value = country.iso2
        getOption.text = country.name
        globalCountry.appendChild(getOption) 

        let getOption1 = document.createElement('option')
        getOption1.value = country.iso2
        getOption1.text = country.name
        countryOfBirth.appendChild(getOption1)

        let getOption2 = document.createElement('option')
        getOption2.value = country.iso2
        getOption2.text  = country.name
        presentCountry.appendChild(getOption2)
    })
    })
  .catch(error => {
    console.log(error)
  })

const integratingCities = ( captured  , cityOfBirth  ) => {
    const api = `https://api.countrystatecity.in/v1/countries/${captured}/cities`
    console.log(captured)
    fetch(api , {headers: {'X-CSCAPI-KEY': key}})
    .then(response => response.json()
    )
    .then(data => { 
        data.forEach(cities => {
            const option  = document.createElement('option')
            option.value = cities.id
            option.text = cities.name
            cityOfBirth.appendChild(option)
        })
    })
    
}

countryOfBirth.addEventListener('change' , () => {
    const captured = countryOfBirth.value
    integratingCities(captured , cityOfBirth )
})


presentCountry.addEventListener('change' , () => {
    const captured = presentCountry.value
    integratingCities(captured , presentCountryCity )
})
