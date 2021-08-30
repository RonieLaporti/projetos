/*Inicio - Validaçao Idade 18 anos */

/*Verificaçao de idade*/
jQuery('#billing_birthdate').focusout(function(){
    var data_nasc = jQuery('#billing_birthdate').val();		
    var array = data_nasc.split('/', 3);	
    var dia_nasc = array[0];
    var mes_nasc = array[1];
		var ano_nasc = array[2];
    
    var currdate = new Date();
    var dia_atual = currdate.getDate();		
    var mes_atual = currdate.getMonth() + 1;
    var ano_atual = currdate.getFullYear();
		var idade = Math.abs(ano_atual - ano_nasc);			
		
    
		console.log(idade);
    console.log('dia atual: ' + dia_atual);
    console.log('mes_atual: ' + mes_atual);
    console.log('ano atual: ' + ano_atual);			
    console.log('data nascimento: ' + data_nasc);	
		console.log('mes nascimento: ' + mes_nasc);		
    console.log('--------------------------');

    if(idade <= 18){
    	if(mes_nasc > mes_atual){				
      	alert('Você deve ter no mínimo 18 anos para se cadastrar.');
        jQuery('#billing_birthdate').val("");
        return false;
      }
		
      else if(mes_nasc == mes_atual){
      	if(dia_nasc > dia_atual && idade <= 18 && mes_nasc == mes_atual ){
        alert('Você deve ter no mínimo 18 anos para se cadastrar.');
        jQuery('#billing_birthdate').val("");
        return false;
      }
				else if(dia_nasc <= dia_atual && mes_nasc == mes_atual && idade < 18){
					alert('Você deve ter no mínimo 18 anos para se cadastrar.');
        	jQuery('#billing_birthdate').val("");
        	return false;
				}
		}
			else if(mes_nasc < mes_atual && idade < 18){
				alert('Você deve ter no mínimo 18 anos para se cadastrar.');
        jQuery('#billing_birthdate').val("");
        return false;
			}
     }
		
    if(array.length <= 2){
        alert("O campo 'Data de Nascimento' deve ser preenchido.");
        jQuery('#billing_birthdate').val("");
        return false;
    }

    if(dia_nasc == 00 || dia_nasc > 31){
        alert('Informe apenas DIAS válidos ( 1 a 31 ).');
        jQuery('#billing_birthdate').val("");
        return false;
    }
    
    if(mes_nasc == 00 || mes_nasc > 12){
        alert('Informe apenas MESES válidos ( 1 a 12 ).');
        jQuery('#billing_birthdate').val("");
        return false;
    }
		/*Define o ano minimo de cadastro */
		if(ano_nasc < 1900){
			alert('Ano de Nascimento mínimo - 1900.');
			jQuery('#billing_birthdate').val("");
			return false;
		}
});
/*Desabilitar a tecla enter no formulário de registro  */
	jQuery('.woocommerce-form.woocommerce-form-register.register').bind("keypress", function (e){
		if (e.keyCode == 13) {  
			return false;  
		}
});

/*Fim - Validaçao Idade 18 anos */