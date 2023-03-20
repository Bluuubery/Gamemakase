package com.gamemakase.domain.model.dto;

import com.gamemakase.domain.model.entity.Authority;
import com.gamemakase.domain.model.entity.Authority.AuthorityName;
import com.gamemakase.domain.model.entity.User;
import lombok.Builder;
import lombok.Data;

@Data
public class SignUpRequestDto {

    String userEmail;

    String userPassword;

    Long userSteamId;

    String userName;
    AuthorityName authority;

    public User toEntity(long steamId) {
        return User.builder()
                .userEmail("this.userEmail")
                .userPassword("this.userPassword")
                .userSteamId(steamId)
                .userName("ADMIN")
                .build();
    }
}
