package com.colonia.projeto.res;

import com.colonia.projeto.model.DTO.ProdutosDTO;
import com.colonia.projeto.model.entity.Produtores;
import com.colonia.projeto.model.entity.Produtos;
import com.colonia.projeto.model.repository.ProdutoresRepository;
import com.colonia.projeto.model.repository.ProdutosRepository;
import com.colonia.projeto.model.util.BigDecimalConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/produtos")
@CrossOrigin("http://localhost:4200")
public class ProdutosController {

    private final ProdutosRepository produtosRepository;
    private final ProdutoresRepository produtoresRepository;
    private final BigDecimalConverter bigDecimalConverter;

    @Autowired
    public ProdutosController(ProdutosRepository produtosRepository,
                              ProdutoresRepository produtoresRepository,
                              BigDecimalConverter bigDecimalConverter){

        this.produtosRepository = produtosRepository;
        this.produtoresRepository = produtoresRepository;
        this.bigDecimalConverter = bigDecimalConverter;

    }

    @PostMapping
    @ResponseStatus(HttpStatus.ACCEPTED)
    public Produtos salvar(@RequestBody @Valid ProdutosDTO produtosDTO){
        BigDecimal valorDoProduto = bigDecimalConverter.converter(produtosDTO.getValor());

        Integer idProdutores = produtosDTO.getIdProdutores();
        Produtores produtores = produtoresRepository
                                .findById(idProdutores)
                                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND,
                                        "O Produtor " + idProdutores + " não existe"));

        Produtos produtos = new Produtos();
        produtos.setNome(produtosDTO.getNome());
        produtos.setValor(valorDoProduto);
        produtos.setProdutores(produtores);
        return produtosRepository.save(produtos);
    }

    @GetMapping
    public List<Produtos> pesquisar(
            @RequestParam(value = "nome", required = false, defaultValue = "") String nome){
        return produtosRepository.finByProdutos("%" + nome + "%");
    }


    @GetMapping("{id}")
    public Produtos acharPorId(@PathVariable Integer id){
        return produtosRepository
                .findById(id)
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Produtos " + id + " Não cadastado"));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Integer id){
        produtosRepository
                    .findById(id)
                    .map(produtos -> {
                        produtosRepository.delete(produtos);
                        return Void.TYPE;
                    })
                    .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto " + id + " não cadastrado"));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar(@PathVariable Integer id, @RequestBody @Valid ProdutosDTO ProdutoAtualizado) {
        BigDecimal valorDoProduto = bigDecimalConverter.converter(ProdutoAtualizado.getValor());

        Integer idProdutores = ProdutoAtualizado.getIdProdutores();
        Produtores produtores = produtoresRepository
                .findById(idProdutores)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "O Produtor " + idProdutores + " não existe"));
        produtosRepository
                .findById(id)
                .map(produtos -> {
                    produtos.setNome(ProdutoAtualizado.getNome());
                    produtos.setValor(valorDoProduto);
                    produtos.setProdutores(produtores);
                    return produtosRepository.save(produtos);
                })
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto " + id + " não foi cadastrado"));
    }
}
