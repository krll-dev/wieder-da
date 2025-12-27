package de.krll.wd.api

import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.context.annotation.Import

@Import(TestcontainersConfiguration)
@SpringBootTest
class WdApiApplicationTests {

    @Test
    void contextLoads() {
    }

}
