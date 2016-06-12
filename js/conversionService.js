var conversionService = {
    
    setForm: function() {
        var form = document.getElementById('form-km');
        form.addEventListener('submit', conversionService.eventSubmitHandler);
    },
    
    eventSubmitHandler: function(event) {
        event.preventDefault();
        var inputKm = document.getElementById('km');
        conversionService.convertKm(inputKm.value);
        inputKm = 0;
    },
    
    convertKm: function(km) {
        if(km > 0) {
            var mile = km * 0.621371;
            conversionService.displayMile(mile); 
        }
    },
    
    displayMile: function(mile) {
        var item = conversionService.createItemMile(mile);
        var mileItem = document.getElementById('mile');
        mileItem.appendChild(item);
    },
    
    createItemMile: function(mile) {
        var item = document.createElement('p');
        item.innerHTML = mile;
        return item;
    },
    
}

//init
conversionService.setForm();