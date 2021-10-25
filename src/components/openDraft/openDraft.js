import classes from './OpenDraft.module.css';
import Container from '../Container/Container';

const openDraft = props => {
  return (
    <div className={classes.Box}>
      <button onClick={props.close} className={classes.Btn}>
        X
      </button>
      <div className={classes.Container}>
        {props.data.map((el, i) => {
          return (
            <Container
              delete={() => props.delete(el.id)}
              key={i}
              title={el.title}
              node={el.node}
            >
              <button
                onClick={() => props.click(el.id, el.title, el.node)}
                className={classes.btnLeft}
              >
                Pass to list
              </button>
            </Container>
          );
        })}
      </div>
    </div>
  );
};

export default openDraft;
