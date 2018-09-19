import React from 'React';
import axios from 'axios';
import Menu from './Menu/Menu.jsx';
import Hours from './Hours/Hours.jsx';
import Summary from './Summary/Summary.jsx';
import styles from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      restaurantData: {
        menu: {},
        hours: {},
      },
      date: undefined,
    }
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu() {
    this.setState({ showMenu: true });
  }

  hideMenu() {
    this.setState({ showMenu: false });
  }

  getData() {
    const id = window.location.pathname.split('/')[2];
    axios.get(`/restaurant/${id}/description`)
      .then((res) => {
        console.log(res.data);
        this.setState({ restaurantData: res.data, date: new Date() });
      });
  }

  componentDidMount() {
    this.getData();
  }


  render() {
    return (
      <div className={styles.sidebar}>
        Yelp
        <br></br>
        <br></br>
        <div className={styles.sidebarcontainer}>
          <div>
            <Summary
              hours={this.state.restaurantData.hours}
              showMenu={this.showMenu}
              priceRange={this.state.restaurantData.price_range}
              health={this.state.restaurantData.health_score}
            />
          </div>
          <div className={styles.hourcontainer}>
            <Hours
              hours={this.state.restaurantData.hours}
            />
          </div>
        </div>
        <Menu
          show={this.state.showMenu}
          hideMenu={this.hideMenu}
          menuInfo={this.state.restaurantData.menu}
          name={this.state.restaurantData.restaurant_name}
        />
      </div>
    )
  }
}

export default App;