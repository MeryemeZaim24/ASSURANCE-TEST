package com.tarmiz.assure.repository;

import com.tarmiz.assure.model.Assure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssureRepository extends JpaRepository<Assure, Long> {
}
