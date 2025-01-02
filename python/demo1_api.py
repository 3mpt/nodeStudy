from langchain_openai import ChatOpenAI
from typing import TypedDict, Optional
from typing_extensions import Annotated
from langchain_core.utils.function_calling import convert_to_openai_tool
api_base_url =  "http://127.0.0.1:23333/v1"
model = "/root/models/internlm2_5-7b-chat"
api_key = "123"

class AnswerWithJustification(TypedDict):
    '''An answer to the user question along with justification for the answer.'''
    answer: str
    justification: Annotated[Optional[str], None, "A justification for the answer."]



dict_schema = convert_to_openai_tool(AnswerWithJustification)
llm = ChatOpenAI(
    model_name=model,          # 使用你的模型
    temperature=0,           # 设置温度等其他参数
    openai_api_base=api_base_url,  # 传递 api_base_url  
    openai_api_key=api_key,  # 传递 api_key
)
print(dict_schema)

# Set the structured output schema
structured_llm = llm.with_structured_output(dict_schema)
# Invoke the model with a prompt
response = llm.invoke("What weighs more, a pound of bricks or a pound of feathers")

# Output the response
print('@',response)
