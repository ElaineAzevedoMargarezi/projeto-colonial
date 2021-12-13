package com.colonia.projeto.res;

import com.colonia.projeto.model.entity.Produtores;
import com.colonia.projeto.model.repository.ProdutoresRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/produtores")
@CrossOrigin("http://localhost:4200")
public class ProdutoresController {

    private final ProdutoresRepository repository;

    @Autowired
    public ProdutoresController(ProdutoresRepository repository){
        this.repository = repository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Produtores salvar(@RequestBody @Valid Produtores produtores){
        return repository.save(produtores);
    }

    @GetMapping
    public List<Produtores> acharTodos(){
        return repository.findAll();
    }

    @GetMapping("{id}")
    public Produtores acharPorId(@PathVariable Integer id){
        return repository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Integer id){
        repository
                .findById(id)
                .map(produtores -> {
                    repository.delete(produtores);
                    return Void.TYPE;
                })
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar(@PathVariable Integer id, @RequestBody @Valid Produtores produtoresAtualizados){
        repository
                .findById(id)
                .map(produtores -> {
                    produtores.setNome(produtoresAtualizados.getNome());
                    produtores.setCidade(produtoresAtualizados.getCidade());
                    produtores.setTelefone(produtoresAtualizados.getTelefone());
                    produtores.setCpf(produtoresAtualizados.getCpf());
                    produtores.setEndereco(produtoresAtualizados.getEndereco());
                    return repository.save(produtores);
                })
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
}
