package com.app.pojo;

import java.time.LocalDate;

import javax.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class MedicalDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int recordId;

	// Mapping to User entity
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
    
	private int weight;
	private int fastingSugar;
	private int postSugar;
	private int bloodPressure;
	private int otherDiseases;
	
	@DateTimeFormat(pattern = "dd-MM-yyyy")
	private LocalDate date;

	public MedicalDetails() {
		super();
	}

	public MedicalDetails(int recordId, User user, int weight, int fastingSugar, int postSugar, int bloodPressure,
			int otherDiseases, LocalDate date) {
		super();
		this.recordId = recordId;
		this.user = user;
		this.weight = weight;
		this.fastingSugar = fastingSugar;
		this.postSugar = postSugar;
		this.bloodPressure = bloodPressure;
		this.otherDiseases = otherDiseases;
		this.date = date;
	}
	
	public MedicalDetails(User user, int weight, int fastingSugar, int postSugar, int bloodPressure, int otherDiseases,
			LocalDate date) {
		super();
		this.user = user;
		this.weight = weight;
		this.fastingSugar = fastingSugar;
		this.postSugar = postSugar;
		this.bloodPressure = bloodPressure;
		this.otherDiseases = otherDiseases;
		this.date = date;
	}

	public int getRecordId() {
		return recordId;
	}

	public void setRecordId(int recordId) {
		this.recordId = recordId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public int getFastingSugar() {
		return fastingSugar;
	}

	public void setFastingSugar(int fastingSugar) {
		this.fastingSugar = fastingSugar;
	}

	public int getPostSugar() {
		return postSugar;
	}

	public void setPostSugar(int postSugar) {
		this.postSugar = postSugar;
	}

	public int getBloodPressure() {
		return bloodPressure;
	}

	public void setBloodPressure(int bloodPressure) {
		this.bloodPressure = bloodPressure;
	}

	public int getOtherDiseases() {
		return otherDiseases;
	}

	public void setOtherDiseases(int otherDiseases) {
		this.otherDiseases = otherDiseases;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "MedicalDetails [recordId=" + recordId + ", user=" + user + ", weight=" + weight + ", fastingSugar="
				+ fastingSugar + ", postSugar=" + postSugar + ", bloodPressure=" + bloodPressure + ", otherDiseases="
				+ otherDiseases + ", date=" + date + "]";
	}
	
	
	
	
}
