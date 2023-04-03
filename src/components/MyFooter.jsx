const MyFooter = () => {
    const year = new Date().getFullYear();
  
    return <footer>{`Copyright © Mercurio & Co. ${year}`}</footer>;
  };
  
  export default MyFooter;