import React, { useState, useEffect } from 'react';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useLocation } from 'react-router-dom';
import {getPosting} from '../apis/blog'
import Metas from '../components/common/Metas'

const PostingDetail = () => {
    const location = useLocation();
    const state = location.state;

    const [post, setPost] = useState(null)

    useEffect(() => {
        getPosting(state.postingID)
            .then(res => setPost(res))
    }, [state.postingID])


    return (
        <div>
            <Metas title={post?.title} description='포스팅 상세 내용' url={window.location.href}/>
            <div className='postingContainer'>
                {post &&
                    <>
                        <div className='postingHeader'>
                            <p className='title'>{post.title}</p>
                        </div>
                        <Viewer initialValue={post.htmlContent}/>
                    </>
                }
            </div>
        </div>
    );
};

export default PostingDetail;
