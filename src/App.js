import { useState } from 'react';
import classes from './App.module.css';
import Button from './components/Button/Button';
import Container from './components/Container/Container';
import OpenModal from './components/OpenModal/OpenModal';
import Overlay from './components/Overlay/Overlay';
import Sidedrawer from './components/Sidedrawer/Sidedrawer';
import OpenDraft from './components/openDraft/openDraft';
import { useSelector, useDispatch } from 'react-redux';
import * as action from './components/store/actions';

const App = () => {
  const [show, setShow] = useState(false);
  const [showDraft, setShowDraft] = useState(false);
  const [showSideDrawer, setshowSideDrawer] = useState(false);
  const [title, setTitle] = useState('');
  const [node, setNode] = useState('');
  const [titleSideBar, setTitleSideBar] = useState('');
  const [nodeSideBar, setNodeSideBar] = useState('');
  const [id, setId] = useState(0);

  const store = useSelector(state => state);
  const dispatch = useDispatch();

  const onClick = () => {
    setShow(false);
    dispatch(action.addNewList(title, node));
  };

  const onClickDrafts = () => {
    dispatch(action.onClickDraft(title, node));
    setShow(false);
  };

  const openSideDrawer = el => {
    setId(el.id);
    setTitleSideBar(el.title);
    setNodeSideBar(el.node);
    setshowSideDrawer(true);
  };

  const closeSideDrawer = () => {
    store.array.map(task => {
      if (task.id === id) {
        task.title = titleSideBar;
        task.node = nodeSideBar;
      }
    });
    setshowSideDrawer(false);
  };

  const openDraft = () => {
    return setShowDraft(true);
  };

  const closeDraft = () => {
    return setShowDraft(false);
  };

  const openModals = () => {
    return setShow(true);
  };

  const closeModals = () => {
    return setShow(false);
  };

  return (
    <div className={classes.App}>
      {showSideDrawer === true ? (
        <>
          <Sidedrawer
            close={closeSideDrawer}
            title={titleSideBar}
            node={nodeSideBar}
            change={e => setTitleSideBar(e.target.value)}
            changeNode={e => setNodeSideBar(e.target.value)}
            show={showSideDrawer}
          />
          <Overlay close={closeSideDrawer} />
        </>
      ) : null}
      <Button click={openModals} clickDraf={openDraft} />
      <div className={classes.Box}>
        {store.array.map((el, i) => {
          return (
            <Container
              key={i}
              delete={() => dispatch(action.deleteContainer(el.id))}
              title={el.title}
              node={el.node}
            >
              <button
                onClick={() => openSideDrawer(el)}
                className={classes.btnLeft}
              >
                Edit
              </button>
            </Container>
          );
        })}
      </div>
      {showDraft === true ? (
        <>
          <OpenDraft
            data={store.draftArray}
            delete={id => dispatch(action.onDeleteDraft(id))}
            close={closeDraft}
            click={(id, title, node) =>
              dispatch(action.passDraftToList(id, title, node))
            }
          />
          <Overlay close={closeDraft} />
        </>
      ) : null}
      {show === true ? (
        <>
          <OpenModal
            close={closeModals}
            click={onClick}
            clickDraft={onClickDrafts}
            title={e => setTitle(e.target.value)}
            node={e => setNode(e.target.value)}
          />
          <Overlay close={closeModals} />
        </>
      ) : null}
    </div>
  );
};

export default App;
