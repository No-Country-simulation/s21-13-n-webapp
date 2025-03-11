package com.app.ecommerce_management_api.dto;

public class ShippingInfoDto {

    private String name;
    private String surname;
    private String email;
    private String address;
    private String house;
    private String city;
    private String region;
    private String postalCode;
    private String phone;
    private Long userId;

    // Constructor
    public ShippingInfoDto(String name, String surname, String email, String address, String house, String city, String region, String postalCode, String phone, Long userId) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.address = address;
        this.house = house;
        this.city = city;
        this.region = region;
        this.postalCode = postalCode;
        this.phone = phone;
        this.userId = userId;
    }

    public ShippingInfoDto() {
    }

    // Getters y Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getHouse() {
        return house;
    }

    public void setHouse(String house) {
        this.house = house;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
