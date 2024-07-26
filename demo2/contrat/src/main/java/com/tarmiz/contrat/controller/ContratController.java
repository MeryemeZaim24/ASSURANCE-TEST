package com.tarmiz.contrat.controller;

import com.tarmiz.contrat.model.Contrat;
import com.tarmiz.contrat.service.ContratService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/contrats")
@CrossOrigin(origins = "http://localhost:4200")
public class ContratController {

    private final ContratService contratService;

    @Autowired
    public ContratController(ContratService contratService) {
        this.contratService = contratService;
    }

    @GetMapping
    public ResponseEntity<List<Contrat>> getAllContrats() {
        List<Contrat> contrats = contratService.getAllContrats();
        return ResponseEntity.ok(contrats);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Contrat> getContratById(@PathVariable Long id) {
        Optional<Contrat> contrat = contratService.getContratById(id);
        return contrat.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/assure/{assureId}")
    public ResponseEntity<List<Contrat>> getContratsByAssureId(@PathVariable Long assureId) {
        List<Contrat> contrats = contratService.getContratsByAssureId(assureId);
        return ResponseEntity.ok(contrats);
    }

    @PostMapping
    public ResponseEntity<Contrat> createContrat(@RequestBody Contrat contrat) {
        Contrat savedContrat = contratService.saveContrat(contrat);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedContrat);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Contrat> updateContrat(@PathVariable Long id, @RequestBody Contrat contrat) {
        if (!contratService.getContratById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        contrat.setId(id);
        Contrat updatedContrat = contratService.saveContrat(contrat);
        return ResponseEntity.ok(updatedContrat);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteContrat(@PathVariable Long id) {
        if (!contratService.getContratById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        contratService.deleteContrat(id);
        return ResponseEntity.noContent().build();
    }
}