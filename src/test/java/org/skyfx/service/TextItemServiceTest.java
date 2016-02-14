package org.skyfx.service;

import org.junit.Test;
import org.skyfx.model.TextItem;

import java.util.List;

import static org.assertj.core.api.Assertions.*;

public class TextItemServiceTest {

    TextItemService service = new TextItemServiceImpl();

    @Test
    public void shouldCreateATextMessageWithAnId() {

        TextItem textItem = new TextItem();

        TextItem result = service.create(textItem);
        assertThat(result.getId()).isNotNull();
    }

    @Test
    public void shouldGetAllTextMessages() {

        service.create(new TextItem());
        service.create(new TextItem());

        List<TextItem> result = service.getAll();

        assertThat(result).hasSize(2);

    }

}
