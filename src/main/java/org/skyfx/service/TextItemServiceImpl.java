package org.skyfx.service;

import org.skyfx.model.TextItem;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class TextItemServiceImpl implements TextItemService {

    List<TextItem> textItems = new ArrayList<>();

    @Override
    public TextItem create(TextItem textItem) {
        textItem.setId(UUID.randomUUID());
        textItems.add(textItem);
        return textItem;
    }

    @Override
    public List<TextItem> getAll() {
        return textItems;
    }
}
