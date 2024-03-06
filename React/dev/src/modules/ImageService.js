


export default class ImageService {
    ImageToByteArray(imageFile) {
        return new Promise((resolve, reject) => { //Создаём промис для ожидания завершения операции чтения
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
    }

    GetImageFromBytes(arrayBuffer) {
        const blob = new Blob([arrayBuffer], { type: 'image/jpeg' }); // Создаём Blob объект из arrayBuffer тип Image
        const imageUrl = URL.createObjectURL(blob); //Создаём URL объекта Blob
        return imageUrl;
    }

    

}