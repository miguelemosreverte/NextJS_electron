
import Header from '../components/Header'
import ReusableCard from '../components/CardComponent'

import data from './data.json';

let Application = React.createClass({
  createCard: function (card) {
    return <ReusableCard title={card.title} text={card.text}/>;
  },

  createCards: function (cards) {
    return cards.map(this.createCard);
  },

  render: function () {
    return (
      <div className="container">

        <Header/>
        <div className="row">
          <div className="col-sm-12 text-center">

            {this.createCards(data.cards)}

          </div>
        </div>
      </div>
    );
  }
});

export default Application;
