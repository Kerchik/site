import React from 'react';
import s from './ProfileInfo.module.css'
import PreLoader from '../../common/preloader/PreLoader'
import userPhoto from '../../../assets/images/user.png'
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'


const ProfileInfo = (props) => {
   if (!props.profile) {
       return <PreLoader />
   }
    
    return (
        <div>
        {/*    <div className="">
                <img src = "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            </div> */}
            <div className={s.descriptionBlock}>
               <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            
        </div>
    )
}

export default ProfileInfo;