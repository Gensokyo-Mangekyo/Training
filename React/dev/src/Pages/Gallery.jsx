import React, { useState, useEffect } from "react"
import ImageService from "../modules/ImageService"
import "../styles/Gallery.css"
import Nav from "../components/Nav"
import axios from 'axios';

export default function Gallery() {
    const ImagesSrv = new ImageService()
    const [Images,SetImages]  = useState([])
    const host = "http://localhost:5000";

    function getFormattedDate() {
        // Получаем текущую дату
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1; 
        const year = currentDate.getFullYear();
        const formattedDay = day < 10 ? '0' + day : day;
        const formattedMonth = month < 10 ? '0' + month : month;
        return `${formattedDay}.${formattedMonth}.${year}`;
      }
      useEffect(() => {

          try {
            axios.get(host + '/GetImages').then((response) => { 
              SetImages(response.data)
      }).catch((error) => alert("Ошибка получения изображений: " + error.message))
        } catch (error) {
            alert("Произошла ошибка: " + error.message);
        }
      }, []);
    
    return( 
        <div>
             <Nav></Nav>
             <h1 id="Header">Галлерея</h1>
             <div id="ImageInput">
            <input  onChange={async function(event) {
                const imageFile = event.target.files[0];
                if (imageFile) {
                  try {
                    const arrayBuffer = await new Promise((resolve, reject) => { //Создаём промис для ожидания завершения операции чтения
                        const reader = new FileReader();
            
                        reader.onload = function(event) { //Если успешно всё считали
                            const arrayBuffer = event.target.result;  //Получаем ArrayBuffer
                            resolve(arrayBuffer); //Возращаем успешно массив байтов от arrayBuffer
                        };
            
                        reader.onerror = function(error) {
                            reject(error);
                        };
            
                        reader.readAsArrayBuffer(imageFile); //Запускает процесс чтения данных Blob, по завершении, атрибут result будет содержать данные файла в виде ArrayBuffer
                    });
                  
                        const NameImage = imageFile.name.substring(0,imageFile.name.lastIndexOf('.'))
                        const Date = getFormattedDate()
                        var byteArray = new Uint8Array(arrayBuffer);
                        var bytesString = "";
                        byteArray.map((x,index) => { if (index === byteArray.length-1)bytesString += x; else bytesString += x + " ";})
                   axios.post(host + "/PostImage",{ Bytes: bytesString, DateTime: Date, Name: NameImage  }).then((response) => { 
                    const ImageData = response.data
                    const newImages = [...Images, {url: ImageData.url,name: ImageData.name, dataTime: ImageData.dateTime, id: ImageData.id }];
                    SetImages(newImages)
                    }).catch((error) => alert("Ошибка сохранения изображения: " + error.message))
                  } catch (error) {
                    alert("Произошла ошибка: " + error.message);
                  }
                }
            } } accept="image/*" type="file"></input>
            </div>
            {
            <div className="Container">
                {Images.map((x,index) => <div key={x.id}> <img alt="Не удалось загрузить изображение" className="Image" src={host + "/" + x.url}></img> <h2> Изображение № {index+1} - '{x.name}', Дата - {x.dateTime}  </h2> </div> ) }

            </div>
}
        </div>
    )
}