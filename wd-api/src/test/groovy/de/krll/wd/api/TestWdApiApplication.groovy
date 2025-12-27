package de.krll.wd.api

import org.springframework.boot.SpringApplication

class TestWdApiApplication {

    static void main(String[] args) {
        SpringApplication.from(WdApiApplication::main).with(TestcontainersConfiguration).run(args)
    }

}
