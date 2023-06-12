package com.app.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.dto.DetailsRequestDTO;
import com.app.dto.SignupRequestDTO;
import com.app.pojo.MedicalDetails;
import com.app.pojo.User;

public interface IUserService {

	ResponseEntity<?> signUpUser(SignupRequestDTO user);

	User  logInUser(String userEmail,String userPassword);

	ResponseEntity<?> userMediDetails(DetailsRequestDTO data);

	List<MedicalDetails> getMedicalDetailsByUserId(int userId);

}
