package com.charu.experiment6;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    private final JwtHelper jwtHelper;

    public AuthenticationController(JwtHelper jwtHelper) {
        this.jwtHelper = jwtHelper;
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody AuthRequest request) {
        // Charu's custom credentials
        if ("charu".equals(request.getUsername()) && "charu123".equals(request.getPassword())) {
            String token = jwtHelper.createToken(request.getUsername());

            Map<String, String> response = new HashMap<>();
            response.put("accessToken", token); // Changed from "token" to "accessToken"
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(401).body("Access Denied: Invalid Credentials");
    }

    @GetMapping("/protected")
    public ResponseEntity<?> accessDataHub() {
        return ResponseEntity.ok("Welcome to the Data Analytics Hub! Your secure JWT session is active.");
    }

    @PostMapping("/logout")
    public ResponseEntity<?> terminateSession() {
        return ResponseEntity.ok("Data Hub session terminated securely.");
    }
}