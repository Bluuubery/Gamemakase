package com.gamemakase.domain.model.service;

import com.gamemakase.domain.model.dto.SignUpRequestDto;
import com.gamemakase.domain.model.dto.UserRequestDto;
import com.gamemakase.domain.model.dto.UserResponseDto;
import com.gamemakase.domain.model.entity.User;
import java.io.IOException;
import java.util.Map;

import com.gamemakase.global.Exception.NotFoundException;
import com.gamemakase.global.Exception.TokenValidFailedException;
import org.json.simple.parser.ParseException;
import org.springframework.http.HttpHeaders;

public interface UserService {
    Map<String, Object> signUp(SignUpRequestDto signUpRequestDto, long steamId, String name);

    boolean isUser(long steamId);
    Map<String, Object> login(long steamId);

    UserResponseDto getUserProfile(String accessToken) throws IOException, ParseException, NotFoundException, TokenValidFailedException;

    HttpHeaders getAccessTokenByRefreshToken(String refreshToken);

    String getUserName(String steamId) throws IOException, ParseException;

    String getWriterName(long userId) throws NotFoundException;

    void Withdrawal(User user);
}
