import React from 'react';
import s from './Profile.module.css';
import Profile from './Profile';
import * as axios from 'axios';
import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from '../../redux/profileReducer';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';
import {usersAPI} from '../../api/api'
import {withAuthRedirect } from '../../hoc/withAuthRedirect'
import {compose} from 'redux';

class ProfileContainer extends React.Component{
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }
    
    render() {
        
        return (
            <Profile {...this.props} savePhoto={this.props.savePhoto} isOwner={!this.props.match.params.userId} profile={this.props.profile} status={this.props.status} updateStatus = {this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps,{getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)




