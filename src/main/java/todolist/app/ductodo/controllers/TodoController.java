package todolist.app.ductodo.controllers;

import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.servlet.view.RedirectView;
import todolist.app.ductodo.models.Task;
import todolist.app.ductodo.models.TaskRepository;

@Controller
public class TodoController {

    @Autowired
    private TaskRepository taskRepo;

    @GetMapping("/")
    public RedirectView process(){
        return new RedirectView("index.html");
    }

    @GetMapping("/todos")
    public String mainPage(Model model){
        System.out.println("Main page displaying all todos");
        List<Task> tasks = taskRepo.findAll();
        model.addAttribute("tasks", tasks);
        return "showAll"; 
    } 
}
