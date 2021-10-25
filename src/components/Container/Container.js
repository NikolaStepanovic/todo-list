import classes from './Container.module.css';

const Container = props => {
  return (
    <div className={classes.Box}>
      <div className={classes.containerLeft}>
        <p>Title: {props.title}</p>
        <p>Node: {props.node}</p>
      </div>
      <div className={classes.containerRight}>
        {props.children}
        <button onClick={props.delete} className={classes.btnRight}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Container;
