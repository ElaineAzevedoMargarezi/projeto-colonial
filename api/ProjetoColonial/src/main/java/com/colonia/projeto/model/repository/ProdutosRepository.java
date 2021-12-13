package com.colonia.projeto.model.repository;

import com.colonia.projeto.model.entity.Produtos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProdutosRepository extends JpaRepository<Produtos, Integer> {

    @Query(" SELECT n FROM Produtos n WHERE upper(n.nome) like upper(:nome)")
    List<Produtos>finByProdutos(@Param("nome") String nome);
}
