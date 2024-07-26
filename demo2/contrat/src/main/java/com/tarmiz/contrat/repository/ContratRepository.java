package com.tarmiz.contrat.repository;

import com.tarmiz.contrat.model.Contrat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContratRepository extends JpaRepository<Contrat, Long> {
    List<Contrat> findByAssureId(Long assureId);
}
