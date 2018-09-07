import React, {Component} from 'react';
// import {Button,Icon } from 'antd';
import {Rate,Table, Divider, Tag,Pagination} from 'antd';

import axios from "axios"

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};
  
const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
);

const columns = [
    {
        title: '表头1',
        dataIndex: 'pid',
        key: 'pid',
    },
    {
        title: '表头2',
        dataIndex: 'tit',
        key: 'tit',
    },
    {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a href="javascript:;">{record.key}</a>
                <Divider type="vertical" />
                <a href="javascript:;">Delete</a>
            </span>
        ),
    }
]


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            pageSize: 10,
            list:[]
        };
    }
    state = {
        test:'1'
    }
    // 页码变化监听
    pageChange = (page, pageSize) =>{
        this.state.page = page;
        this.getList()
    }
    // 每页显示数量变化监听
    pageSizeChange = (current, size) => {
        console.log(current,size)
        console.log(111)
    }
    componentDidMount(){
        this.getList()
    }
    
    // 列表
    getList(){
        console.log(this.state.page)
        axios.get('https://easy-mock.com/mock/5982ea3ca1d30433d852575c/mozzie/list_a1', {params: {page:this.state.page}})
        .then(res => {
            console.log(res.data.data)
            const { items, page } = res.data.data;
            
            console.log(items);
            console.log(page);
            this.setState({
                page: Number(page),
                list: items
            });
        })
    }
    render(){
        // this.props.store.index.list
        const dataSource = (this.state.list || []).map((item, index) => {
            item.key =  Number(index);
            return item;
        })
        return(
            <div>Index {element}
                {/* <Button type="primary">Primary</Button> */}

                <Rate allowHalf defaultValue={2.5} />
                <Table columns={columns} dataSource={dataSource} pagination={false}/>
                {this.state.page}
                <footer>
                    <Pagination 
                        defaultPageSize={10} 
                        onChange={this.pageChange} 
                        total={2} 
                        pageSize={1} 
                        current={this.state.page}
                        onShowSizeChange={this.pageSizeChange}/>
                </footer>
            </div>
        )
    }
}

export default Index;