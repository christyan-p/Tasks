package com.christyanpaim.tasks.Controller;

import com.christyanpaim.tasks.model.Task;
import com.christyanpaim.tasks.repository.TaskRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({ "/tasks" })
public class TaskController {

    private TaskRepository repository;

    TaskController(TaskRepository taskRepository) {
        this.repository = taskRepository;
    }

    // Methods
    @CrossOrigin
    @GetMapping
    public java.util.List<Task> findAll() {
        return repository.findAll();
    }

    @CrossOrigin
    @GetMapping(path = {"/{nrtarefa}"})
    public ResponseEntity <?> findById(@PathVariable Integer nrtarefa){
        return repository.findById(nrtarefa)
           .map(record -> ResponseEntity.ok().body(record))
           .orElse(ResponseEntity.notFound().build());
    }

    @CrossOrigin
    @PostMapping
    public Task create(@RequestBody Task task) {
        return repository.save(task);
    }

    @CrossOrigin
    @PutMapping(path = {"/{nrtarefa}"})
    public ResponseEntity <?> update(@PathVariable("nrtarefa") Integer nrtarefa, @RequestBody Task task) {
    return repository.findById(nrtarefa)
            .map(record -> {
                record.setNmtarefa(task.getNmtarefa());
                record.setEstadotarefa(task.getEstadotarefa());
                record.setFototarefa(task.getFototarefa());
                Task updated = repository.save(record);
                return ResponseEntity.ok().body(updated);
            }).orElse(ResponseEntity.notFound().build());
    }

    @CrossOrigin
    @DeleteMapping(path = {"/{nrtarefa}"})
    public ResponseEntity <?> delete(@PathVariable Integer nrtarefa) {
    return repository.findById(nrtarefa)
            .map(record -> {
                repository.deleteById(nrtarefa);
                return ResponseEntity.ok().build();
            }).orElse(ResponseEntity.notFound().build());
    }
}