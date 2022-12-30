import csv
import json

rows = []

for i in range(9):
    with open(f"resources/endsong_{i}.json", "r", encoding="utf-8") as file:
        js = json.load(file)

        for play in js:
            date, time = play["ts"].split("T")
            play["ts"] = f"{date} {time[:-1]}"
            rows.append(play)

with open('play.csv', 'w+', encoding="utf-8", newline='') as file:
    writer = csv.DictWriter(file, fieldnames=[a for a in rows[0].keys()])
    writer.writeheader()
    for row in rows:
        writer.writerow(row)
