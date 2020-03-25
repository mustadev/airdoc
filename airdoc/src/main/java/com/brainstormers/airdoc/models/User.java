package com.brainstormers.airdoc.models;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * User model
 * @author Ayoub Benhaimoud<?>
 * @since 17-03-2020
 *
 */
@Document(collection = "users")
public class User {
    /**
     * User id
     */
    @Id
     private String id;
     private String name;
     private int Age;
     private String mail;

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        Age = age;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return Age;
    }

    public String getMail() {
        return mail;
    }
}
