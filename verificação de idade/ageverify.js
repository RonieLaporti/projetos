/*Inicio - Validaçao Idade 18 anos */
/*Autor: Ronie Laporti */
/*Verificaçao de idade*/
jQuery(document).ready(function(){
  
  jQuery('#billing_birthdate').focusout(function(){

    /* Divide a data informada em três partes */
    var data_nasc = jQuery('#billing_birthdate').val();		
    var array = data_nasc.split('/', 3);	
    var dia_nasc = array[0];
    var mes_nasc = array[1];
		var ano_nasc = array[2];
    
    /* Pega informação da data atual */
    var currdate = new Date();
    var dia_atual = currdate.getDate();		
    var mes_atual = currdate.getMonth() + 1;
    var ano_atual = currdate.getFullYear();

    /* Força o cálculo a dar um valor absoluto */
		var idade = Math.abs(ano_atual - ano_nasc);			
		
    /* Mostra dados no inspecionar elemento */
		console.log(idade);
    console.log('dia atual: ' + dia_atual);
    console.log('mes_atual: ' + mes_atual);
    console.log('ano atual: ' + ano_atual);			
    console.log('data nascimento: ' + data_nasc);	
		console.log('mes nascimento: ' + mes_nasc);		
    console.log('--------------------------');


    /*Identifica se o usuário é menor de idade */

    if(idade <= 18){
      /*Se o mês informado é maior que o mês atual então ele ainda não chegou. */
    	if(mes_nasc > mes_atual){				
      	alert('Você deve ter no mínimo 18 anos para se cadastrar.');
        jQuery('#billing_birthdate').val("");
        return false;
      }

      /* Se o mês informado é o mesmo que o mês atual então o dia será verificado */
      else if(mes_nasc == mes_atual){
        /* Se o dia informado for maior que o dia atual então ele ainda não chegou */
      	if(dia_nasc > dia_atual && idade <= 18 && mes_nasc == mes_atual ){
        alert('Você deve ter no mínimo 18 anos para se cadastrar.');
        jQuery('#billing_birthdate').val("");
        return false;
      }

        /* Se o dia informado for menor que o dia atual e o mês for igual, porém a idade não bate mostra alerta */
				else if(dia_nasc <= dia_atual && mes_nasc == mes_atual && idade < 18){
					alert('Você deve ter no mínimo 18 anos para se cadastrar.');
        	jQuery('#billing_birthdate').val("");
        	return false;
				}
		}

      /* Se o mês informado é menor que o mês atual porém idade não bate, emite alerta */
			else if(mes_nasc < mes_atual && idade < 18){
				alert('Você deve ter no mínimo 18 anos para se cadastrar.');
        jQuery('#billing_birthdate').val("");
        return false;
			}
     }

     /* Evita que seja informado valores acima que o ano atual */
     if(ano_nasc > ano_atual){
			alert('Informe um ano válido.');
       jQuery('#billing_birthdate').val("");
       return false;
		}

		/* Evita que o campo esteja incompleto */
    if(array.length <= 2){
        alert("O campo 'Data de Nascimento' deve ser preenchido.");
        jQuery('#billing_birthdate').val("");
        return false;
    }

    /* Evita que dias não existentes sejam informados */
    if(dia_nasc == 00 || dia_nasc > 31){
        alert('Informe apenas DIAS válidos ( 1 a 31 ).');
        jQuery('#billing_birthdate').val("");
        return false;
    }

    /* Evita que meses não existentes sejam informados */
    if(mes_nasc == 00 || mes_nasc > 12){
        alert('Informe apenas MESES válidos ( 1 a 12 ).');
        jQuery('#billing_birthdate').val("");
        return false;
    }

		/*Define o ano minimo de cadastro */
		if(ano_nasc < 1900 ){
			alert('Ano de Nascimento mínimo - 1900.');
			jQuery('#billing_birthdate').val("");
			return false;
		}
});

/*Desabilitar a tecla enter no formulário de registro, para que não passem por cima da regra. */
	jQuery('.woocommerce-form.woocommerce-form-register.register').bind("keypress", function (e){
		if (e.keyCode == 13) {  
			return false;  
		}
});

/*Fim - Validaçao Idade 18 anos */
});
