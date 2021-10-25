import classes from './Overlay.module.css';

const Overlay = props => {
  return (
    <div onClick={props.close} className={classes.overlay}></div>
  );
};

export default Overlay;
