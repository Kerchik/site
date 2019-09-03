import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress, requestUsers} from '../../redux/usersReducer';
import * as axios from 'axios';
import preLoader from '../../assets/images/loading.svg';
import PreLoader from '../common/preloader/PreLoader';
import {usersAPI} from '../../api/api';
import {compose} from 'redux';
import {withAuthRedirect } from '../../hoc/withAuthRedirect'
import {getPageSize, getUsers, getCurrentPage, getTotalUsersCount, getIsFetching, getFollowingInProgress} from '../../redux/usersSelectors'

class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }
    
    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    
    render() {
        
        return <>
            {this.props.isFetching ? 
             <PreLoader /> : null}
            <Users  totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress= {this.props.followingInProgress}
        
        
            />
        </>
    }
}

/*const mapStateToProps = (state) => {
    
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        
    }
}*/
let mapStateToProps = (state) => {
    
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        
    }
}



export default compose(
    
    connect(mapStateToProps, {follow,unfollow,setCurrentPage,toggleFollowingProgress,requestUsers})
)(UsersContainer)