package com.example.userprofileservice.service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Service;

import com.example.userprofileservice.entity.User;
import com.example.userprofileservice.repository.UserRepository;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;

@Service
public class UserProfileService {

    private final UserRepository userRepository;
    private final Map<String, User> cache = new ConcurrentHashMap<>();

    public UserProfileService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @CircuitBreaker(name = "userProfileService", fallbackMethod = "getUserProfileFromCache")
    public User getUserProfile(String username) {
        return userRepository.findById(username)
                .map(user -> {
                    cache.put(username, user); // Save to cache
                    return user;
                })
                .orElse(new User(username, "Unknown User", "No data in DB"));
    }

    public User getUserProfileFromCache(String username, Throwable t) {
        return cache.getOrDefault(username,
                new User(username, "Unknown User", "No data available. Using fallback."));
    }
}
