import React, {useEffect, useState} from 'react';
import {getPostingLists} from "../../apis/blog";
import PostingCard from "./PostingCard";

const MainPosting = () => {
    // 포스팅 정보를 상태로 관리
    const [postingList, setPostingList] = useState([])

    useEffect(() => {
        getPostingLists()
            .then(res => setPostingList(res))
            .catch(err => console.log(err))
    },[])


    return (
        <>
            {postingList.length === 0 ?
                <p className='empty'>표시할 컨텐츠가 존재하지 않습니다.</p>
                :
                <div className='mainPosting' >
                    {postingList.map((post) => <PostingCard key={post.postingID} post={post}/>)}
                </div>
            }

        </>

    );
};

export default MainPosting;
