package com.tts.transit.controller;

import com.tts.transit.model.Bus;
import com.tts.transit.model.BusRequest;
import com.tts.transit.model.Location;
import com.tts.transit.service.TransitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class TransitController {
    @Autowired
    private TransitService apiService;

    @GetMapping("/buses")
    public String getBusesPage(Model model) {
        model.addAttribute("request", new BusRequest());
        return "index";
    }

    @PostMapping("/buses")
    public String getNearbyBuses(BusRequest request, Model model) {
        try {
            List<Bus> buses = apiService.getNearbyBuses(request);
            Location personLocation = apiService.getPersonLocation(request);
            model.addAttribute("personLocation", personLocation);
            model.addAttribute("buses", buses);
            model.addAttribute("request", request);
        } catch (Exception e) {
            model.addAttribute("request", new BusRequest());
        }
        return "index";
    }
}
