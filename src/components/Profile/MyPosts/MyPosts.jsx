import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import {reduxForm, Field} from 'redux-form';
import {required, maxLengthCreator} from '../../../utils/validators/validators'
import {Textarea} from '../../common/FormsControl/FormsControl'



const MyPosts = React.memo((props) => {
     console.log('asdf')
     let postsElements =
         props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

     let newPostElement = React.createRef();


     let onAddPost = (values) => {
             props.addPost(values.newPostText);
         };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})
const maxLength10 = maxLengthCreator(10);
let AddNewPostForm = (props) => {
   return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component={Textarea} validate={[required, maxLength10]} placeholder="Write something"/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
   )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;
