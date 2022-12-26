import { Searchbar } from "./Searchbar/Searchbar";
import { useState, useEffect } from "react";
import { fetchImages } from "./fetch";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Modal } from "./Modal/Modal";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Notification } from "./Notification/Notification";
import { AppContainer } from "./App.styled";
const statusMachine = {
  PENDING: "pending",
  REJECTED: "rejected",
  RESOLVED: "resolved",
  ERROR: "error"
}
let page = 1;
const per_page = 12;
export const App = () => {
  const [data, setData] = useState([]);
  const [status, setstatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [inputValue, setinputValue] = useState('');
  const [modal, setmodal] = useState([]);
  useEffect(() => {
    if (modal.length > 0) {
      window.addEventListener("keydown", onExitEsc);
    } else {
      window.removeEventListener("keydown", onExitEsc);
    }
  })
  const onSubmit = (data) => {
    page = 1;
    setData([]);
    setinputValue(data.inputValue);
    setstatus(statusMachine.PENDING);
    fetchImages(data.inputValue, page, per_page).then(({ data }) => {
      if (data.totalHits > per_page) {
        setData(data.hits);
        setLoading(true);
        setstatus(statusMachine.REJECTED);
      }
      if (data.totalHits === 0) {
        setLoading(false);
        setstatus(statusMachine.ERROR);
      }
      if (data.totalHits < per_page && data.totalHits !== 0) {
        setLoading(false);
      }
    });
  }
  const onClickOverlay = (e) => {
    if (e.target.nodeName === "IMG") return;
    setmodal([]);
  }
  const onClick = (e) => {
    setmodal(e);
  }
  const onExitEsc = (e) => {
    if (e.code === "Escape") {
      setmodal([]);
    }
  }
  const plavno = () => {
    const { height: cardHeight } = document
      .querySelector(".css-6gimhd")
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: "smooth"
    });
  }
  const onClickLoadMore = (e) => {
    page++;
    setLoading(false);
    setstatus(statusMachine.PENDING);
    fetchImages(inputValue, page, per_page).then(({ data }) => {
      plavno();
      if (data.hits.length < per_page) {
        setData(prevState =>
          [...prevState, ...data.hits]
        );
        setLoading(false);
        setstatus(statusMachine.RESOLVED);
      } else {
        setData(prevState =>
          [...prevState, ...data.hits]
        );
        setLoading(true);
        setstatus(statusMachine.REJECTED);

      }
    })
  }
  return (<AppContainer><Searchbar onSubmit={onSubmit} />
    {data.length > 0 && <ImageGallery images={data} onClick={onClick} />}
    {modal.length > 0 && <Modal image={modal} onClickOverlay={onClickOverlay} />}
    {loading === true && <Button onClickLoadMore={onClickLoadMore} />}
    {status === statusMachine.PENDING && <Loader />}
    {status === statusMachine.ERROR && <Notification message="No data!! Please enter valid value" />}
    {status === statusMachine.RESOLVED && <Notification message="End of List" />}
  </AppContainer>)
}
