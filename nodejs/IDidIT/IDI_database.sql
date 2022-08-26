-- Active: 1660805811787@@127.0.0.1@3306@IDI

CREATE DATABASE IDI;

USE IDI;

CREATE TABLE
    user (
        id varchar(10) not null primary key,
        password varchar(20) not null,
        email varchar(10) not null,
        gender varchar(5) not null,
        nickname varchar(10) not null
    );