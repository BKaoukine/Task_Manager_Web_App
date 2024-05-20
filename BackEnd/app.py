#!/usr/bin/python3

from flask import Flask, jsonify, request
from flask_cors import CORS
from sqlalchemy.orm import sessionmaker
from models import Task, engine, Session
app = Flask(__name__)
CORS(app)

@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    """Endpoint to get all tasks"""
    session = Session()
    tasks = Task.get_all_task(session)
    serialized_tasks = []
    
    for task in tasks:
        serialized_task = {
            'task_id': task.task_id,
            'task_name': task.task_name,
            'task_description': task.task_description,
            'task_date': task.task_date.strftime('%Y-%m-%d') if task.task_date else None,
            'task_time': task.task_time.strftime('%H:%M:%S') if task.task_time else None,
            'task_priority': task.task_priority
        }
        serialized_tasks.append(serialized_task)
    
    session.close()
    return jsonify(serialized_tasks)

@app.route('/api/add_task', methods=['POST'], strict_slashes=False)
def add_task():
    """Add_task method to handle adding newly created tasks"""
    try:
        data = request.get_json()
        app.logger.debug(f"Received data: {data}")
        
        if not data:
            return jsonify({"error": "Invalid JSON data"}), 400
        
        task_name = data.get('task_name')
        task_description = data.get('task_description')
        task_date = data.get('task_date')
        task_time = data.get('task_time')
        task_priority = data.get('task_priority')

        if not task_name or not task_description or not task_date or not task_time or not task_priority:
            app.logger.debug("Missing required fields")
            return jsonify({"error": "All fields are required"}), 400

        new_task = Task(
            task_name=task_name,
            task_description=task_description,
            task_date=task_date,
            task_time=task_time,
            task_priority=task_priority
        )

        # Use a session to add the task
        session = Session(bind=engine)
        session.add(new_task)
        session.commit()
        session.refresh(new_task)  # Refresh to bind the instance to the session
        session.close()

        return jsonify({"message": "Task added successfully", "task_id": new_task.task_id}), 201
    except Exception as e:
        app.logger.error(f"Exception occurred: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/delete_task/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    """Endpoint to delete a task by its ID"""
    session = Session() # type: ignore
    Task.delete_task(session, task_id)
    session.close()
    return jsonify({"message": "Task deleted successfully"}), 200

@app.route('/api/update_task/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    """Endpoint to update a task by its ID"""
    data = request.json
    task_name = data.get('task_name')
    task_description = data.get('task_description')
    task_date = data.get('task_date')
    task_time = data.get('task_time')
    task_priority = data.get('task_priority')

    session = Session() # type: ignore
    Task.update_task(session, task_id, task_name, task_description, task_date, task_time, task_priority)
    session.close()
    return jsonify({"message": "Task updated successfully"}), 200


if __name__ == '__main__':
    app.run(debug=True)
