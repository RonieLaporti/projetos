jQuery(document).ready(function(){
    jQuery('#password').focusout(function(){
        var senha = jQuery('#password').val();
        var regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[a-z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/; 

        if(senha.length < 8)
        {
            alert("A senha deve conter no minímo 8 digitos!");
            jQuery('#password').val("");  
            //jQuery("p").append("<div>A senha deve conter no mínimo 8 digitos!</div>")  //                 
            return false;
        }
        else if(!regex.exec(senha))
        {
            alert("A senha deve conter no mínimo 1 caractere maiúsculo, 1 caractere minúsculo, 1 número e 1 caractere especial!");
            jQuery('#password').val("");            
            return false;
        }
        else
        {
            return true;
        }
        
    });
});