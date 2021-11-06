import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../reducks/items/selectors";
import { fetchItems } from "../reducks/items/operations";
import { push } from "connected-react-router";
import queryString from "query-string";
import Header from '../components/common/Header'
import Items from "../components/common/Items";
import Footer from "../components/common/Footer";
import Background from "../components/common/Background";
// import lays1 from '../assets/img/image-lays1.png';
// import lays2 from '../assets/img/image-lays2.png';
// import lays3 from '../assets/img/image-lays3.png';
// import lays4 from '../assets/img/image-lays4.png';
// import lays5 from '../assets/img/image-lays5.png';
// import lays6 from '../assets/img/image-lays6.png';
// import lays7 from '../assets/img/image-lays7.png';
// import lays8 from '../assets/img/image-lays8.png';
// import lays9 from '../assets/img/image-lays9.png';
// import lays10 from '../assets/img/image-lays10.png';



function Home() {

  const parsed = queryString.parse(window.location.search);
  const [page, setPage] = useState(1);
  const [category_name, setCategoryName] = useState(null);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const items = getItems(selector);
  useEffect(() => {
    if (parsed.page !== undefined) {
      setPage(parsed.page);
    }
    if (parsed.category_name !== undefined) {
      setCategoryName(parsed.category_name);
    }
  }, []); 
  useEffect(() => {
    dispatch(fetchItems(page, category_name));
  }, [page,category_name]);

    return (
        <>
      <Header/>{
         console.log(items)
       }
       <Background />
      <Items />

      <Footer />
        
        </>
            
    )
}

export default Home
