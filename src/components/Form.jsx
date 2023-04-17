import React from 'react'
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer, Tooltip, CircleMarker, Polygon } from 'react-leaflet';
import axios from 'axios';

const colorOptions={color:'purple'}
const centerPolygon=[
    [
        [57.18259371127554,39.37054602795913],
        [57.17327069316988,39.39114539319352],
        [57.20607724585843,39.4728562086232],
        [57.23792378492205,39.46427313977554]
    ]
]
const center = [57.18587,39.414526]


const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/form', data)
    alert('Заявка отправлена')
    console.log(data)
  }

  return (
 <div className="container">
       <form id='form' onSubmit={handleSubmit(onSubmit)} className='mx-auto'>
        <h1>Заполните заявку</h1>
        <div className='input-group mb-3'>
        <input
            {...register('lastName', {
                required: true,
                maxLength:50,
                pattern: /^[А-Яа-я]+$/i
            })}
            type="text"
            className='form-control'
            placeholder='Фамилия'/>
        </div>
        {errors?.lastName?.type === 'required'&&(
            <p>Поле обязательно для заполнения</p>
        )}

        {errors?.lastName?.type === 'maxLength'&&(
            <p>Поле не может содержать более 50 символов</p>
        )}

        {errors?.lastName?.type === 'pattern'&&(
            <p>Поле заполненно некорректно</p>
        )}

      <div className='input-group mb-3'>
        <input
            {...register('firstName', {
                required: true,
                maxLength:50,
                pattern: /^[А-Яа-я]+$/i
            })}
            type="text"
            className='form-control'
            placeholder='Имя'/>
        </div>
        {errors?.firstName?.type === 'required'&&(
            <p>Поле обязательно для заполнения</p>
        )}

        {errors?.firstName?.type === 'maxLength'&&(
            <p>Поле не может содержать более 50 символов</p>
        )}

        {errors?.firstName?.type === 'pattern'&&(
            <p>Поле заполненно некорректно</p>
        )}

      <div className='input-group mb-3'>
        <input
            {...register('patromymic', {
                required: true,
                maxLength:50,
                pattern: /^[А-Яа-я]+$/i
            })}
            type="text"
            className='form-control'
            placeholder='Отчество'/>
        </div>
        {errors?.patromymic?.type === 'required'&&(
            <p>Поле обязательно для заполнения</p>
        )}

        {errors?.patromymic?.type === 'maxLength'&&(
            <p>Поле не может содержать более 50 символов</p>
        )}

        {errors?.patromymic?.type === 'pattern'&&(
            <p>Поле заполненно некорректно</p>
        )}

      <div className='input-group mb-3'>
        <input
            {...register('email', {
                required: true,
                maxLength:50,
                pattern: /^[A-Za-z@._-]+$/i
            })}
            type="text"
            className='form-control'
            placeholder='Email'/>
        </div>
        {errors?.email?.type === 'required'&&(
            <p>Поле обязательно для заполнения</p>
        )}

        {errors?.email?.type === 'maxLength'&&(
            <p>Поле не может содержать более 50 символов</p>
        )}

        {errors?.email?.type === 'pattern'&&(
            <p>Поле заполненно некорректно</p>
        )}

        <div>
          <input className='btn btn-outline-primary' type="submit" />
        </div>
    </form>
<br />
<MapContainer
        center={center}
        zoom={10}
        style={{
            width:'85vw',
            height:"500px"
        }}
        >
            <TileLayer
            url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=baBC3t9J46G3egoyg6Rg'
           attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
           />

<CircleMarker
            center={center}
            pathOptions={{color:'black'}}
            radius={10}
            />

           <Marker position={center}>
            <Popup>
              Мы находимся тут.
            </Popup>
            <Tooltip>
            Мы находимся тут.
            </Tooltip>
           </Marker>
           <Polygon positions={centerPolygon} pathOptions={colorOptions}/>
        </MapContainer>
  </div>  
  );
}

export default Form