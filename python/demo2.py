import requests
import json

url = 'https://internlm-chat.intern-ai.org.cn/puyu/api/v1/chat/completions'
header = {
    'Content-Type':'application/json',
    "Authorization":"Bearer eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJqdGkiOiIyMjAwNDE5MSIsInJvbCI6IlJPTEVfUkVHSVNURVIiLCJpc3MiOiJPcGVuWExhYiIsImlhdCI6MTczNDAwOTAzOSwiY2xpZW50SWQiOiJlYm1ydm9kNnlvMG5semFlazF5cCIsInBob25lIjoiMTU1NDUwMzU3MDUiLCJ1dWlkIjoiMzQ3OGMyNDgtMGU2MS00Yzg0LWE0NWQtY2UyOWNkZjY1ZWY0IiwiZW1haWwiOiIiLCJleHAiOjE3NDk1NjEwMzl9.m3M9pWYvk3VjYfhTzjVjHgmBL0B3eF6FGcGkprGUQQhpsRsEwvpH8bdh9QFA61t1COo3vNDaYxG6CaLdFIkw1A"
}
data = {
    "model": "internlm2.5-latest",  
    "messages": [{
        "role": "user",
        "content": "你好~"
    }],
    "n": 1,
    "temperature": 0.8,
    "top_p": 0.9
}

res = requests.post(url, headers=header, data=json.dumps(data))
print(res.status_code)
print(res.json())
print(res.json()["data"]["choices"][0]["content"])