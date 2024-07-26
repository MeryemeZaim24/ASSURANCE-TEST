package com.tarmiz.contrat.service;

import com.tarmiz.contrat.model.Contrat;
import com.tarmiz.contrat.repository.ContratRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContratService {

    private final ContratRepository contratRepository;

    @Autowired
    public ContratService(ContratRepository contratRepository) {
        this.contratRepository = contratRepository;
    }

    public List<Contrat> getAllContrats() {
        return contratRepository.findAll();
    }

    public Optional<Contrat> getContratById(Long id) {
        return contratRepository.findById(id);
    }

    public List<Contrat> getContratsByAssureId(Long assureId) {
        return contratRepository.findByAssureId(assureId);
    }

    public Contrat saveContrat(Contrat contrat) {
        return contratRepository.save(contrat);
    }

    public void deleteContrat(Long id) {
        contratRepository.deleteById(id);
    }
}