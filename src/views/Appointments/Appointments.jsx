import React, { useContext, useEffect, useState } from 'react'
import {CInput} from "../../components/CInput/CInput"
import {CSelect} from "../../components/CSelect/CSelect"
import { createAppointment } from '../../services/apiCalls'
import { SampleContext } from '../../contexts/SampleContext/SampleContext'

export const Appointments = () => {

    const [Appointments, setAppointments] = useState([])
    const [newAppointment, setNewAppointment] = useState({
        service_id: "",
        appointment_date: ""
    })

    useEffect(() => {
        // getMyAppointments(token)
        console.log(newAppointment);
    }, [newAppointment])

    const inputHandler = (e) => {
        if (e.target.value === "Elige el servicio") {
            console.log("You cannot pass")
            return
        }
        console.log(e.target.value)
        setNewAppointment({
          ...newAppointment,
          [e.target.name]: e.target.value,
        });
      };

    const handleSendAppointment = async () => {
        try {
            const response = await createAppointment(newAppointment, token)
            if(response.success){
                console.log(response);
            }
        } catch (error) {
            console.log();
        }
    }

    const services = [{id: 1, service_name: "Tattoo"}, {id: 2, service_name: "Piercing"}]

    const todayString = new Date()
    .toISOString()
    .slice(0,new Date().toISOString().lastIndexOf(":"))

    const secretNumber = useContext(SampleContext)

  return (
    <div>
        <input 
        type="datetime-local" 
        min={todayString} 
        value={newAppointment.date} 
        name="date" 
        onChange={(e) => inputHandler(e)}
        />
        <h1>{secretNumber}</h1>
     <CSelect
      category="Choose Service"
      options={services}
      handler={inputHandler}
      />
      <CInput type='button' 
      value="Create"
       clickFunction={handleSendAppointment}></CInput>
    </div>
  )
}
