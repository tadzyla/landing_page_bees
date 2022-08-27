function changePhoto() {
    
    let cottagePhoto = document.getElementById('cottage_photo');

    (cottagePhoto.src).includes("/assets/cottage_before.jpg") ?
        cottagePhoto.src = "/assets/cottage_after.jpg":
        cottagePhoto.src = "/assets/cottage_before.jpg"        
    }
    
