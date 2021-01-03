import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = (props) => {
  const inputRef=useRef();
  const handleSearch=()=>{
    const value=inputRef.current.value;
    props.onSearch(value);
  }
  const onClick =()=>{
    handleSearch();
  }
  const onKeyPress=(event)=>{
    if(event.key==='Enter'){
      handleSearch();
    }
  }
  return(
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="images/logo.png" alt="logo" className="{styles.logo}"/>
        <h1 className={styles.title}></h1>
      </div>
      <input 
      ref={inputRef}
      type="search" className={styles.input} placeholder="search" onKeyPress={onKeyPress}/>
      <button className={styles.button} type="submit" onClick={onClick}>
        <img className={styles.buttonImg}
        src="/images/search.png" 
        alt="search"/
        >
      </button>
    </header>

  )
};

export default SearchHeader;