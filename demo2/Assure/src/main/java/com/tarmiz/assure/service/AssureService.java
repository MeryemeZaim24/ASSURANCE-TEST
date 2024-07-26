package com.tarmiz.assure.service;

import com.tarmiz.assure.dto.ContratDTO;
import com.tarmiz.assure.model.Assure;
import com.tarmiz.assure.repository.AssureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Optional;

@Service
public class AssureService {

    @Autowired
    private AssureRepository assureRepository;

    private final WebClient webClient;

    @Autowired
    public AssureService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("http://localhost:8083").build(); // URL du microservice contrat
    }

    public List<Assure> findAll() {
        return assureRepository.findAll();
    }

    public Optional<Assure> findById(Long id) {
        return assureRepository.findById(id);
    }

    public Assure save(Assure assure) {
        return assureRepository.save(assure);
    }

    public Assure update(Long id, Assure assureDetails) {
        Optional<Assure> assureOptional = assureRepository.findById(id);

        if (assureOptional.isPresent()) {
            Assure assure = assureOptional.get();
            assure.setNom(assureDetails.getNom());
            assure.setPrenom(assureDetails.getPrenom());
            assure.setCin(assureDetails.getCin());
            assure.setDateNaissance(assureDetails.getDateNaissance());
            return assureRepository.save(assure);
        } else {
            throw new RuntimeException("Assure not found with id " + id); // Throw an exception
        }
    }

    public void deleteById(Long id) {
        assureRepository.deleteById(id);
    }

    // Méthode pour récupérer les contrats d'un assuré
    public List<ContratDTO> getContratsByAssureId(Long assureId) {
        return webClient.get()
                .uri("/api/contrats/assure/{assureId}", assureId)
                .retrieve()
                .bodyToFlux(ContratDTO.class)
                .collectList()
                .block();
    }
}