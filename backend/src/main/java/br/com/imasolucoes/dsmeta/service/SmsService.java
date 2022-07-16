package br.com.imasolucoes.dsmeta.service;


import br.com.imasolucoes.dsmeta.model.Sale;
import br.com.imasolucoes.dsmeta.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;


@Service
public class SmsService {

    @Value("${twilio.sid}")
    private String twilioSid;

    @Value("${twilio.key}")
    private String twilioKey;

    @Value("${twilio.phone.from}")
    private String twilioPhoneFrom;

    @Value("${twilio.phone.to}")
    private String twilioPhoneTo;

    @Autowired
    private SaleRepository saleRepository;


    public void sendSms( Long id ) {

        Sale sale = saleRepository.findById( id ).get();

        String shortDate = sale.getDate().getMonthValue() + "/" + sale.getDate().getYear();

        String saleMessage = "O vendedor " + sale.getSellerName() + " foi destaque em " + shortDate
            + " com um total de R$ " + String.format( "%.2f", sale.getAmount() ) + "!";

        Twilio.init(twilioSid, twilioKey);

        PhoneNumber to = new PhoneNumber(twilioPhoneTo);
        PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

        Message message = Message.creator(to, from, saleMessage).create();

        System.out.println(message.getSid());
    }
}
