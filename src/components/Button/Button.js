import classes from './Button.module.css';

const Button = props => {
  return (
    <div className={classes.Box}>
      <button onClick={props.click} className={classes.Btn}>
        Add note
      </button>
      <button onClick={props.clickDraf} className={classes.Btn}>
        Draft
      </button>
    </div>
  );
};

export default Button;
