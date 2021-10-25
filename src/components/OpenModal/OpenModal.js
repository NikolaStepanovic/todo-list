import classes from './OpenModal.module.css';

const OpenModal = props => {
  return (
    <div className={classes.Box}>
      <button className={classes.Btn1} onClick={props.close}>
        X
      </button>
      <p className={classes.Title}>Add another note</p>
      <p className={classes.p}>Title:</p>
      <input
        onChange={props.title}
        className={classes.input}
        type={'text'}
        placeholder={'Type title'}
      />
      <p className={classes.p}>Add note:</p>
      <input
        onChange={props.node}
        className={classes.input}
        type={'text'}
        placeholder={'Add note'}
      />
      <button onClick={props.click} className={classes.Btn}>
        Submit
      </button>
      <button onClick={props.clickDraft} className={classes.Btn}>
        Draft
      </button>
    </div>
  );
};

export default OpenModal;
