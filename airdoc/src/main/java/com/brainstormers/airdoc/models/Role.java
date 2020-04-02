package com.brainstormers.airdoc.models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;

@Document
public enum Role implements GrantedAuthority {
  ROLE_ADMIN, ROLE_CLIENT;

  public String getAuthority() {
    return name();
  }

}
