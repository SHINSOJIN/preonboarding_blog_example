import React,{useState, useRef} from 'react';
import {useNavigate} from 'react-router-dom'
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import {submitPost} from "../apis/blog";
import Metas from "../components/common/Metas";

const Write = () => {
    const navigate = useNavigate()
    const editorRef = useRef(null)
    const [title, setTitle] = useState('');

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }



    const clickSubmit = () =>{
        const content = editorRef.current.getInstance().getMarkdown();
        submitPost(title, content)
            .then(() => {
                navigate('/post/:postId')
            })
    }
    return (
        <>
            <Metas title='새글 작성' description='포스팅을 작성해보자' url={window.location.href}/>
            <div className='writeContainer'>
                <input placeholder='제목을 입력하세요...' onChange={changeTitle}/>
                <Editor
                    initialValue="hello react editor world!"
                    previewStyle="vertical"
                    height="600px"
                    initialEditType="markdown"
                    useCommandShortcut={true}
                    ref={editorRef}
                />
                <button className='submit' onClick={clickSubmit}>게시하기</button>
            </div>
        </>

    );
};

export default Write;
