#!/usr/bin/node
class QueueLogger {
  static logStart (queueName) {
    console.log(`Starting queue ${queueName}.`);
  }

  static notifyHighPriority (queueName, priority) {
    if (priority > 9) {
      console.warn(`High priority task added to ${queueName}.`);
    }
  }
}

class TaskQueue {
  constructor (name, logger = QueueLogger) {
    this.queueName = name;
    this.tasks = [];
    this.isProcessing = false;
    this.logger = logger;
  }

  addTask (taskFn, priority) {
    if (!taskFn || typeof taskFn !== 'function') {
      console.error('Task must be a function.');
      return;
    }

    this.tasks.push({ taskFn, priority, timestamp: Date.now() });
    this.logger.notifyHighPriority(this.queueName, priority);

    if (this.tasks.length === 1 && !this.isProcessing) {
      this.logger.logStart(this.queueName);
      this._startProcessing();
    }
  }

  _startProcessing () {
    this.isProcessing = true;
  }
}

module.exports = { TaskQueue, QueueLogger };
