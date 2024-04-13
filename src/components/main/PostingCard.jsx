import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {heartPlus, heartMinus} from "../../apis/blog";
import user from '../../assets/user.svg'

const PostingCard = ({post}) => {
    const navigation = useNavigate();

    const [heartCnt , setHeartCnt] = useState(post.starCnt);
    const [isBookmark, setIsBookmark] = useState(false);


    const clickPostingCard = () => {
        navigation(`/post/${post.postingID}`, {state :{postingID:post.postingID}})
    }

    const clickHeart = () => {
        if(isBookmark === true){
            heartMinus(post.postingID)
                .then(res => setHeartCnt(res))
                .catch(err => console.log(err))
        } else {
            heartPlus(post.postingID)
                .then(res =>   setHeartCnt(res))
                .catch(err => console.log(err))
        }
        setIsBookmark(!isBookmark)
    }

    return (
        <div className='postingCard'>
            <div className='postingHeader'>
                <img src={post.homePostingUser.profileImageURL  || user} alt='user' width={20}/>
                <span>{post.homePostingUser.nickname}</span>
            </div>
            <div className='postingBody' onClick={clickPostingCard}>
                <img src={post.thumbnailImageURL || 'https://source.unsplash.com/random'}  alt='img'/>
                <p className='title'>{post.title}</p>
                <p className='htmlContent'>{post.htmlContent.slice(0,50)}</p>
            </div>
            <div className='postingFooter'>
                <span onClick={clickHeart}
                      style={{color: isBookmark === true ? '#e76464' : '#3f3f3f' }}
                >♥ {heartCnt} </span>
            </div>
        </div>
    );
};

export default PostingCard;
