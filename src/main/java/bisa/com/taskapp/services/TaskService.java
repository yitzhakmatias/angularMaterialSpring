package bisa.com.taskapp.services;

import bisa.com.taskapp.Model.PendingTask;
import bisa.com.taskapp.Repository.ITaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/v1/tasks")
public class TaskService {
    @Autowired
    private ITaskRepository repository;

    @GetMapping
    public List<PendingTask> get() {
        return repository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody PendingTask note) {
        repository.save(note);
    }

    @GetMapping("/{id}")
    public PendingTask get(@PathVariable("id") long id) {

        return repository.getOne(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") long id) {
        PendingTask note = repository.getOne(id);
        repository.delete(note);
    }

    @RequestMapping(value = "/category")
    @ResponseBody
    public List<PendingTask> getNotesByCategory(@RequestParam(value = "filter", defaultValue = "none") String category) {
        return this.repository.findAll().stream().
                filter(p -> category.contains(p.getCategory())).collect(Collectors.toList());
    }
}
