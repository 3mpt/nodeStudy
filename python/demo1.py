from langchain_openai import ChatOpenAI
from typing import TypedDict, Optional
from typing_extensions import Annotated
from langchain_core.utils.function_calling import convert_to_openai_tool
api_base_url =  "https://internlm-chat.intern-ai.org.cn/puyu/api/v1/"
model = "internlm2.5-latest"
api_key = ""


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
llm.bind_tools(tools=[dict_schema],
    tool_choice= "auto")
# Set the structured output schema
structured_llm = llm.with_structured_output(dict_schema)
# Invoke the model with a prompt
response = structured_llm.invoke("What weighs more, a pound of bricks or a pound of feathers")

# Output the response
print(response)
