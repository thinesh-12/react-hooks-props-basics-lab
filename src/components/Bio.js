function Bio(props) {
    if (!!props.bio) {
      return <p>{props.bio}</p>;
    } else {
      return <div></div>;
    }
  }
  
  export default Bio;