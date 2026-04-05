package com.charu.experiment7;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ResourceController {

    @GetMapping("/open/info")
    public ResponseEntity<?> getPublicInfo() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "System Status: Online. (Public API - No Auth Required)");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/standard/dashboard")
    public ResponseEntity<?> getStandardData() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Welcome Charu! Here is your Standard User Dashboard.");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/system/settings")
    public ResponseEntity<?> getSystemSettings() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Alert: Admin Area. Welcome Riya! You have full system access.");
        return ResponseEntity.ok(response);
    }
}