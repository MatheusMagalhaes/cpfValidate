class CPF {
    constructor(cpf, dev = false){
        this.cpf = cpf;
        this.dev = dev;
    }


    validate(){
        return this.validarCPF(this.verificarCPF(this.format()));
    }

    format(){
        var cpf = this.cpf;
        cpf = cpf.replace(".","");
        cpf = cpf.replace(".","");
        cpf = cpf.replace("-","");
        return cpf;
    }

    verificarCPF(cpf){
        var contadorDeNumeros = [0,0,0,0,0,0,0,0,0,0,0];
        for(var n of cpf){
            contadorDeNumeros[n] = contadorDeNumeros[n] += 1;
        }

        if(contadorDeNumeros.indexOf(11) != -1){
            if(this.dev === true){
                console.warn("Não são aceitos CPF's com números repetidos");
            }
            return false;
        }else{
            return cpf;
        }   
    }

    validarCPF(cpf){
        if(typeof cpf != "boolean"){
            var n1 = 10;
            var n2 = 11;
            var soma1 = 0;
            var soma2 = 0;
            for(var pos = 0; pos < cpf.length;pos++){
                if(n1 >= 2){
                    soma1 += n1 * cpf[pos];
                    n1--;
                }

                if(n2 >= 2){
                    soma2 += n2 * cpf[pos];
                    n2--; 
                }
            }

            var result1 = soma1 % 11;
            var result2 = soma2 % 11;
            var verificador1 = (11 - result1) < 10 ? 11 - result1 : 0;
            var verificador2 = (11 - result2) < 10 ? 11 - result2 : 0;
            if(cpf[9] == verificador1 && cpf[10] == verificador2){
                return true;
            }else{
                if(this.dev === true){
                    console.warn("Códigos verificadores errados!");
                }
                return false;
            }
        }else{
            return false;
        }
        
    }
}
