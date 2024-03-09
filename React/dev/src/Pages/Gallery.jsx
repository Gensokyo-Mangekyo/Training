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
              console.log(response.data)
              SetImages(response.data)
      })
        } catch (error) {
            alert(error);
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
                   
                    const imageUrl = ImagesSrv.GetImageFromBytes(arrayBuffer)
                        const NameImage = imageFile.name.substring(0,imageFile.name.lastIndexOf('.'))
                        const Date = getFormattedDate()
                        var byteArray = new Uint8Array(arrayBuffer);
                        var bytesString = "";
                        byteArray.map((x,index) => { if (index === byteArray.length-1)bytesString += x; else bytesString += x + " ";})
                        const PostImage = async () => {
                        await fetch("http://localhost:5000/PostImage", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ Bytes: bytesString, DateTime: Date, Name: NameImage  })
                  }).then(response => {
                    const ImageData = response.ok
                    if (!response.ok) 
                    {
                      const newImages = [...Images, {Url: ImageData.url,Name: ImageData.name, Data: ImageData.dateTime, Id: ImageData.id }];
                      SetImages(newImages)
                    }
                    else
                    alert('Не удалось загрузить изображение на сервер!');
                }) 
                }
                    PostImage()
                  } catch (error) {
                    alert('Ошибка: ' + error);
                  }
                }
            } } accept="image/*" type="file"></input>
            </div>
            {
            <div className="Container">
                {Images.map((x,index) => <div key={index}> <img alt="Не удалось загрузить изображение" className="Image" src={host + "/" + x.Url}></img> <h2> Изображение № {index+1} - '{x.Name}', Дата - {x.Data}  </h2> </div> ) }

            </div>
}
        </div>
    )
}