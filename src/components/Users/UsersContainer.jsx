import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress, requestUsers} from '../../redux/usersReducer';
import PreLoader from '../common/preloader/PreLoader';
import {compose} from 'redux';
import {getPageSize, getUsers, getCurrentPage, getTotalUsersCount, getIsFetching, getFollowingInProgress} from '../../redux/usersSelectors'

class UsersContainer extends React.Component {
    
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize);
    }
    
    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize);
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