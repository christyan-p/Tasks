package com.christyanpaim.tasks.repository;

import com.christyanpaim.tasks.model.Task;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Integer> {

}
