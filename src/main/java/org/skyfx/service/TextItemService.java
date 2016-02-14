package org.skyfx.service;

import org.skyfx.model.TextItem;

import java.util.List;

public interface TextItemService {

    TextItem create(TextItem textItem);

    List<TextItem> getAll();
}
