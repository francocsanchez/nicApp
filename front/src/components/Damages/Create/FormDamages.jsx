import { useState, useEffect } from "react";

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const FormDamages = ({ arrDamage, setArrDamage }) => {

  let navigate = useNavigate();

  const [sectorDamage, setSectorDamage] = useState([]);
  const [damageCode, setDamageCode] = useState([]);
  const [severityCode, setSeverityCode] = useState([]);
  const [damageDetails, setDamageDetails] = useState([]);
  const [typeDamage, setTypeDamage] = useState([]);

  const [sendForm, setSendForm] = useState(true);
  const [arrValidator, setArrValidator] = useState({
    statusDetails: true,
    statusDamageCode: true,
    statusSeverityCode: true,
    statusBtn: true
  })

  const getSectorDamage = async () => {
    const data = await axios.get(`/api/sector-damage`);
    setSectorDamage(data.data.data)
  }

  const getSeverityCode = async () => {
    const data = await axios.get(`/api/severity-code`);
    setSeverityCode(data.data.data)
  }

  const getDamageCode = async () => {
    const data = await axios.get(`/api/damage-code`);
    setDamageCode(data.data.data)
  }

  const getTypeDamage = async () => {
    const data = await axios.get(`/api/damage-type`);
    setTypeDamage(data.data.data)
  }

  const changeSectorDamage = async e => {
    const sectorDamageid = e.target.value
    const data = await axios.get(`/api/damage-details/sector/${sectorDamageid}`);
    setDamageDetails(data.data.data)

    setArrValidator({
      statusDetails: false,
      statusDamageCode: true,
      statusSeverityCode: true,
      statusBtn: true
    })
  }

  const changeDamageDetails = () => {
    setArrValidator({
      statusDetails: false,
      statusDamageCode: false,
      statusSeverityCode: true,
      statusBtn: true
    })
  }

  const changeDamageCode = () => {
    setArrValidator({
      statusDetails: false,
      statusDamageCode: false,
      statusSeverityCode: false,
      statusBtn: true
    })
  }

  const changeSeverityCode = () => {
    setArrValidator({
      statusDetails: false,
      statusDamageCode: false,
      statusSeverityCode: false,
      statusBtn: false
    })
  }

  const changeSendForm = () => {
    setSendForm(false)
  }

  const addDamage = e => {
    e.preventDefault()

    const arr = {
      'sectorDamage': e.target.sectorDamages.value,
      'damageDetails': e.target.damageDetails.value,
      'damageCode': e.target.damageCodes.value,
      'severityCode': e.target.severityCode.value,
    }

    setArrDamage([
      ...arrDamage,
      arr
    ])

    e.target.sectorDamages.value = '';
    e.target.damageDetails.value = '';
    e.target.damageCodes.value = '';
    e.target.severityCode.value = '';

    setArrValidator({
      statusDetails: true,
      statusDamageCode: true,
      statusSeverityCode: true,
      statusBtn: true
    })
  }

  const enableCar = e => {
    return !arrDamage.length ? true : false
  }

  const createDamage = async e => {

    e.preventDefault();

    const car = {
      vin: e.target.vin.value,
      typeDamage: e.target.typeDamage.value,
      arrDamage
    }

    await axios.post(`/api/damages/`, car)
      .then(res => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.data.msg,
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 1300,
          toast: true
        })

        navigate('/damages', { replace: true });

      }).catch(error => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.response.data.errors.vin.msg,
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          toast: true
        })
      });
  }

  useEffect(() => {
    getSectorDamage();
    getDamageCode();
    getSeverityCode();
    getTypeDamage();
  }, [])

  return (
    <div className="col-md-7 col-lg-8">
      <h4 className="mb-3">INFORMACION</h4>
      <form className="mb-3" onSubmit={addDamage}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Sector de daño</label>
            <select className="form-select"
              name="sectorDamages"
              defaultValue=''
              onChange={changeSectorDamage}>
              <option disabled value=''>Selecciona una opcion</option>
              {
                sectorDamage?.map(type => {
                  return (
                    <option key={type._id} value={type._id}>{type.name}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Lugar de detalle</label>
            <select className="form-select"
              name="damageDetails"
              defaultValue=''
              disabled={arrValidator.statusDetails}
              onChange={changeDamageDetails}
            >
              <option value='' disabled>Selecciona una opcion</option>
              {
                damageDetails?.map((type, i) => {
                  return (
                    <option key={i} value={type._id}>{type.code} - {type.details}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="col-md-12">
            <label className="form-label">Codigo de daño</label>
            <select className="form-select"
              name="damageCodes"
              defaultValue=''
              disabled={arrValidator.statusDamageCode}
              onChange={changeDamageCode}>
              <option value='' disabled >Selecciona una opcion</option>
              {
                damageCode?.map(type => {
                  return (
                    <option key={type._id} value={type._id}>CODIGO: {type.code} - {type.details}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="col-md-12">
            <label className="form-label">Cogido de gravedad</label>
            <select className="form-select"
              name="severityCode"
              defaultValue=''
              disabled={arrValidator.statusSeverityCode}
              onChange={changeSeverityCode}>
              <option value='' disabled >Selecciona una opcion</option>
              {
                severityCode?.map(type => {
                  return (
                    <option key={type._id} value={type._id}>CODIGO: {type.code} - {type.details}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="col-12 text-end">
            <button className="btn btn-danger btn-sm" type="submit" disabled={arrValidator.statusBtn}>AGREGAR DAÑO</button>
          </div>
        </div>
      </form>
      <form onSubmit={createDamage}>
        <div className="row g-3">
          <hr className="mt-3" />
          <h4 className="my-1">TIPO DE SINIESTRO</h4>
          <div className="col-md-6">
            <label className="form-label">VIN</label>
            <input type="text" className="form-control" name="vin" placeholder="" disabled={enableCar()} />
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
          <div className="col-md-6">
            <label className="form-label">Origen de daño</label>
            <select className="form-select" defaultValue=''
              name="typeDamage"
              disabled={enableCar()}
              onChange={changeSendForm}>
              <option value='' disabled >Selecciona una opcion</option>
              {
                typeDamage.map(type => {
                  return (
                    <option key={type._id} value={type._id}>{type.name}</option>
                  )
                })
              }
            </select>
          </div>
          <button className="w-100 btn btn-success" type="submit" disabled={sendForm}>GUARDAR SINIESTRO</button>
        </div>
      </form>
    </div>
  )
}
