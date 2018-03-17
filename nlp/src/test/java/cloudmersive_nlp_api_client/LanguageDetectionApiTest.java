/*
 * nlpapi
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package cloudmersive_nlp_api_client;

import invalidPackageName.ApiException;
import io.swagger.client.model.LanguageDetectionResponse;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for LanguageDetectionApi
 */
@Ignore
public class LanguageDetectionApiTest {

    private final LanguageDetectionApi api = new LanguageDetectionApi();

    
    /**
     * Detect language of text
     *
     * Automatically determine which language a text string is written in.  Supports Danish (DAN), German (DEU), English (ENG), French (FRA), Italian (ITA), Japanese (JPN), Korean (KOR), Dutch (NLD), Norwegian (NOR), Portuguese (POR), Russian (RUS), Spanish (SPA), Swedish (SWE), Chinese (ZHO).
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void languageDetectionPostTest() throws ApiException {
        String textToDetect = null;
        LanguageDetectionResponse response = api.languageDetectionPost(textToDetect);

        // TODO: test validations
    }
    
}