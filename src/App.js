import React, {useState} from 'react';
import { Layout, Menu, Input } from 'antd';


import 'antd/dist/antd.css';
import './App.css';

const { Search } = Input;
const { Header, Content, Footer } = Layout 

const SearchResult = props => {
  // return props.data.map((a, b) => {
      return (
        <div>
          <p>{props.data.cpf}</p>
          <p>{props.data.nome}</p>
        </div>
      )
}

function App() {
  const [searchResult, setSearch] = useState({})
  const [input, setInput] = useState('')

  const api = () => {
    fetch(`http://localhost:3001/api/cpf/${input}`)
      .then(res => res.json())
      .then(data => {
        setSearch(data)
        // return data;
      })
      .catch(console.log)
  }
  return (
    // <div className="App">
      <Layout className="App">
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            {/* <Menu.Item key="1">Inicio</Menu.Item> */}
            <Menu.Item key="2">Consulta CPF</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px'}}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <Search
              placeholder="Informe o CPF"
              onChange={e => setInput(e.target.value)}
              onBlur={api}
              onSearch={api}
              style={{ marginTop: 50, width: 200 }}
            />
            <SearchResult data={searchResult}/>
          </div>
        </Content>
        <Footer style={{  }}></Footer>
      </Layout>
    // </div>
  );
}

export default App;
