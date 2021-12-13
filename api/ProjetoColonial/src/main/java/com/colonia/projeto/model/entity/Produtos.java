package com.colonia.projeto.model.entity;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Entity
public class Produtos {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @NotNull(message = "Deve ser informado o produtor do produto")
    @JoinColumn(name="id_produtores")
    private Produtores produtores;

    @NotNull(message = "Deve ser informado um nome")
    @Column(nullable = false, length = 100)
    private String nome;

    @Column
    private BigDecimal valor;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Produtores getProdutores() {
        return produtores;
    }

    public void setProdutores(Produtores produtores) {
        this.produtores = produtores;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }
}
