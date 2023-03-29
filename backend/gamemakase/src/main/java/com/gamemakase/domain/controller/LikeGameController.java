package com.gamemakase.domain.controller;

import com.gamemakase.domain.model.service.LikeGameService;
import com.gamemakase.global.Exception.NotFoundException;
import com.gamemakase.global.Exception.TokenValidFailedException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@Controller
@Api(value = "스크랩 관련 컨트롤러")
@RequestMapping
@RequiredArgsConstructor
public class LikeGameController {

    private final LikeGameService likeGameService;

    @PostMapping("/auth/user/bookmarks/{gameId}")
    ResponseEntity<HashMap<String, Long>> insertLikeGame(
            @RequestHeader("accessToken") @ApiParam(required = true) String token,
            @PathVariable Long gameId) throws NotFoundException, TokenValidFailedException {

        Long likeGame = likeGameService.insertLikeGame(gameId, token);
        HashMap<String, Long> result = new HashMap<>();
        result.put("likeId",likeGame);

        return ResponseEntity.status(HttpStatus.CREATED).body(result);

    }

    @DeleteMapping("/auth/user/bookmarks/{likeId}")
    ResponseEntity<?> deleteLikeGame(
            @RequestHeader("accessToken") @ApiParam(required = true) String token,
            @PathVariable Long likeId) throws NotFoundException, TokenValidFailedException {

        likeGameService.deleteLikeGame(likeId, token);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }


}
