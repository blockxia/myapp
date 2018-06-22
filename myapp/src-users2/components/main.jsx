import React,{Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Main extends Component{
    static propTypes={
        searchName:PropTypes.string.isRequired
    }
    state={
        firstView:true,
        loading:false,
        users:[],
        errorMsg:''
    }

    componentDidMount(){
        PubSub.subscribe('search',(message,searchName)=>{
            this.setState({
                firstView:false,
                loading:true
            })
            const url=`https://api.github.com/search/users?q=${searchName}`
            axios.get(url)
                .then((response)=>{
                const result=response.data
                    const users=result.items.map(item=>({
                            url:item.html_url,
                            avatarUrl:item.avatar_url,
                            name:item.login
                        }))
                    this.setState({
                        loading:false,
                        users
                    })

                })
                .catch(error=>{
                    this.setState({
                        loading:false,
                        errorMsg:"请求失败！···"
                    })
                })

        })
    }


    componentWillReceiveProps(newProps){
        const searchName=newProps.searchName
        this.setState({
            firstView:false,
            loading:true
        })
     const url=`https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
            .then((response)=>{
                 const result=response.data
                const users=result.items.map(item=>({
                    url:item.html_url,
                    avatarUrl:item.avatar_url,
                    name:item.login
                }))
                this.setState({
                    loading:false,
                    users
                })
            })
            .catch((error)=>{
                this.setState({
                    loading:false,
                    errorMsg:'请求失败！'
                })

            })

    }
    render(){
        const {firstView,loading,users,errorMsg}=this.state
        if(firstView){
            return <h2>请输入关键字进行搜索···{this.props.searchName}</h2>
        }else if(loading){
            return <h2>搜索中。。。</h2>
        }else if(errorMsg){
            return <h2>{errorMsg}</h2>
        }else{
            return(
                <div className="row">
                    {
                        users.map((user,index)=>(
                            <div className="card" key={index}>
                                <a href={user.url} target="_blank">
                                    <img src={user.avatarUrl} style={{width: 100}}/>
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        ))
                    }
                </div>
            )
        }

    }
}