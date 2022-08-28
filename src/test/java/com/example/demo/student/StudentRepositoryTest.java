package com.example.demo.student;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;


import javax.persistence.Entity;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class StudentRepositoryTest {

    @Autowired
    private StudentRepository underTest;

    @AfterEach
    void tearDown() {
        underTest.deleteAll();
    }

    @Test
    void checkIfStudentEmailExists() {
        String email = "abdalla@gmail.com";
        // given
        Student student = new Student("Abdalla", email, Gender.MALE);

        underTest.save(student);


        // when

        boolean exists = underTest.selectExistsEmail(email);

        // then
        assertThat(exists).isTrue();
    }

    @Test
    void checkIfStudentEmailDoesNotExist() {

        // given
        String email = "abdalla@gmail.com";
        // when

        boolean exists = underTest.selectExistsEmail(email);

        // then
        assertThat(exists).isFalse();
    }
}