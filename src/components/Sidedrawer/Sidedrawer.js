import classes from './Sidedrawer.module.css';

const Sidedrawer = props => {
  const translate = props.show === true ? 0 : -340;
  return (
    <div
      className={classes.Box}
      style={{ transform: `translateX(${translate}px)` }}
    >
      <button onClick={props.close} className={classes.Close}>
        X
      </button>
      <h1 className={classes.title}>Edit Note</h1>
      <p className={classes.p}>Title:</p>
      <input
        onChange={props.change}
        className={classes.Input}
        value={props.title}
        type={'text'}
      />
      <p className={classes.p}>Add note:</p>
      <input
      onChange={props.changeNode}
        className={classes.Input}
        value={props.node}
        type={'text'}
      />
      <button onClick={props.close} className={classes.Submit}>
        Submit
      </button>
    </div>
  );
};

export default Sidedrawer;
