package com.charu.experiment7;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DatabaseInitializer implements CommandLineRunner {

    private final AppUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public DatabaseInitializer(AppUserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        // Create USER: Charu
        if (userRepository.findByUsername("charu").isEmpty()) {
            userRepository.save(new AppUser("charu", passwordEncoder.encode("charu123"), "ROLE_USER"));
        }
        // Create ADMIN: Aman
        if (userRepository.findByUsername("riya").isEmpty()) {
            userRepository.save(new AppUser("riya", passwordEncoder.encode("riya123"), "ROLE_ADMIN"));
        }
    }
}