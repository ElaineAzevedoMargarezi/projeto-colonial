package com.colonia.projeto.model.entity;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
public class Produtores {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Integer id;

        @NotEmpty(message = "Deve ser informado um nome válido!")
        @NotNull(message = "Deve ser informado um nome válido!")
        @Column(nullable = false, length = 100)
        private String nome;

        @NotEmpty(message = "Deve ser informada uma cidade")
        @NotNull(message = "Deve ser informada uma cidade")
        @Column(nullable = false, length = 100)
        private String cidade;

        @Column(length = 20)
        private String telefone;

        @NotEmpty(message = "Deve ser informado um cpf valido")
        @NotNull(message = "Deve ser informado um cpf valido")
        @Column(nullable = false, length = 100)
        private String cpf;

        @Column(length = 150)
        private String endereco;

        public Integer getId() {
                return id;
        }

        public void setId(Integer id) {
                this.id = id;
        }

        public String getNome() {
                return nome;
        }

        public void setNome(String nome) {
                this.nome = nome;
        }

        public String getCidade() {
                return cidade;
        }

        public void setCidade(String cidade) {
                this.cidade = cidade;
        }

        public String getTelefone() {
                return telefone;
        }

        public void setTelefone(String telefone) {
                this.telefone = telefone;
        }

        public String getCpf() {
                return cpf;
        }

        public void setCpf(String cpf) {
                this.cpf = cpf;
        }

        public String getEndereco() {
                return endereco;
        }

        public void setEndereco(String endereco) {
                this.endereco = endereco;
        }
}

