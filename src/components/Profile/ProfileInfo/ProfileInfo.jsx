import React from 'react';
import s from './ProfileInfo.module.css'
import PreLoader from '../../common/preloader/PreLoader'
import userPhoto from '../../../assets/images/user.png'
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'


const ProfileInfo = ({profile, updateStatus, status}) => {
   if (!profile) {
       return <PreLoader />
   }
    
    return (
        <div>
            <div className={s.descriptionBlock}>
               <img src={profile.photos.large != null ? profile.photos.large : userPhoto}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            
        </div>
    )
}

export default ProfileInfo;