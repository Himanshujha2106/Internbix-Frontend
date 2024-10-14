import requests

url = "https://api.pawan.krd/cosmosrp/v1/chat/completions"
headers = {
    "Content-Type": "application/json"
}
data = {
    "model": "cosmosrp",
    "messages": [
        {"role": "system", "content": "You are storyteller"},
        {"role": "user", "content": "tell a one line story in creepy way"}
    ]
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
