import "./Card.css";

const Card = (props) => {
  //here card+(whitespace) + other css classes received via props
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
