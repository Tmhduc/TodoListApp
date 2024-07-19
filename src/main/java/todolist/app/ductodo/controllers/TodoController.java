package todolist.app.ductodo.controllers;

import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.servlet.view.RedirectView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import todolist.app.ductodo.models.Task;
import todolist.app.ductodo.models.TaskRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class TodoController {

    @Autowired
    private TaskRepository taskRepo;

    @GetMapping("/")
    public RedirectView newView(){
        return new RedirectView("/todos");
    }
    public String getMethodName(@RequestParam String param) {
        return new String();
    }
    
    @GetMapping("/todos")
    public String home(Model model) {
        List<Task> tasks = taskRepo.findAll();
        model.addAttribute("tasks", tasks);
        return "index";
    }

    @PostMapping("/todos")
    public String addTask(@RequestParam Map<String, String> task, HttpServletResponse response) {
        String newTask = task.get("task");
        if (newTask != null && !newTask.isEmpty()) {
            taskRepo.save(new Task(newTask));
        }
        response.setStatus(201);
        return "redirect:/todos";
    }
}
