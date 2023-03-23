package com.gamemakase.global.config.jwt;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class JwtFilter extends GenericFilter {

    private static final Logger logger = LoggerFactory.getLogger(JwtFilter.class);
    private static final String ACCESS_TOKEN = "Authorization";

    private JwtTokenProvider jwtTokenProvider;
    public JwtFilter (JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        System.out.println("JWT 토큰 조회 시작");
        String jwt = makeToken(httpServletRequest);
        System.out.println("jwt : "+jwt);

        String requestURI = httpServletRequest.getRequestURI();
        if(StringUtils.hasText(jwt) && jwtTokenProvider.validateToken(jwt)) {
            Authentication authentication = jwtTokenProvider.getAuthentication(jwt);    // authentication 객체 반환
            SecurityContextHolder.getContext().setAuthentication(authentication);   // SecurityContext에 저장
            logger.info("{}의 인증정보를 저장했습니다. URI : {}", authentication.getName(), requestURI);
        } else {
            logger.info("유효한 Jwt 토큰이 없습니다. URI : {}", requestURI);
        }
        chain.doFilter(request, response);
    }

    // Header에서 Authorization의 값을 찾아서 Bearer를 떼주는 메서드
    private String makeToken(HttpServletRequest httpServletRequest) {
        String bearerToken = httpServletRequest.getHeader(ACCESS_TOKEN);
        System.out.println(bearerToken);
        if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}
