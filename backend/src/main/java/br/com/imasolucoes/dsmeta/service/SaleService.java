package br.com.imasolucoes.dsmeta.service;


import br.com.imasolucoes.dsmeta.model.Sale;
import br.com.imasolucoes.dsmeta.repository.SaleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;


@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;


    public Page< Sale > findSales( String minDate, String maxDate, Pageable pageable ) {

        LocalDate today = LocalDate.now( ZoneId.systemDefault() );

        LocalDate minDateParsed = minDate.equals( "" ) ? today.minusDays( 365 ) : LocalDate.parse( minDate );
        LocalDate maxDateParsed = maxDate.equals( "" ) ? today : LocalDate.parse( maxDate );

        return saleRepository.findSales( minDateParsed, maxDateParsed, pageable );
    }
}
