import {Card, CardTitle, CardMedia,CardText } from 'react-materialize'

let ReusableCard = function statelessFunctionComponentClass(props) {
  let title = props.title;
  let text = props.text;
  return (

    <Card className='small'>
       {title}
       {text}
    </Card>

  );
};

export default ReusableCard;
