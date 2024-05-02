#!/usr/bin/python3
"""Task class"""


from datetime import datetime

from sqlalchemy import create_engine, String, Column, Integer, Date, Time
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import sessionmaker
import uuid

tasks = []

engine = create_engine("mysql://root:root@localhost/task_web_app")
base = declarative_base()


class Task(base):

    __tablename__ = "tasks"

    task_id = Column(Integer, unique=True, autoincrement=True, primary_key=True)
    task_name = Column(String(128), nullable=False)
    task_description = Column(String(128), nullable=True, default=None)
    task_date = Column(Date, nullable=True, default=None)  # Specify default value if needed
    task_time = Column(Time, nullable=True, default=None)  # Specify default value if needed
    task_priority = Column(String(20), nullable=True, default=None)


    """Task Attributes:
                Title: Represents the title of the task.
                Description: Optional attribute for additional details about the task.
                Due Date: Optional attribute indicating the deadline for the task.
                Priority: Optional attribute to prioritize tasks."""

    def __init__(self, task_name, task_description, task_date, task_time, task_priority):
        self.task_name = task_name
        self.task_description = task_description
        self.task_date = task_date
        self.task_time = task_time
        self.task_priority = task_priority


    def add_task(self, session):                    #done
        """Add_task methode to handle adding newly
        created tasks"""

        session.add(self)
        session.commit()

    @classmethod                                    #done
    def get_task(cls, session, task_id):

        result = session.query(cls).filter(cls.task_id == task_id)
        return result

    @classmethod                                    #done
    def get_all_task(cls, session):

        result = session.query(cls).all()
        return result

                
    @classmethod                                    #done
    def delete_task(cls, session, task_id):
        
        task_to_delete = session.query(cls).filter(cls.task_id ==  task_id)
        for task in task_to_delete:
            session.delete(task)
        
        session.commit()
    
    @classmethod                                    #done
    def delete_all_task(cls, session):
    
        tasks_to_delete = session.query(cls).all()
        for task in tasks_to_delete:
            session.delete(task)
        
        session.commit()

    @classmethod                                    #done
    def update_task(cls, session, task_id, *args):
        task_to_update = session.query(cls).filter(cls.task_id == task_id)
        for task in task_to_update:
            task.task_name = args[0]
            task.task_description = args[1]
            task.task_date = args[2]
            task.task_time = args[3]
            task.task_priority = args[4]      
        
        session.commit()


base.metadata.create_all(bind=engine)

Session = sessionmaker(bind=engine)

tasksession = Session()


#new_task = Task("madafulla", "ait lmadafulla", "2024-04-20", "10:20", "H")

#new_task.add_task(tasksession)


# result = Task.get_all_task(tasksession)

# # for task in result:
# #     print(task.task_name)


# onetask = Task.get_task(tasksession, 1)

# dlet = Task.delete_task(tasksession,16)

task_tou_update = Task.update_task(tasksession, 15, "updated_task", "this is the task that i have updated", "2025-04-20", "12", "L")

# for task in onetask:
#     print(task.task_name)