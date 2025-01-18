from fastapi import FastAPI
from kerykeion import RelationshipScore,AstrologicalSubject, KerykeionChartSVG
# from kerykeion import Astrolo
from pydantic import BaseModel
import re

app = FastAPI()

# Args: Name, year, month, day, hour, minuts, city, nation

@app.get("/chart/{name}/{year}/{month}/{day}/{hour}/{minuts}/{city}/{nation}")
async def getChart(name: str, year: int, month: int, day: int, hour: int, minuts: int, city: str, nation: str):
    temp = AstrologicalSubject(name, year, month, day, hour, minuts, city, nation)
    birth_chart_svg = KerykeionChartSVG(temp)
    template =  birth_chart_svg.makeTemplate()
    cleaned_text = re.sub(r'\n', '', template)
    return cleaned_text


@app.get("/relationship/{name1}/{year1}/{month1}/{day1}/{hour1}/{minuts1}/{city1}/{nation1}/{name2}/{year2}/{month2}/{day2}/{hour2}/{minuts2}/{city2}/{nation2}")
async def getRelationship(name1: str, year1: int, month1: int, day1: int, hour1: int, minuts1: int, city1: str, nation1: str, name2: str, year2: int, month2: int, day2: int, hour2: int, minuts2: int, city2: str, nation2: str):
    temp1 = AstrologicalSubject(name1, year1, month1, day1, hour1, minuts1, city1, nation1)
    temp2 = AstrologicalSubject(name2, year2, month2, day2, hour2, minuts2, city2, nation2)
    relationship = RelationshipScore(temp1, temp2)
    return {"relationship": relationship.score}


@app.get("/api/data")
async def get_data():
    return {"message": "Hello, World!"}

class Item(BaseModel):
    name: str

@app.post("/api/data")
async def post_data(item: Item):
    return {"you_sent": item}
