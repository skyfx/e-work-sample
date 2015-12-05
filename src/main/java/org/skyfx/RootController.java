package org.skyfx;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RootController {

    @RequestMapping("/sayHello")
    String index() {
        return "Hello World!!!";
    }

}
