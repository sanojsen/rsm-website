import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { next } from './images';
import generateFunnyName from '../lib/getRandomName';
import moment from 'moment';
import 'moment-timezone';
import { CrakDefault } from './crackAdsMid';

const Comments = ({video_id, commentArray}) => {
    const [comments, setComments] = useState([]);
    const [userName, setUserName] = useState('')
    const commentListRef = useRef(null);
    const [userForm, setUserForm] = useState(true);
    const [email, setEmail] = useState('');
    const [userComment, setUserComment] = useState('')

    useEffect(() => {
        // Scroll to the bottom of the comment list whenever comments are updated
        if (commentListRef.current) {
            commentListRef.current.scrollTop = commentListRef.current.scrollHeight;
        }
    }, [comments]);

    useEffect(()=>{
        if(localStorage.getItem('name')){
            setUserName(localStorage.getItem('name'));
            setUserForm(false);
        }
        if(commentArray && commentArray.length){
            setComments(commentArray)
        }
    },[video_id])

    const getMessage = async() => {
        if(email || !userComment || userComment.trim() === ''){
            return;
        }
        let user = userName;
        try {
            if(userForm){
                if(userName){
                   
                    const wordToFind = "reelsmunkey";
                    const regex = new RegExp(`${wordToFind.split('').map(char => `[${char}${char.toUpperCase()}]`).join('[^a-zA-Z]*')}`, 'g');

                    const matches = userName.match(regex);

                    if (matches) {
                        user = generateFunnyName();
                        localStorage.setItem('name', user);
                    } else {
                        localStorage.setItem('name', userName);
                    }

                }else{
                    user = generateFunnyName();
                    localStorage.setItem('name', user);
                }
                setUserName(user)
                setUserForm(false);
            }
            let comment = {
                user: user,
                comments : userComment,
                video_id : video_id,
                created_at: moment().tz('UTC').format('DD/MM/YYYY h:mm a')
            }
       
            setComments(prevComments => [...prevComments, comment]);
            setUserComment(''); // Clear the input field

            const response = await fetch('/api/comments/add_comments', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(comment),
            });
    
          } catch (error) {
            console.log(error)
          }
    };

    const getInitials = (name) => {
        const nameArray = name.split(' ');
        if (nameArray.length >= 2) {
            if(nameArray[1][0]){
                return nameArray[0][0] + nameArray[1][0];
            }else{
                return nameArray[0][0];
            }
        } else if (nameArray.length === 1) {
            return nameArray[0][0];
        } else {
            return '';
        }
    };

    return (
        <div className="comments xs:w-[100%] sm:w-[35%] xs:px-0 sm:px-3 xs:h-[35vh] sm:h-[83vh] xs:mt-5 sm:mt-0">
            <div className="flex flex-col h-[100%] comment-container">
                <div className='f_11'>Comments :</div>
                {!comments.length && <div className='text-center mt-5'>
                    No comments available for this video, Be the first one... <br/>
                    <div className='xs:hidden sm:block mt-5'>   
                        <CrakDefault/>
                    </div>
                    
                </div>}
                <div className="comment-list flex-1"  ref={commentListRef}>
                    {comments.map((comment, index) => (
                        <div key={index} className="comment mt-2 flex" style={{ whiteSpace: 'pre-wrap' }}>
                            <div className='cmt_circle capitalize f_9 mt-[8px]'>
                                {getInitials(comment.user)}
                            </div>
                            <div className='fn12 w-[100%]'> 
                                <div className='flex justify-between'>
                                    <div className='clff f_9 capitalize'>{comment.user}</div>
                                    <div className='fn_11'>{comment.created_at}</div>
                                </div> 
                                <div>{comment.comments}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mainForm'>
                    <input type='email' name="enter your email" onChange={(e)=>setEmail(e.target.value)} />
                </div>
                {userForm && <div className="chat_input_box mt-2">
                    <div className='text-box'>
                        <input type='text' className='w-[100%]' maxLength="20" placeholder='Add your name...' onChange={(e)=>{setUserName(e.target.value)}} />
                    </div>
                </div>}
                
                {/* <div className="chat_input_box mt-2">
                    <div
                        contentEditable
                        ref={contentEditableRef}
                        spellCheck="false"
                        aria-label="Message field"
                        role="textbox"
                        data-placeholder="Type something..."
                        className="text-box f_14 empty-node"
                    ></div>
                    <div className="chat_submit" onClick={() => getMessage()}>
                        <Image className="" src={next} alt="get next video" />
                    </div>
                </div> */}
                <div className="chat_input_box mt-2">
                    <textarea
                        maxLength="300"
                        rows="3"
                        placeholder="Type something..."
                        className="text-box f_14 empty-node"
                        style={{ overflow: 'scroll' }}
                        value={userComment}
                        onChange={(e)=>setUserComment(e.target.value)}>
                    </textarea>
                    <div className="chat_submit" onClick={() => getMessage()}>
                        <Image className="" src={next} alt="submit message" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comments;
