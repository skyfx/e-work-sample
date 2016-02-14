package org.skyfx;

import org.skyfx.model.TextItem;
import org.skyfx.service.TextItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rest/text-items")
public class TextItemController {

    @Autowired
    TextItemService textItemService;

    @RequestMapping(method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    TextItem createOne(@RequestBody TextItem textItem) {
        return textItemService.create(textItem);
    }

    @RequestMapping(method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    List<TextItem> readAll(){
        return textItemService.getAll();
    }
}
