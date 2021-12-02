import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"



function CountriesList() {

    const [countries, setCountries] = useState()

    useEffect(() => {

        async function getData() {
            let response = await axios.get("https://restcountries.com/v3.1/all")
            console.log(response)
            setCountries(response.data)
        }
            
    }, [])


    return (
        <div className="col-5" style={{"maxHeight": "90vh", "overflow": "scroll"}}>
            <div className="list-group">
              {/* {
                  countries.map((ele) => {
                    return(
                        <a className="list-group-item list-group-item-action" href={`/${ele.cioc}`}>
                            <img src={ele.coatOfArms.svg} />
                            <p>{ele.name.common}</p>
                        </a>
                    )
                  })
              } */}
              
              
              <a className="list-group-item list-group-item-action" href="/ABW">
                <img src="https://www.countryflags.io/AW/flat/32.png" />
                <p>Aruba</p>
              </a>
            </div>
          </div>
    )
}

export default CountriesList