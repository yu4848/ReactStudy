// rcc

import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
  search = () => {
    const { value: keyWord } = this.keyWord;
  //  发ajax请求到本地3000端口服务器
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      response=>{
        console.log('请求成功',response.data.items)
      },
      error=>{console.log('请求失败',error)}
    )
  }
  render() {
    return (
        <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input ref={c=>this.keyWord=c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;<button>Search</button>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
