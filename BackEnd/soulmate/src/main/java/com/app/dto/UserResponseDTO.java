package com.app.dto;

public class UserResponseDTO {
	private String userName;
	private String userEmail;
	private String userNumber;
	private String userEmgNumber;
	private int userAge;
	private String userGender;
	private String userBloodGroup;
	private int userHeight;
	private boolean userDiabetes;
	private boolean userBloodPressure;
	public UserResponseDTO() {
		super();
	}
	public UserResponseDTO(String userName, String userEmail, String userNumber, String userEmgNumber, int userAge,
			String userGender, String userBloodGroup, int userHeight, boolean userDiabetes, boolean userBloodPressure) {
		super();
		this.userName = userName;
		this.userEmail = userEmail;
		this.userNumber = userNumber;
		this.userEmgNumber = userEmgNumber;
		this.userAge = userAge;
		this.userGender = userGender;
		this.userBloodGroup = userBloodGroup;
		this.userHeight = userHeight;
		this.userDiabetes = userDiabetes;
		this.userBloodPressure = userBloodPressure;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getUserNumber() {
		return userNumber;
	}
	public void setUserNumber(String userNumber) {
		this.userNumber = userNumber;
	}
	public String getUserEmgNumber() {
		return userEmgNumber;
	}
	public void setUserEmgNumber(String userEmgNumber) {
		this.userEmgNumber = userEmgNumber;
	}
	public int getUserAge() {
		return userAge;
	}
	public void setUserAge(int userAge) {
		this.userAge = userAge;
	}
	public String getUserGender() {
		return userGender;
	}
	public void setUserGender(String userGender) {
		this.userGender = userGender;
	}
	public String getUserBloodGroup() {
		return userBloodGroup;
	}
	public void setUserBloodGroup(String userBloodGroup) {
		this.userBloodGroup = userBloodGroup;
	}
	public int getUserHeight() {
		return userHeight;
	}
	public void setUserHeight(int userHeight) {
		this.userHeight = userHeight;
	}
	public boolean isUserDiabetes() {
		return userDiabetes;
	}
	public void setUserDiabetes(boolean userDiabetes) {
		this.userDiabetes = userDiabetes;
	}
	public boolean isUserBloodPressure() {
		return userBloodPressure;
	}
	public void setUserBloodPressure(boolean userBloodPressure) {
		this.userBloodPressure = userBloodPressure;
	}
	@Override
	public String toString() {
		return "userResponseDTO [userName=" + userName + ", userEmail=" + userEmail + ", userNumber=" + userNumber
				+ ", userEmgNumber=" + userEmgNumber + ", userAge=" + userAge + ", userGender=" + userGender
				+ ", userBloodGroup=" + userBloodGroup + ", userHeight=" + userHeight + ", userDiabetes=" + userDiabetes
				+ ", userBloodPressure=" + userBloodPressure + "]";
	}
	
	
	
}
