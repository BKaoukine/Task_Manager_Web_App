from sqlalchemy import create_engine, String, Column, Integer, Date, Time
from sqlalchemy.orm import declarative_base, sessionmaker

Base = declarative_base()

class Task(Base):
    __tablename__ = "tasks"

    task_id = Column(Integer, unique=True, autoincrement=True, primary_key=True)
    task_name = Column(String(128), nullable=False)
    task_description = Column(String(128), nullable=True, default=None)
    task_date = Column(Date, nullable=True, default=None)
    task_time = Column(Time, nullable=True, default=None)
    task_priority = Column(String(20), nullable=True, default=None)

    def __init__(self, task_name, task_description, task_date, task_time, task_priority):
        self.task_name = task_name
        self.task_description = task_description
        self.task_date = task_date
        self.task_time = task_time
        self.task_priority = task_priority

    @classmethod
    def get_task(cls, session, task_id):
        return session.query(cls).filter(cls.task_id == task_id).first()

    @classmethod
    def get_all_task(cls, session):
        return session.query(cls).all()

    @classmethod
    def delete_task(cls, session, task_id):
        task_to_delete = session.query(cls).filter(cls.task_id == task_id).first()
        if task_to_delete:
            session.delete(task_to_delete)
            session.commit()

    @classmethod
    def delete_all_task(cls, session):
        tasks_to_delete = session.query(cls).all()
        for task in tasks_to_delete:
            session.delete(task)
        session.commit()

    @classmethod
    def update_task(cls, session, task_id, task_name, task_description, task_date, task_time, task_priority):
        task_to_update = session.query(cls).filter(cls.task_id == task_id).first()
        if task_to_update:
            task_to_update.task_name = task_name
            task_to_update.task_description = task_description
            task_to_update.task_date = task_date
            task_to_update.task_time = task_time
            task_to_update.task_priority = task_priority
            session.commit()

# Database setup
engine = create_engine("mysql://root:root@localhost/task_web_app")
Base.metadata.create_all(bind=engine)
Session = sessionmaker(bind=engine)
