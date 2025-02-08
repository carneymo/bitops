from sqlalchemy import create_engine

DATABASE_URL = "postgresql://postgres:password@db:5432/repos"
engine = create_engine(DATABASE_URL)
