package com.colonia.projeto.model.repository;

import com.colonia.projeto.model.entity.Produtores;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoresRepository extends JpaRepository<Produtores, Integer> {
}
