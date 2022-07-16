package br.com.imasolucoes.dsmeta.service;


import br.com.imasolucoes.dsmeta.model.Sale;
import br.com.imasolucoes.dsmeta.repository.SaleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;


    public List< Sale > findSales() {

        return saleRepository.findAll();
    }
}
