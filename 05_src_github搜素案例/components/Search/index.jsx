// rcc

import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
  search = () => {
    const { value: keyWord } = this.keyWord;
    this.props.updateAppState({isFirst:false,isLoading:true})
  //  发ajax请求到本地3000端口服务器
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      response=>{
        this.props.updateAppState({users:response.data.items,isLoading:false})
      },
      error=>{
        this.props.updateAppState({isLoading:false,err:error.message})
      }
    )
  }
  render() {
    return (
        <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input ref={c=>this.keyWord=c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
