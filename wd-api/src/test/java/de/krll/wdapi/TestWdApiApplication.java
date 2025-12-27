package de.krll.wdapi;

import org.springframework.boot.SpringApplication;

public class TestWdApiApplication {

  public static void main(String[] args) {
    SpringApplication.from(WdApiApplication::main).with(TestcontainersConfiguration.class).run(args);
  }

}
