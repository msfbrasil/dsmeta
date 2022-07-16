package br.com.imasolucoes.dsmeta.controller;


import br.com.imasolucoes.dsmeta.model.Sale;

import br.com.imasolucoes.dsmeta.service.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping( value = "/sales" )
public class SaleController {

    @Autowired
    private SaleService saleService;


    @GetMapping
    public List< Sale > findSales() {

        return saleService.findSales();
    }
}
