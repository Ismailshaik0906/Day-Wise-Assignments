package com.example.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class OrderLoggingAspect {

    @Before("execution(* com.example.service.OrderService.*(..))")
    public void beforeAdvice(JoinPoint jp) {
        System.out.println("[Before] Starting: " + jp.getSignature().getName());
    }

    @AfterReturning("execution(* com.example.service.OrderService.*(..))")
    public void afterReturningAdvice(JoinPoint jp) {
        System.out.println("[AfterReturning] Success: " + jp.getSignature().getName());
    }

    @AfterThrowing(pointcut = "execution(* com.example.service.OrderService.*(..))", throwing = "ex")
    public void afterThrowingAdvice(JoinPoint jp, Throwable ex) {
        System.out.println("[AfterThrowing] Error in: " + jp.getSignature().getName() + " - " + ex.getMessage());
    }

    @After("execution(* com.example.service.OrderService.*(..))")
    public void afterAdvice(JoinPoint jp) {
        System.out.println("[After] Finished: " + jp.getSignature().getName());
    }
}
