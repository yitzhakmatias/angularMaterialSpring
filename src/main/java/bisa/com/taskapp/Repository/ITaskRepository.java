package bisa.com.taskapp.Repository;

import bisa.com.taskapp.Model.PendingTask;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ITaskRepository extends JpaRepository<PendingTask, Long> {
}
