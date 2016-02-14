package org.skyfx.service;

import org.junit.Test;

import static org.assertj.core.api.Assertions.*;

public class HelloServiceTest {

    HelloService service = new HelloServiceImpl();

    @Test
    public void shouldSayHello() {

        assertThat(service.sayHello())
            .isNotEmpty()
            .isEqualTo("Hello world!!!");
    }

}
