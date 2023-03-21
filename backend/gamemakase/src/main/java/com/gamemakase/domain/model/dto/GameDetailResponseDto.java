package com.gamemakase.domain.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GameDetailResponseDto {

    private Long gameId;
    private String gameName;
    private Integer gamePrice;
    private LocalDateTime releaseDate;
    private Integer score;
    private Integer averagePlaytime;
    private String publisher;
    private Boolean isKorean;
    private Boolean isLiked;
    private Boolean canReview;
    private Boolean windows;
    private Boolean mac;
    private Boolean linux;

    private List<GenreDTO> genres;
    private List<ImageDTO> images;
    private List<ReviewDTO> reviews;
    private List<RecommendedUserDTO> recommendedUsers;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class GenreDTO {
        private Long genreId;
        private String genreName;
        // Getters and setters
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ImageDTO {
        private Long imageId;
        private String imagePath;
        // Getters and setters
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ReviewDTO {
        private Long reviewId;
        private Long gameId;
        private String reviewTitle;
        private String reviewContent;
        private Integer reviewGrade;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private String userImagePath;
        private String userName;
        private Long userId;


    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class RecommendedUserDTO {
        private Long userId;
        private String userName;
        private String userImagePath;
    }
}
