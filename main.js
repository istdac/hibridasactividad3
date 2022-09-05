$(document).ready(function(){
    console.log('dom test')
    let calificacion = 0;
    $('#btnCalif').on('click',function(){
        calificacion=0
      /*  console.log('califclick')
        console.log($('#flexRadioDefaultN1').is(':checked'))
        console.log($('#flexRadioDefaultN2').is(':checked'))
        */
        if($('#flexRadioDefaultN1').is(':checked')){
           calificacion++
        }
        if($('#flexRadioDefaultH2').is(':checked')){
            calificacion++
        }
        if($('#flexRadioDefaultH3').is(':checked')){
            calificacion++
        }
        if($('#flexRadioDefaultN4').is(':checked')){
            calificacion++
        }
        if($('#flexRadioDefaultN5').is(':checked')){
            calificacion++
        }
        if($('#flexRadioDefaultH6').is(':checked')){
            calificacion++
        }
        if($('#flexRadioDefaultN7').is(':checked')){
            calificacion++
        }
        if($('#flexRadioDefaultN8').is(':checked')){
            calificacion++
        }
        if($('#flexRadioDefaultN9').is(':checked')){
            calificacion++
        }
        if($('#flexRadioDefaultN10').is(':checked')){
            calificacion++
        }
        console.log(calificacion)
        $("<h2>Resultados:</h2><p>Ha sacado una puntuación de "+calificacion+" de un total de 10</p>").appendTo($("#resultados"))
    });
})