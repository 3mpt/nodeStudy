import requests
import json

url = 'https://internlm-chat.intern-ai.org.cn/puyu/api/v1/chat/completions'
header = {
    'Content-Type':'application/json',
    "Authorization":""
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