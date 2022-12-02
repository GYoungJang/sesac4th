package sesac.spring.study.sesacspringstudy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@Controller
public class HelloController {
    @GetMapping("hi")
    public String getHi(Model model) {
        model.addAttribute("text", "hihihi");
        model.addAttribute("utext", "<strong>utext</strong>");
        String[] names = {"kim", "lee", "park"};
        model.addAttribute("names", names);
        model.addAttribute("age", 29);
        return "hi";
    }
    @GetMapping("hello")
    public String getHi2() {
        return "hi";
    }

    @GetMapping("api")
    public String getApi(@RequestParam(value = "name", required = false) String name, Model model) {
        model.addAttribute("name", name);
        return "api";
    }
    @GetMapping("api2/{name}")
    public String getApi2(@PathVariable String name, Model model) {
        model.addAttribute("name", name);
        return "api";
    }
    @GetMapping("introduce/{name}")
    public String getApi3(@PathVariable String name, Model model) {
        model.addAttribute("name", name);
        return "api";
    }
    @GetMapping("introduce2")
    public String getApi4(@RequestParam(value="name", required = false) String name, @RequestParam(value="age", required = false) String age, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "api";
    }

    @GetMapping("Post")
    public String getForm() {
        return "Post";
    }

    @PostMapping("mvc-post")
    public String postMVC(
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "age", required = false) String age,
            Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "api";
    }

    @GetMapping("dto")
    @ResponseBody
    public Person getDto()
}
