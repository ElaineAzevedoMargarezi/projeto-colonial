package com.colonia.projeto.model.DTO;


import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class ProdutosDTO {
    @NotEmpty(message = "Deve ser informado um nome válido!")
    private String nome;
    private String valor;
    @NotNull(message = "Deve ser informado o produtor do produto")
    private Integer idProdutores;

    public ProdutosDTO(){

    }

    public String getNome() {
        return nome;
    }

    public String getValor() {
        return valor;
    }

    public Integer getIdProdutores() {
        return idProdutores;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setValor(String valor) {
        this.valor = valor;
    }

    public void setIdProdutores(Integer idProdutores) {
        this.idProdutores = idProdutores;
    }
}

