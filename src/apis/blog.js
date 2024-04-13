import {api} from './createApi'
const fake_data = [{
    "blogID": 15,
    "postingID": 69,
    "homePostingUser": {
    "userID": 19,
        "nickname": "aaaa",
        "profileImageURL": null
},
    "title": "ChatGPT 사용 후기",
    "htmlContent": "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body><p id=\"id-df265946-99ef-4e92-a19e-23afbc5b3061\"><img src=\"https://www.ymca.int/wp-content/uploads/2023/08/chatGPT-768x479.jpg\" contenteditable=\"false\" /><br /></p><h1 id=\"id-1fb54148-b65f-4941-93a2-cd8fda99258f\">ChatGPT에 대한 소개</h1><p id=\"id-4e64a3dc-6647-4f0f-ba4a-30c24351b010\">ChatGPT는 OpenAI에서 개발한 자연어 처리 기술 모델로, 대화형 인공지능(AI) 모델 중 하나입니다. GPT는 \"Generative Pre-trained Transformer\"의 약자로, 텍스트 생성 및 이해 역할에서 뛰어난 성과를 보입니다. ChatGPT는 사용자와 대화를 주고받는 데 사용되며, 다양한 응용분야에서 활용됩니다.</p><h1 id=\"id-1f9d766a-0bb5-40e1-9db3-a5cb7bc16c79\">ChatGPT 사용 방법와 사례</h1><p id=\"id-061434b2-f332-4529-973b-e7fd2965f8cc\">Chat GPT를 사용하기 위해서는 OpenAI API에 액세스할 수 있어야 합니다. API를 통해 사용자는 다양한 언어 작업을 수행할 수 있으며, 텍스트를 생성하거나 분석하는 등의 작업을 수행할 수 있습니다.</p><p id=\"id-322af0a7-d8f5-4082-ac4d-897260d4daf7\"><br /></p><p id=\"id-901ec977-e772-498e-867a-ee1c31c92ee0\">예를 들어, Python 코드를 사용하여 API에 접근할 수 있습니다. 다음은 간단한 예시입니다:</p><div data-language=\"js\" class=\"toastui-editor-ww-code-block\" id=\"id-f6c97405-4a90-43be-8529-42e7d058e2e5\"><pre><code data-language=\"js\">import openai\n\nopenai.api_key = 'YOUR_API_KEY'\n\nresponse = openai.Completion.create(\n  engine=\"davinci\", \n  prompt=\"Once upon a time\",\n  max_tokens=50\n)\n\nprint(response.choices[0].text)\n\n<br /></code></pre></div><h4 id=\"id-9dfb75a9-cfd9-49db-82ab-7738a2f67770\">대화 시뮬레이션</h4><p id=\"id-8607f262-86b4-49d3-8b5c-440ce80e80ec\">ChatGPT와 대화를 시뮬레이션하기 위해 ChatGPT를 사용하려는 플랫폼이나 서비스를 선택합니다. 예를 들어, 웹사이트, 모바일 앱, 챗봇 등 다양한 환경에서 ChatGPT를 적용할 수 있습니다.</p><h4 id=\"id-16dfd92b-93fb-477b-87f1-e81bdb329aca\">API 통합</h4><p id=\"id-73042e8e-4843-42f5-8620-f3cdfcc37bb2\">OpenAI는 GPT 모델에 대한 API를 제공하므로, 해당 API를 통해 ChatGPT를 활용할 수 있습니다. API를 사용하면 사용자 정의된 응용프로그램과 연동할 수 있습니다.</p><h4 id=\"id-9bd282a0-9279-4534-985c-7cfea272e2ed\">텍스트 입력</h4><p id=\"id-4efe9e6e-75ae-4a05-90cd-c60d2c928300\">ChatGPT에게 대화를 시작할 텍스트를 입력합니다. 일반적으로 \"안녕하세요\"와 같은 인사말로 대화를 시작합니다.</p><h4 id=\"id-fc66dcb2-2390-4ef1-9f75-f4ccae3f84cf\">대화 진행</h4><p id=\"id-68b9943c-7660-4a0c-911c-29d21faaf2d3\">ChatGPT는 입력된 텍스트를 기반으로 응답을 생성합니다. 사용자는 ChatGPT의 응답에 따라 대화를 진행하며 질문을 하거나 정보를 요청할 수 있습니다.</p><h4 id=\"id-f8d82102-4913-40bd-8771-c7076c6f7e23\">피드백 및 조정</h4><p id=\"id-091feb1c-50cb-4a1b-b5c2-8d313f7815db\">ChatGPT의 응답이 원하는 대화와 부합하지 않을 때 사용자는 피드백을 제공하여 모델을 조정할 수 있습니다. 이를 통해 모델의 성능을 향상시킬 수 있습니다.</p><h1 id=\"id-8f32a9ef-679b-403b-b483-349b7d8d0155\">ChatGPT 사용 후기</h1><p id=\"id-8d30d7e8-2c8b-4ed0-8428-1d9e8688d7e3\">ChatGPT는 자연어 처리 분야에서 혁신적인 기술로 평가되고 있습니다. 그러나 모델은 여전히 개선이 필요한 부분도 있어 사용자의 요구에 완벽하게 부합하지 않을 때가 있습니다. 사용자는 문맥에 따라 모델의 응답을 조정하고 피드백을 통해 모델을 개선하는데 기여할 수 있습니다. ChatGPT의 발전은 대화 기반 인공지능의 미래를 밝게 보게 해주며, 다양한 응용 분야에서 활용 가능한 많은 기회를 제공합니다.</p><p id=\"id-f1755f47-64e7-41fa-b799-6d55f3035d5f\"><br /></p><p id=\"id-06d979d9-aac6-4041-8662-e6c6b2f81d92\">※ 이 문서는 Chat GPT에 대한 간단한 정보를 담고 있습니다. 보다 상세한 내용이나 활용 방법은 OpenAI 공식 홈페이지나 문서를 참고하시기 바랍니다.</p></body></html>",
    "thumbnailImageURL": "https://plog-file-bucket.s3.ap-northeast-2.amazonaws.com/64701463-0915-4a6b-a4e8-7d5f37720a91/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-11-12%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.08.17.png",
    "starCnt": 0,
    "hitCnt": 14,
    "createDt": "2023-11-12T08:07:57.084147"
},]
// 포스팅 목록 조회 함수
export const getPostingLists = async () => {
    try{
        const res = await api.get(`/home/postings`);
        return res.data
    }catch (err){
        return fake_data
    }
}

// 포스팅 단건에 하트 갯수를 변경하는 API
export const heartPlus = async (posting_id) => {
    try{
        const res = await api.put(`$/home/posting/${posting_id}/plus`);
        return res.data.starCnt;
    }catch (err){

    }
}

export const heartMinus = async (posting_id) => {
    try{
        const res = await api.put(`/home/posting/${posting_id}/minus`);
        return res.data.starCnt;
    }catch (err){

    }
}

// 포스팅 상세 조회
export const getPosting = async (posting_id) => {
    try{
        const res = await api.get(`/home/posting/${posting_id}`);
        return res.data
    }catch (err){
        return fake_data[0]
    }
}



// 포스팅 작성
export const submitPost = async (title, content) => {
    const params = {
        postingID: 10001,
        title: title,
        htmlContent: content
    }
    try{
        if(title !== '' && content !== ''){
            const res = await api.post(`/home/posting`, params);
            return res.data
        }else{
            alert('제목과 본문 모두 작성이 필요합니다.')
        }

    }catch (err){

    }
}
