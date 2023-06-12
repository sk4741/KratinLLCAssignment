package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.*;
import com.app.pojo.MedicalDetails;
import com.app.pojo.User;
import com.app.services.IUserService;
import com.app.user_excs.UserHandlingException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private IUserService userService;
	//login controller
	@PostMapping("/login")
	public ResponseEntity<?> logInUser(@RequestBody LoginRequestDTO user){
		System.out.println("in Login "+user);
		 try {
		      // Validate the email and password
		      
		      // Authenticate the user
		      User user1 = userService.logInUser(user.getUserEmail(), user.getUserPassword());
		      
		      // Generate and return the JWT token or any other authentication response
	
		      return ResponseEntity.ok(user1);
		      
		    } catch (UserHandlingException e) {
		      // Handle authentication exception and return an error response
		    	 UserHandlingException ue= new UserHandlingException("User not found");
		      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ue);
		    } catch (Exception e) {
		      // Handle other unexpected exceptions and return an error response
		    	 UserHandlingException ue= new UserHandlingException("An error occurred during login");
		      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ue);
		    }
		  }

	//signup controller
	@PostMapping("/signup")
	public ResponseEntity<?> signUpUser(@RequestBody SignupRequestDTO user) {
		System.out.println("in Signup " + user);

		return new ResponseEntity<>(userService.signUpUser(user), HttpStatus.CREATED);
	}
	
	//details controller
		@PostMapping("/mediDetails")
		public ResponseEntity<?> userMediDetails(@RequestBody DetailsRequestDTO data) {
			System.out.println("in Signup " + data);

			return new ResponseEntity<>(userService.userMediDetails(data), HttpStatus.CREATED);
		}
		
		@GetMapping("/medical-details")
	    public ResponseEntity<List<MedicalDetails>> getMedicalDetailsByUserId(@RequestParam("userId") int userId) {
			List<MedicalDetails> medicalDetails = userService.getMedicalDetailsByUserId(userId);
	        return ResponseEntity.ok(medicalDetails);
	    }
}
