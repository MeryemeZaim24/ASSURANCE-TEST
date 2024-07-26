package com.tarmiz.assure.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class ContratDTO {
    private Long id;
    private String police;
    private LocalDate dateSignature;
    private LocalDate dateExpiration;
    private Long assureId;
}
