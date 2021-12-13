package com.colonia.projeto.res.exception;



import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Arrays;
import java.util.List;

public class ApiErrors {
    private List<String> erros;

    public ApiErrors(List<String> erros){
        this.erros = erros;
    }

    public ApiErrors(String message){
        this.erros = Arrays.asList(message);
    }

    public List<String> getErros() {
        return erros;
    }
}
