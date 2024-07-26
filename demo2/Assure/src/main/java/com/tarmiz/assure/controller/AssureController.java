package com.tarmiz.assure.controller;

import com.tarmiz.assure.dto.ContratDTO;
import com.tarmiz.assure.model.Assure;
import com.tarmiz.assure.service.AssureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/assures")
@CrossOrigin(origins = "http://localhost:4200")
public class AssureController {

    @Autowired
    private AssureService assureService;

    @GetMapping
    public List<Assure> getAllAssures() {
        return assureService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Assure> getAssureById(@PathVariable Long id) {
        return assureService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Assure createAssure(@RequestBody Assure assure) {
        return assureService.save(assure);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Assure> updateAssure(@PathVariable Long id, @RequestBody Assure assureDetails) {
        return assureService.findById(id)
                .map(assure -> ResponseEntity.ok(assureService.update(id, assureDetails)))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAssure(@PathVariable Long id) {
        assureService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // Nouvel endpoint pour récupérer les contrats d'un assuré
    @GetMapping("/{id}/contrats")
    public ResponseEntity<List<ContratDTO>> getContratsByAssureId(@PathVariable Long id) {
        List<ContratDTO> contrats = assureService.getContratsByAssureId(id);
        return ResponseEntity.ok(contrats);
    }

}