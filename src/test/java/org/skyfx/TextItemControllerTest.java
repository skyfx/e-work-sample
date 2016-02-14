package org.skyfx;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.skyfx.model.TextItem;
import org.skyfx.service.TextItemService;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.UUID;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(MockitoJUnitRunner.class)
public class TextItemControllerTest {

    private static final MediaType MEDIA_TYPE = MediaType.parseMediaType("application/json;charset=UTF-8");

    @InjectMocks
    TextItemController textItemController;

    @Mock
    TextItemService textItemService;

    private MockMvc mockMvc;

    @Before
    public void setup() {
        this.mockMvc = MockMvcBuilders.standaloneSetup(textItemController).build();
    }

    @Test
    public void shouldCreateOneTextItem() throws Exception {

        String expectedTitle = "myTitle";
        String expectedBody = "myBody";

        TextItem textItem = new TextItem();
        textItem.setTitle(expectedTitle);
        textItem.setBody(expectedBody);

        String jsonRequest = new ObjectMapper().writeValueAsString(textItem);

        textItem.setId(UUID.randomUUID());
        when(textItemService.create(any(TextItem.class))).thenReturn(textItem);

        mockMvc.perform(
            post("/rest/text-items")
                .content(jsonRequest)
                .contentType(MediaType.parseMediaType("application/json;charset=UTF-8"))
                .accept(MEDIA_TYPE))
            .andExpect(status().isCreated())
            .andExpect(content().contentType(MediaType.parseMediaType("application/json;charset=UTF-8")))
            .andExpect(jsonPath("$.id").isNotEmpty())
            .andExpect(jsonPath("$.title").value(expectedTitle))
            .andExpect(jsonPath("$.body").value(expectedBody));
    }

    @Test
    public void shouldGetAllTextItems() throws Exception {

        when(textItemService.getAll()).thenReturn(Arrays.asList(new TextItem(), new TextItem()));

        mockMvc.perform(
            get("/rest/text-items")
                .accept(MEDIA_TYPE)
        )
            .andExpect(status().isOk())
            .andExpect(jsonPath("$").isArray())
            .andExpect(jsonPath("$", hasSize(2)));
    }
}
