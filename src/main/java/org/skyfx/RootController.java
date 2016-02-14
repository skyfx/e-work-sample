package org.skyfx;

import org.skyfx.service.HelloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RootController {

    @Autowired
    HelloService helloService;

    @RequestMapping("/sayHello")
    String index() {
        return helloService.sayHello();
    }
}
