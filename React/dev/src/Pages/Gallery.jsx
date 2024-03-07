import React, { useState } from "react"
import ImageService from "../modules/ImageService"
import "../styles/Gallery.css"
import Nav from "../components/Nav"

export default function Gallery() {
    const ImagesSrv = new ImageService()
    const [Images,SetImages]  = useState([])
    
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
                        const newImages = [...Images, {Url: imageUrl,Name: NameImage, Data: Date }];
                        SetImages(newImages)
                        var byteArray = new Uint8Array(arrayBuffer);
                        // Преобразуем массив байтов в строку Base64. Не поддерживает большие массивы байтов изображения, что может приводит к переполнению стека вызовов! 
                        var base64String = btoa(String.fromCharCode.apply(null, byteArray)); 
                        fetch("http://localhost:5000/PostImage", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ Bytes: base64String, DateTime: Date, Id: 1, Name: NameImage  })
                  }).then(response => {
                    if (response.ok) {
                        console.log('Image uploaded successfully.');
                    } else {
                        console.error('Failed to upload image.');
                    }
                })
                  } catch (error) {
                    console.error('Ошибка:', error);
                  }
                }
            } } accept="image/*" type="file"></input>
            </div>
            {
            <div className="Container">
                {Images.map((x,index) => <div key={index}> <img alt="Не удалось загрузить изображение" className="Image" src={x.Url}></img> <h2> Изображение № {index+1} - '{x.Name}', Дата - {x.Data}  </h2> </div> ) }

            </div>
}
        </div>
    )
}