class List extends React.Component {
    
    constructor(props){
        super(props);
        this.testAdd10000Items = this.testAdd10000Items.bind(this);
        this.state = {items: []}
    }

    testAdd10000Items() {
        var items = [];
        for (let index = 0; index < 10000; index++) {
            items.push({
                id: index,
                name: 'test'
            });
        }
        this.setState({items: items});
    }

    render() {
        var listItems = this.state.items.map((item) => React.createElement('li', {key: item.id}, item.name));
      return React.createElement('div', null, 
        React.createElement('a', {className: 'btn', onClick: this.testAdd10000Items}, 'Test adding 10000 items to the list'),
        React.createElement('ul', null, listItems)
        );
    }
  }
  
  ReactDOM.render(
    React.createElement(List,null, null),
    document.getElementById('root')
  );    